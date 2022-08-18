const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const warndb = require('../../models/warn-model.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('warn')
    .setDescription('Warn someone on the guild.')
    .addUserOption(option => 
        option
        .setName("user")
        .setDescription("The person you are going to warn")
        .setRequired(true)
        )
    .addStringOption(option =>
        option
        .setName("reason")
        .setDescription("The reason the user is going to be warned")
        .setRequired(true)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */  

    async run(client, message){

      if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have enough permissions")
      if(!message.member.permissions.has("KICK_MEMBERS")) return message.reply("You can't use that command")

      const user = message.options.getUser("user")

      const razon = message.options.getString("reason")

      if(user.id === message.user.id) return message.reply("You can't warn yourself")

        warndb.findOne({
        guild: message.guild.id,
        user: user.id
    }, async (err, data) => {
        if (err) throw err;
        if(!data) {
            data = new warndb({
                guild: message.guild.id,
                user: user.id,
                content: [{
                    moderator: message.user.id,
                    reason: razon
                }]
            })
        } else {
            const objet = {
                moderator: message.user.id,
                reason: razon
            }
                data.content.push(objet)
        }
        data.save()
    })

    const embed = new Discord.MessageEmbed()
    .setDescription(`✅ successfully warned **${user.tag}**`)
    .setColor("GREEN")

    message.reply({ embeds: [embed] })

    const embed2 = new Discord.MessageEmbed()
    .setDescription(`hello user ${user.tag} you have been warned in **${message.guild.name}** \n reason **${razon}**`)
    .setColor("RED")

    user.send({ embeds: [embed2] }).catch(err => {

      const embed3 = new Discord.MessageEmbed()
      .setTitle("ERROR")
      .setDescription(`An error occurred while executing the warn.js command. \n Error: I can't send messages to this user privately \n Server: **${message.guild.name}** \n user: **${user.tag}**`)
      .setColor("RED")

      client.channels.cache.get("937191383708618762").send({ embeds: [embed3] })
    })

    }
}