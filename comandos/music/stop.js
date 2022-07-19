const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const Distube = require("distube")

module.exports = {
  name: 'stop',
  alias: [],

    /**
    * @param {import{'discord.js'}.Message} int
    */   

  async execute (client, int, args){

    if(!int.member.voice.channel) return int.reply({ content: 'you must be on a voice channel', ephemeral: true })
    if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'you must be on the same voice channel as me', ephemeral: true })

    const queue = client.distube.getQueue(int.member.voice.channel)
    if(!queue) return int.reply({ content: 'There are no songs playing.', ephemeral: true })

  queue.stop()
  int.reply('The playlist has been deleted successfully.')

  }
}