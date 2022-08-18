const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {

    data: new SlashCommandBuilder()

    .setName('bal')
    .setDescription('See your balance'),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, message){

    const user = message.user
        let result = await cs.balance({
            user: user,
            guild: message.guild.id
           });

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${user.user.tag}** \n **$${(result.wallet).toLocaleString()}** <a:coin_emoji:954433318504529961> wallet \n **$${(result.bank).toLocaleString()}** <a:coin_emoji:954433318504529961> bank`)
    .setThumbnail(user.user.displayAvatarURL({ size: 1024, dynamic: true}))
    .setColor("YELLOW")
    .setTimestamp()

    return message.reply({ embeds: [embed] })

}

}