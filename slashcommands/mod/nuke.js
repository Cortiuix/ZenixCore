const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('nuke')
    .setDescription('has nuke a un canal'),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        var perms = int.member.permissions.has("ADMINISTRATOR")
        if(!perms) return int.reply("No tienes los suficientes permisos...")
    
        int.channel.clone().then((ch) =>{
    
          ch.setParent(int.channel.parent.id);
          ch.setPosition(int.channel.position);
          int.channel.delete();
    
          ch.send('Canal Nukeado')
    
        })

    }
}