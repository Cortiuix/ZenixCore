const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const simplydjs = require("simply-djs")

module.exports = {
  name: 'calculator',
  alias: [],

  execute (client, message, args){

    simplydjs.calculator(message, {
    embedColor: 'PURPLE', 
    })

  }
}