const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const Distube = require("distube")

module.exports = {
  name: 'play',
  alias: [],

    /**
    * @param {import{'discord.js'}.Message} int
    */   

  async execute (client, int, args){

    const cancion = args.join(" ")

    if(!int.member.voice.channel) return int.reply({ content: 'you must be on a voice channel', ephemeral: true })
    if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'you must be on the same voice channel as me', ephemeral: true })

    int.client.distube.playVoiceChannel(
      int.member.voice.channel,
      cancion,
      {
        textChannel: int.channel,
        member: int.member,
      }
    );

  }
}
