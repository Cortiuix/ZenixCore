const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const warndb = require('../../models/warn-model.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('warns')
    .setDescription('See the warnings of the selected user.')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("The user you are going to see their warnings")
        .setRequired(true)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, message){

      if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have enough permissions")
      if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You can't use that command")

      const user = message.options.getUser("user")

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

            message.reply({ embeds: [embed] })
        } else {
            message.reply('this user has no warnings')
        }
    })

    }
}