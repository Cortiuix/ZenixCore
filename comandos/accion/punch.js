const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'punch',
  alias: [],

  execute (client, message, args){

      let user = message.mentions.users.first()
  if(!user) return message.channel.send("you must mention someone")

  const embed1 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://nekocdn.com/images/0-NibtRq.gif")

  const embed2 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://pa1.narvii.com/6149/54574c4c4c6b13af16ff0f57931a170eba9e70e4_hq.gif")

  const embed3 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://31.media.tumblr.com/8d2deadb4562284d20b3a04562eb5e73/tumblr_mqj628EEUf1s5wiipo1_500.gif")

  const embed4 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://nekocdn.com/images/YBDe9223I.gif")

  const embed5 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://nekocdn.com/images/3tBy4x9U.gif")

  const embed6 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://nekocdn.com/images/T2roaaM-.gif")

  const embed7 = new MessageEmbed()
  .setDescription(`${message.author.username} gave a punch to ${user.username} D:`)
  .setColor("GREEN")
  .setImage("https://nekocdn.com/images/6rAcGsLT4.gif")


  const embeds = [embed1, embed2, embed3, embed4, embed5, embed6, embed7]

  let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

  message.channel.send({embeds: [embedfinal] })

  }
}