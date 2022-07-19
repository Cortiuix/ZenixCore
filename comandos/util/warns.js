const Discord = require('discord.js')
const warndb = require('../../models/warn-model.js')

module.exports = {
  name: 'warns',
  alias: [],

  async execute (client, message, args){

    var perms = message.member.permissions.has("KICK_MEMBERS")
    if(!perms) return message.reply("you don't have permission **KICK MEMBERS**")

    const user = message.mentions.members.first()
    if(!user) return message.reply("mention a user to see their warnings")

    warndb.findOne({
        guild: message.guild.id,
        user: user.id
    }, async (err, data) => {
        if(err) throw err
        if (data) {
            const e = data.content.map(
                (w, i) => `\n\`${i + 1}\` - Moderator: ${message.guild.members.cache.get(w.moderator).user.tag}, reason: ${w.reason}`
            )
            const embed = new Discord.MessageEmbed()
            .setDescription(e.join(' '))
            .setColor("RED")

            message.channel.send({ embeds: [embed] })
        } else {
            message.channel.send('this user has no warnings')
        }
    })

  }
}