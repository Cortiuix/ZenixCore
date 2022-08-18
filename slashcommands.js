const fs = require('fs')
const discord = require('discord.js')
require('dotenv').config()
const { REST } = require("@discordjs/rest")
const { Routes } = require('discord-api-types/v9')

const commands = []

fs.readdirSync('./slashcommands').forEach(async(categorys) => {
    const commandFilesSlash = fs.readdirSync(`./slashcommands/${categorys}`).filter((archivo) => archivo.endsWith('js'))
    for(const archivo of commandFilesSlash){
        const command = require(`./slashcommands/${categorys}/${archivo}`)
        commands.push(command.data.toJSON())
    }
})

const rest = new REST({ version: '9'}).setToken("Nzc4Njg0MjE4OTM4MDk3NzA0.GilwJZ.B-WW0_7VCd-FPbZNj1zkliVqnq1it9aMLyIKuE")

createSlash()

async function createSlash(){
    try{
        await rest.put(
            Routes.applicationCommands('778684218938097704'), {
                body: commands
            }
        )
        console.log('Slash commands Ready!')
    } catch (e) {
        console.log(e)
    }
}