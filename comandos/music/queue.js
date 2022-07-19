const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const Distube = require("distube")

module.exports = {
  name: 'queue',
  alias: [],

    /**
    * @param {import{'discord.js'}.Message} int
    */   

  async execute (client, int, args){

    const queue = client.distube.getQueue(int.member.voice.channel)
    if(!queue) return int.reply({ content: 'There are no songs playing.', ephemeral: true })

    const embed = new Discord.MessageEmbed()
    .setTitle(`Playlist of ${int.guild.name}`)
    .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 100).join("\n"))
    .setColor("YELLOW")

    int.reply({ embeds: [embed]})

  }
}