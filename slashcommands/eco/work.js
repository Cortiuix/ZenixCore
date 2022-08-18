const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {

    data: new SlashCommandBuilder()

    .setName('work')
    .setDescription('work to get money'),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        const user = int.author

    let result = await cs.work({
    user: int.author,
    guild: int.guild,
    maxAmount: 500,
    replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic'],
    cooldown: 25 //25 seconds,

    });

      const embed = new Discord.MessageEmbed()
      .setDescription(`You worked as a ${result.workType} and earned **$${result.amount}**.`)
      .setColor("PURPLE")
    
    if (result.error) return int.reply(`You have already worked recently Try again in ${result.time}`);
    else int.reply({ embeds: [embed] })

}

}