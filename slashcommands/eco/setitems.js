const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {

    data: new SlashCommandBuilder()

    .setName('setitems')
    .setDescription('Set the tems for the shop'),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, message){

    const user = message.user

        cs.setItems({
        guild: message.guild,
        shop: [{
            name: 'Watch',
            price: 20
        }, {
            name: 'Rolex',
            price: 1230
        }]
    });
    return message.reply('Success!!')

}

}