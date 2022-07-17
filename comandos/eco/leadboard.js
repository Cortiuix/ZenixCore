const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;


module.exports = {
  name: 'leaderboard',
  alias: ["lb"],

  async execute (client, message, args){

    let data = await cs.leaderboard(message.guild.id);
    if (data.length < 1) return message.reply("Nobody's in leaderboard yet.");
    const msg = new Discord.MessageEmbed()
    .setColor("PURPLE")
    let pos = 0;
    // This is to get First 10 Users )
    data.slice(0, 10).map(e => {
        if (!client.users.cache.get(e.userID)) return;
        pos++
        msg.addField(`${pos} - **${client.users.cache.get(e.userID).username}**`, `Wallet: **${e.wallet}** - Bank: **${e.bank}**`, true);
    });

    message.reply({
        embeds: [msg]
    }).catch();
    
  }
}