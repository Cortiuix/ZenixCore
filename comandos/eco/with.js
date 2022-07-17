const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'withdraw',
  alias: ["with"],

  async execute (client, message, args){

        let money = args[0]
        if (!money) return message.reply("Enter the amount you want to withdraw.");

        let result = await cs.withdraw({
            user: message.author,
            guild: message.guild,
            amount: money
        });
        if (result.error) {
            if (result.type === 'money') return message.reply("Specify an amount to withdraw")
            if (result.type === 'negative-money') return message.reply("You can't withdraw negative money, please use deposit command")
            if (result.type === 'low-money') return message.reply("You don't have that much money in bank.")
            if (result.type === 'no-money') return message.reply("You don't have any money to withdraw")
        } else {
            if (result.type === 'all-success') return message.reply("You have withdraw'd all your money from your bank" + `\nNow you've $${result.rawData.wallet} In your wallet and $${result.rawData.bank} in your bank.`)
            if (result.type === 'success') return message.reply(`You have withdraw $${result.amount} money from your bank.\nNow you've $${result.rawData.wallet} In your wallet and $${result.rawData.bank} in your bank.`)

          }
    
  }
}