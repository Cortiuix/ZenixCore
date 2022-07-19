const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const Distube = require("distube")

module.exports = {
  name: 'volume',
  alias: [],

    /**
    * @param {import{'discord.js'}.Message} int
    */   

  async execute (client, int, args){

    let porcentaje = args.join(" ")

    if(!int.member.voice.channel) return int.reply({ content: 'you must be on a voice channel', ephemeral: true })
    if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'you must be on the same voice channel as me', ephemeral: true })

    const queue = client.distube.getQueue(int.member.voice.channel)
    if(!queue) return int.reply({ content: 'There are no songs playing.', ephemeral: true })

    if(porcentaje < '1') return int.reply({ content: 'The value has to be greater than 1.', ephemeral: true })
    if(porcentaje > '100') return int.reply({ content: 'The value has to be less than 100.', ephemeral: true })

  try {
      client.distube.setVolume(int.member.voice.channel, porcentaje)
  } catch (e){
    int.reply(`There was an unexpected error: **${e}**`)
    return;

  }

  int.reply({ content: `The volume has been set to **${porcentaje}%**`})

  }
}
