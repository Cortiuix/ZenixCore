const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'dep',
  alias: ["deposit"],

  async execute (client, message, args){

        let money = args[0]
        if (!money) return message.reply("Enter the amount you want to deposite.");

        let result = await cs.deposite({
            user: message.author,
            guild: message.guild,
            amount: money
        });
        if (result.error) {
            if (result.type === 'money') return message.reply("Specify an amount to deposite");
            if (result.type === 'negative-money') return message.reply("You can't deposite negative money");
            if (result.type === 'low-money') return message.reply("You don't have that much money in wallet.");
            if (result.type === 'no-money') return message.reply("You don't have any money to deposite");
            if (result.type === 'bank-full') return message.reply("Your bank is full. It has reached it's limit.");
        } else {
            if (result.type === 'all-success') return message.reply("You have deposited all your money to your bank" + `\nNow you've $${result.rawData.wallet} In your wallet and $${result.rawData.bank} in your bank.`);
            if (result.type === 'success') return message.reply(`You have deposited $${result.amount} money to your bank.\nNow you've $${result.rawData.wallet} In your wallet and $${result.rawData.bank} in your bank.`);
        };
    
  }
}