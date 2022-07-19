const { Client, MessageEmbed, Collection, Guild  } = require("discord.js");

module.exports = {
  name: 'hug',
  alias: [],
  
execute (client, message, args){

  const user = message.mentions.users.first()

  if(!user) return message.channel.send("Debes mencionar a alguien")

  const embed1 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} they hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://nekocdn.com/images/trYMVXTu.gif")

  const embed2 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} they hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://i.pinimg.com/originals/08/de/7a/08de7ad3dcac4e10d27b2c203841a99f.gif")

  const embed3 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} they hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://i.pinimg.com/originals/b5/1d/f1/b51df18c3a0ebe6ddff723cf3103e174.gif")

  const embed4 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} they hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://64.media.tumblr.com/73dec4442975e9530b22b6735401d2be/tumblr_n2eu06dpiE1rcv8zio1_500.gif")

  const embed5 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} sthey hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://64.media.tumblr.com/826a784897bf75177d3369d5f2a026ea/tumblr_mzui9iywOG1t8690mo1_500.gif")

  const embed6 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} they hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://nekocdn.com/images/rfNtsTXB.gif")

  const embed7 = new MessageEmbed()
  .setDescription(`${message.author.username} and ${user.username} they hugged (つ≧▽≦)つ`)
  .setColor("PURPLE")
  .setImage("https://nekocdn.com/images/I9MUogRJ.gif")


  const embeds = [embed1, embed2, embed3, embed4, embed5, embed6, embed7]

  let embedfinal = embeds[Math.floor(Math.random() * embeds.length)]

  message.channel.send({ embeds: [embedfinal] })

 }

} 