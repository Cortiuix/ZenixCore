const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const Distube = require("distube")

module.exports = {
  name: 'pause',
  alias: [],

    /**
    * @param {import{'discord.js'}.Message} int
    */   

  async execute (client, int, args){

    if(!int.member.voice.channel) return int.reply({ content: 'you must be on a voice channel', ephemeral: true })
    if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'you must be on the same voice channel as me', ephemeral: true })

    const queue = client.distube.getQueue(int.member.voice.channel)
    if(!queue) return int.reply({ content: 'There are no songs playing.', ephemeral: true })

    if(!queue.pause){
      int.reply({ content: 'The music was already paused', ephemeral: true })
      return;
    }

    try{
      client.distube.pause(int.member.voice.channel)
      int.reply({ content: 'Music was paused successfully' })
      return;
    } catch (e) {
      int.reply({ content: 'Hubo un error al ejecutar este comando' })
      console.log(e)
    }

  }

}