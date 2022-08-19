const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const User = require("../../models/user-model")

module.exports = {
  name: 'rblacklist',
  alias: [],
  
  async execute (client, message, args){

    var id = ["903037096086888508"]
    if(!id.some(id => message.author.id == id)) return message.repy("You are not the owner.")

    let member = client.users.cache.get(args[0]);
    if(!member) return message.reply(`No member found!`)

    let user = await User.findOne({ userId: member.id }) || new User({ userId: member.id })
   

    user.blacklisted = false;
    await user.save();


    return  message.reply(`User has been whitelisted`)

  }
}