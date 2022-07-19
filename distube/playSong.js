const Discord = require('discord.js')

module.exports = (client, queue, song) => {

  const embed = new Discord.MessageEmbed()
  .setDescription(`Reproduciendo Ahora: [${song.name}](${song.url})`, true)
  .setColor('YELLOW')

  queue.textChannel.send({ embeds: [embed] })

}