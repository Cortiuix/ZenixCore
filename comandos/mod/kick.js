const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const client = new Discord.Client({ intents: [32511] })


module.exports = {
  name: 'kick',
  alias: ['user-kick'],

  async execute (client, message, args){

    var perms = message.member.permissions.has("KICK_MEMBERS")
    if(!perms) return message.reply("you don't have permission **KICK MEMBERS**")

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("mention a user to kick.")


  if(user === message.author) return message.channel.send("You cannot kick yourself.")

    const embed2 = new MessageEmbed()
    .setDescription("This user has a higher role than mine. \n Make sure my role is higher than that user's.")
    .setColor("RED")


  if(!user.kickable) return message.channel.send({embeds:[embed2]})

  var razon = args.slice(1).join(' ')
  if(!razon){
    razon = 'Not specified'
  }

  user.kick({ reason: razon})

  const embed = new MessageEmbed()
  .setTitle('kicked user')
  .setDescription(`**User:** ${user}\n**Moderator:** ${message.author}\n**reason:** ${razon}`)
  .setColor('GREEN')

  message.reply( {embeds: [ embed ]})

  }
}