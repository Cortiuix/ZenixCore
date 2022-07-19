const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const warndb = require('../../models/warn-model.js')

module.exports = {
  name: 'warn',
  alias: [],

  async execute (client, message, args){

    var perms = message.member.permissions.has("KICK_MEMBERS")
    if(!perms) return message.reply("you don't have permission **KICK MEMBERS**")

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply("mention a user to warn.")

    if(user.id === message.author.id) return message.reply("You can't warn yourself")

    const razon = args.slice(1).join(" ")
    if(!razon) {
        razon: "no reason was given"
    }

    warndb.findOne({
        guild: message.guild.id,
        user: user.user.id
    }, async (err, data) => {
        if (err) throw err;
        if(!data) {
            data = new warndb({
                guild: message.guild.id,
                user: user.user.id,
                content: [{
                    moderator: message.author.id,
                    reason: razon
                }]
            })
        } else {
            const objet = {
                moderator: message.author.id,
                reason: razon
            }
                data.content.push(objet)
        }
        data.save()
    })

    const embed = new Discord.MessageEmbed()
    .setDescription(`✅ successfully warned **${user.user.tag}**`)
    .setColor("GREEN")

    message.reply({ embeds: [embed] })

    const embed2 = new Discord.MessageEmbed()
    .setDescription(`hello user ${user.user.tag} you have been warned in **${message.guild.name}** \n reason **${razon}**`)
    .setColor("RED")

    user.send({ embeds: [embed2] }).catch(err => {

      const embed3 = new Discord.MessageEmbed()
      .setTitle("ERROR")
      .setDescription(`An error occurred while executing the warn.js command. \n Error: I can't send messages to this user privately \n Server: **${message.guild.name}** \n user: **${user.user.tag}**`)
      .setColor("RED")

      client.channels.cache.get("937191383708618762").send({ embeds: [embed3] })
    })
  }
}