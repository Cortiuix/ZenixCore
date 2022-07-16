const Discord = require("discord.js")

const client = new Discord.Client({ intents: [32511] })

client.on('ready', () => {
    console.log("Tamo activo")
})

client.login(process.env.TOKEN)