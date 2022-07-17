const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'work',
  alias: [],

  async execute (client, message, args){

    const user = message.author

    let result = await cs.work({
    user: message.author,
    guild: message.guild,
    maxAmount: 500,
    replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic'],
    cooldown: 25 //25 seconds,

    });

      const embed = new Discord.MessageEmbed()
      .setDescription(`You worked as a ${result.workType} and earned **$${result.amount}**.`)
      .setColor("PURPLE")
    
    if (result.error) return message.reply(`You have already worked recently Try again in ${result.time}`);
    else message.reply({ embeds: [embed] })

  }
}