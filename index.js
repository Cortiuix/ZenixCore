const Discord = require("discord.js")

const client = new Discord.Client({ intents: [32511] })

client.on('ready', () => {
    console.log("Tamo activo")
})


client.commands = new Discord.Collection()

client.on('message', (message) => {

    let prefix = 'p!'

    if(!message.content.startsWith(prefix)) return; 
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send("Pong!")
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

client.login("Nzc4Njg0MjE4OTM4MDk3NzA0.GilwJZ.B-WW0_7VCd-FPbZNj1zkliVqnq1it9aMLyIKuE")