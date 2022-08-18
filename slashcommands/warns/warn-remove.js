const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const db = require('../../models/warn-model.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('warn-remove')
    .setDescription('Unwarn someone on the guild.')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("The person you are going to be unwarn")
        .setRequired(true)
        )
    .addNumberOption(option =>
        option
        .setName("warn")
        .setDescription("The warn number to be removed")
        .setRequired(true)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, message){

      if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have enough permissions")
      if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You can't use that command")

      const user = message.options.getUser("user")

      const args = message.options.getNumber("warn")

      db.findOne({
        guild: message.guild.id, 
        user: user.id
    }, async (err, data) => {
        if (err) throw err;
        if (data) {
            let number = parseInt(args[1]) - 1
            data.content.splice(number, 1)
            message.reply('I have successfully removed the warn')
            data.save()
        } else {
            message.reply('this user has no warns on this server')
        }
    })

    }
}