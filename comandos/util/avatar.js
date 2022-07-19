const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'avatar',
  alias: [],
  
  execute (client, message, args){

    let usuario = message.mentions.members.first() || message.member;

  const embed = new MessageEmbed()
  .setTitle(`Avatar de **${usuario.user.username}**`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
  .setFooter(`requested by ${message.member.displayName}`)

  message.channel.send({ embeds: [embed] });

  }
}