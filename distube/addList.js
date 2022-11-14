const Discord = require('discord.js')

module.exports = (client, playList) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`Playlist added to the track: **${playList.songs.length}**`)
  .setColor('#3e75a5')

  playList.textChannel.send({ embeds: [embed] })

  }