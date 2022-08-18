const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('skip')
    .setDescription('Cambia a la siguiente cancion.'),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        if(!int.member.voice.channel) return int.reply({ content: 'Debes estar en un canal de voz.', ephemeral: true })
        if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'debes estar en el mismo canal de voz que yo.', ephemeral: true })
    
        const queue = client.distube.getQueue(int.member.voice.channel)
        if(!queue) return int.reply({ content: 'No hay Canciones Reproduciendose.', ephemeral: true })
    
      client.distube.skip(int.member.voice.channel)
      int.reply('La cancion fue saltada correctamente.')

    }
}