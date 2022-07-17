const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'inventory',
  alias: ["inv"],

  async execute (client, message, args){

    const user = message.author || message.user;
    let result = await cs.getUserItems({
        user: user,
        guild: message.guild,
    });
    let inv = result.inventory.slice(0, 10)
    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
    .setTimestamp()
        .setDescription('Your Inventory in Empty!')
    for (key of inv) {
        embed.addField(`**${key.name}:**`, `Amount: ${key.amount}`);
        embed.setDescription('**Your Inventory!**')

    }
    return message.reply({
        embeds: [embed]
    })

  }
}