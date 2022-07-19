const Discord = require('discord.js')

module.exports = (client, queue, playList) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`playList Añadida: [${playList.name}](${playList.url})`, true)
  .setColor('YELLOW')

  queue.textChannel.send({ embeds: [embed] })

  }
