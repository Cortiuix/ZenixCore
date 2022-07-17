const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'balance',
  alias: ["bal"],

  async execute (client, message, args){

        const user = message.mentions.members.first() || message.member;
        let result = await cs.balance({
            user: user,
            guild: message.guild.id
           });

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${user.user.tag}** \n **$${(result.wallet).toLocaleString()}** <a:coin_emoji:954433318504529961> wallet \n **$${(result.bank).toLocaleString()}** <a:coin_emoji:954433318504529961> bank`)
    .setThumbnail(user.user.displayAvatarURL({ size: 1024, dynamic: true}))
    .setColor("PURPLE")
    .setTimestamp()

    return message.reply({ embeds: [embed] })
    
  }
}