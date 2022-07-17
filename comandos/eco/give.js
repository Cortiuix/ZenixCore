const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'give',
  alias: ["give-money", "give-user"],

  async execute (client, message, args){

        let user = message.mentions.members.first()
        if (user.id === message.author.id) return message.channel.send(`You can't transfer money to yourself!`);

        let amount = args.join(" ").slice(22)

        if (!amount) return message.reply("Enter amount of money to add.");
        if (String(amount).includes("-")) return message.reply("You can't send negitive money.")
        let money = parseInt(amount);

        let result = await cs.transferMoney({
            user: message.author,
            user2: user,
            guild: message.guild,
            amount: money
        });
        if (result.error) return message.reply(`You don't have enough money in your wallet.`);
        else message.reply(`**${message.author.username}**, Successfully transfered **${result.money}**`)

  }
}