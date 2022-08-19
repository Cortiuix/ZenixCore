const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const User = require(../../models/user-model)

module.exports = {
  name: 'blacklist',
  alias: [],
  
  execute (client, message, args){

        if(!message.author.id) === "903037096086888508" return message.reply("You are not the owner of the bot.")

        let member = client.users.cache.get(args[0]);
        if(!member) return message.reply(`No member found!`)

        let user = await User.findOne({ userId: member.id }) || new User({ userId: member.id })
   

    user.blacklisted = true;
    await user.save();


    return  message.reply(`User has been blacklisted from bot`)

  }
}