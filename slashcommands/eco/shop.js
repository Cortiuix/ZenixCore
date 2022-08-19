const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;

module.exports = {

    data: new SlashCommandBuilder()

    .setName('shop')
    .setDescription('see the items of the shop'),

        /**
         * @param {import{'discord.js'}.Interaction} message
         */   

    async run(client, message){

    if(!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("No tengo los suficientes permisos.")

    let result = await cs.getShopItems({
        guild: message.guild
    });
    let inv = result.inventory;
    const embed = new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setDescription('**Shop!**')
    for (let key in inv) {
        embed.addField(`${parseInt(key) + 1} - **${inv[key].name}:** for $${inv[key].price}`, 'Description: ' + inv[key].description)
    }
    message.reply({
        embeds: [embed]
    });

}

}