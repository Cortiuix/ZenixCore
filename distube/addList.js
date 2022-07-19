const Discord = require('discord.js')

module.exports = (client, playList) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`Playlist Añadida: **${playList.songs.length}** - en track`)
  .setColor('YELLOW')

  playList.textChannel.send({ embeds: [embed] })

  }