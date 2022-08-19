const { SlashCommandBuilder} = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js')
const warndb = require('../../models/warn-model.js')
module.exports = {

    data: new SlashCommandBuilder()

    .setName('recommendation')
    .setDescription('send a recommendation to the bot owner')
    .addStringOption(option =>
        option
        .setName("text")
        .setDescription("write your recommendation")
        .setRequired(true)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */  

    async run(client, int){

        let user 

        const texto = int.options.getString("text")

        const embed = new Discord.MessageEmbed()
        .setTitle("Nueva Recomendación")
        .setDescription(`Usuario: **${int.user.tag}** \n Recomendación: **${texto}**`)
        .setColor("YELLOW")

        client.users.cache.get('903037096086888508').send({ embeds: [embed] })

        int.reply({ content: "recommendation send to dev.", ephemeral: true })

    }
}