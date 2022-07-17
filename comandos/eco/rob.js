const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'rob',
  alias: [],

  async execute (client, message, args){

        const user = message.mentions.members.first()
        if (user.bot) return message.reply("This user is a bot.");
        if (user.id === message.author.id) return message.reply("You can't steal from yourself")
        if (!user) return message.reply('Sorry, you forgot to mention somebody.');

        let result = await cs.rob({
            user: message.author,
            user2: user,
            guild: message.guild,
            minAmount: 100,
            successPercentage: 25,
            cooldown: 25, //25 seconds,
            maxRob: 1000
        });
        if (result.error) {
            if (result.type === 'time') return message.reply(`You have already robbed recently Try again in ${result.time}`);
            if (result.type === 'low-money') return message.reply(`You need atleast $${result.minAmount} to rob somebody.`);
            if (result.type === 'low-wallet') return message.reply(`${result.user2.username} have less than $${result.minAmount} to rob.`)
            if (result.type === 'caught') return message.reply(`${message.author.username} you robbed ${user.user.username} and got caught and you payed ${result.amount} to ${result.user2.username}!`)
        } else {
            if (result.type === 'success') return message.reply(`${message.author.username} you robbed ${user.user.username} and got away with ${result.amount}!`)

        }

  }
}