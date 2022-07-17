const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'daily',
  alias: [],

  async execute (client, message, args){

        let result = await cs.daily({
        user: message.author,
        guild: message.guild,
        amount: 1000,

    });
    if (result.error) return message.reply(`You have used daily recently Try again in ${result.time}`);
    else message.reply(`You have earned $${result.amount}. Your streak is now ${result.rawData.streak.daily}`);

  }
}