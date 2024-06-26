const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {

    data: new SlashCommandBuilder()

    .setName('work')
    .setDescription('work to get money'),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, message){

    const user = message.user

    let result = await cs.work({
    user: message.user,
    guild: message.guild,
    maxAmount: 500,
    replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic'],
    cooldown: 25 //25 seconds,

    });

      const embed = new Discord.MessageEmbed()
      .setDescription(`You worked as a ${result.workType} and earned **$${result.amount}**.`)
      .setColor("YELLOW")
    
    if (result.error) return message.reply(`You have already worked recently Try again in ${result.time}`);
    else message.reply({ embeds: [embed] })

}

}