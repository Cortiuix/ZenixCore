const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'shop',
  alias: [],

  async execute (client, message, args){

    let result = await cs.getShopItems({
        guild: message.guild
    });
    let inv = result.inventory;
    const embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription('**Shop!**')
    for (let key in inv) {
        embed.addField(`${parseInt(key) + 1} - **${inv[key].name}:** for $${inv[key].price}`, 'Description: ' + inv[key].description)
    }
    message.reply({
        embeds: [embed]
    });
    
  }
}