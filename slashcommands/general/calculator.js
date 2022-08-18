const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const simplydjs = require("simply-djs")

module.exports = {

    data: new SlashCommandBuilder()

    .setName('calculator')
    .setDescription('use a simple calculator 5m'),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, int){

    simplydjs.calculator(message, {
    embedColor: 'PURPLE', 
    })

    }
}