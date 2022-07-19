const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'gay',
  alias: [],

  execute (client, message, args){

  const user = message.mentions.users.first() || message.author;

  const embed = new Discord.MessageEmbed()
  .setDescription(`${user} is %15 gay 🏳️‍🌈`)
  .setColor('GREEN')
 
  const embed2 = new Discord.MessageEmbed()
  .setDescription(`${user} is %20 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed3 = new Discord.MessageEmbed()
  .setDescription(`${user} is %31 gay 🏳️‍🌈`)
  .setColor('GREEN')
  const embed4 = new Discord.MessageEmbed()
  .setDescription(`${user} is %46 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed5 = new Discord.MessageEmbed()
  .setDescription(`${user} is %50 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed6 = new Discord.MessageEmbed()
  .setDescription(`${user} es %57 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed7 = new Discord.MessageEmbed()
  .setDescription(`${user} is %70 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed8 = new Discord.MessageEmbed()
  .setDescription(`${user} is %75 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed9 = new Discord.MessageEmbed()
  .setDescription(`${user} is %90 gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embed10 = new Discord.MessageEmbed()
  .setDescription(`${user} is gay 🏳️‍🌈`)
  .setColor('GREEN')

  const embeds = [embed, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]

  let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

  message.channel.send({ embeds: [embedfinal] })

  }
}