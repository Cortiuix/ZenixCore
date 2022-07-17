const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {
  name: 'sell',
  alias: [],

  async execute (client, message, args){

    let thing = args[0]

    if (!thing) return message.reply('Which item to remove?')
    let result = await cs.removeUserItem({
        user: message.author,
        guild: message.guild,
        item: parseInt(args[0])
    });
    if (result.error) {
        if (result.type == 'Invalid-Item-Number') return message.reply('There was a error, Please enter item number to remove.!')
        if (result.type == 'Unknown-Item') return message.reply('There was a error, The Item Does not exist!')
    } else message.reply('Done! Successfully sold the `' + result.inventory.name + '` for free! You now have ' + result.inventory.amount + ' of those items left!')

  }
}