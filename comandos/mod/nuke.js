const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'nuke',
  alias: [],

  execute (client, message, args){

    var perms = message.member.permissions.has("MANAGE_CHANNELS")
    if(!perms) return message.reply("You don't have **MANAGE_CHANNELS** to use commandos.")

    message.channel.clone().then((ch) =>{

      ch.setParent(message.channel.parent.id);
      ch.setPosition(message.channel.position);
      message.channel.delete();

      ch.send('Channel has been nuked')

    })

  }
}