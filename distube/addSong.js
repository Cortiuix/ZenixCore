const Discord = require('discord.js')

module.exports = (client, queue, song) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`Song added: [${song.name}](${song.url})`, true)
  .setColor('#3e75a5')

  queue.textChannel.send({ embeds: [embed] })

  }