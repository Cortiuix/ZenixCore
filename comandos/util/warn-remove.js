const Discord = require('discord.js')
const db = require('../../models/warn-model.js')

module.exports = {
  name: 'warn-remove',
  alias: [],

  async execute (client, message, args){

    const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase())
    if (!user) return message.channel.send('I could not find the user')
    db.findOne({
        guild: message.guild.id, 
        user: user.user.id
    }, async (err, data) => {
        if (err) throw err;
        if (data) {
            let number = parseInt(args[1]) - 1
            if (isNaN(number)) return message.channel.send("that argument is not a number")
            data.content.splice(number, 1)
            message.channel.send('I have successfully removed the warn')
            data.save()
        } else {
            message.channel.send('this user has no warns on this server')
        }
    })

  }
}