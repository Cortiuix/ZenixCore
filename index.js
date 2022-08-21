const Discord = require("discord.js")

const client = new Discord.Client({ intents: [32511] })
const DisTube = require("distube").default

const api = require("./config.json")

const express = require("express")
const app = express()

const fs = require('fs');
let { readdirSync } = require('fs');

require("./mongodb")

const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

require('./slashcommands')

client.slashcommand = new Discord.Collection()

const User = require("./models/user-model")

cs.setMongoURL(api.mongodb);

client.on('interactionCreate', async(interaction) => {
        if(interaction.isCommand()){
        const cmd = client.slashcommand.get(interaction.commandName)
        if(!cmd) return;

        try{
            await cmd.run(client, interaction)
        } catch (e) {
            console.error(e)
            return interaction.reply({ content: 'failed interaction'})
        }
    }
})

fs.readdirSync('./slashcommands').forEach(async(categorys) => {
  const commandFilesSlash = fs.readdirSync(`./slashcommands/${categorys}`).filter((archivo) => archivo.endsWith('js'))
  for(const archivo of commandFilesSlash){
    const command = require(`./slashcommands/${categorys}/${archivo}`)
    client.slashcommand.set(command.data.name, command)
  }
})

client.on('ready', () => {

  const estados = [
    {
        name: `users & servers`,
        type: 'WATCHING'
    },
    {
        name: 'Pansin beta',
        type: 'PLAYING'
    }
]

const aleatorio = estados[Math.floor(Math.random() * estados.length)]

setInterval(() => {
    function presence() {
        client.user.setPresence({
            activities: [aleatorio],
            status: 'idle'
        })
    }
    presence()
}, 10000)

    console.log("Tamo activo")
})


client.commands = new Discord.Collection()
let carpetas = fs.readdirSync('./comandos/').map((subCarpetas) => {
    const archivos = fs.readdirSync(`./comandos/${subCarpetas}`).map((comandos) => {
      let comando = require(`./comandos/${subCarpetas}/${comandos}`)
      client.commands.set(comando.name, comando)
    })
  })

client.on('message', async(message) => {

    let user = await User.findOne({ userId: message.author.id }) || new User({ userId: message.author.id })

    let prefix = 'p!'

    if(!message.content.startsWith(prefix)) return; 
    if(message.author.bot) return;

    if (user.blacklisted) {
    return message.reply(`You have been blacklisted from bot contact bot owner`)
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        const embed = new Discord.MessageEmbed()
        .setDescription(`Pong 🏓 \n ${client.ws.ping}`)
        .setColor("YELLOW")
        message.channel.send({ embeds: [embed] })

    }

    if(command === 'preba'){
        message.reply(api.prefix)
    }

    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
    try {
    cmd.execute(client, message, args)
    } catch (e) {
    return;
    }

    }

})

const { SpotifyPlugin } = require("@distube/spotify");
const { YtDlpPlugin } = require('@distube/yt-dlp');
new SpotifyPlugin({
  parallel: true,
  emitEventsAfterFetching: false,
  api: {
    clientId: api.spotify,
    clientSecret: api.spotify-secret,
  },
});

client.distube = new DisTube(client, {
  leaveOnStop: false,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new SpotifyPlugin({
      emitEventsAfterFetching: true
    }),
    new YtDlpPlugin()
  ],
  youtubeDL: false
})

for(const file of fs.readdirSync('./distube/')){
  if(file.endsWith('.js')){
    let fileName = file.substring(0, file.length - 3)
    let fileContents = require(`./distube/${file}`)
    client.distube.on(fileName, fileContents.bind(null, client))
  }
}

client.login(api.token)