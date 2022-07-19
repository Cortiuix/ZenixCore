const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
  name: 'ban',
  alias: ['ban-user'],

  async execute (client, message, args){

    var perms = message.member.permissions.has("BAN_MEMBERS")
    if(!perms) return message.reply("you don't have permission **BAN MEMBERS**")

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("mention a user to ban.")

  if(user === message.author) return message.channel.send("You cannot ban yourself.")

    const embed2 = new MessageEmbed()
    .setDescription("This user has a higher role than mine. \n Make sure my role is higher than that user's.")
    .setColor("RED")

    if(!user.bannable) return message.channel.send({embeds:[embed2]})

    let banReazon = args.join(" ").slice(22)
    if(!banReazon) return message.channel.send("you must tell me a reason")

  const error = new Discord.MessageEmbed()
  .setTitle("ERROR")
  .setDescription(`I had an error sending the message privately to the user ${user.user.tag} in the ban.js command`)
  .setColor("RED")

    user.ban({ reason: banReazon})

  const embed = new MessageEmbed()
  .setDescription(`**✅ ${user.user.tag} banned**`)
  .setColor('GREEN')
  message.channel.send( {embeds: [ embed ]})

  const embedpriv = new Discord.MessageEmbed()
  .setDescription(`Hi user ${user.user.tag} You have been banned from ${message.guild.name} \n Reason: ${banReazon}`)
  .setColor("RED")
  .setFooter("Atom beta")

  user.send({ embeds: [embedpriv] }).catch(err => {
          client.channels.cache.get("937191383708618762").send({ embeds: [error] })
    })

  }
}