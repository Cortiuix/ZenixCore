const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('play')
    .setDescription('Reproduce musicá en un canal de voz.')
    .addStringOption(option => 
        option
        .setName("cancion")
        .setDescription("Escribe el nombre de la canción que vas escuchar")
        .setRequired(true)
    ),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        const cancion = int.options.getString('cancion')

        if(!int.member.voice.channel) return int.reply({ content: 'debes estar en un canal de voz', ephemeral: true })
        if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'debes estar en el mismo canal de voz que yo', ephemeral: true })
    
        int.client.distube.playVoiceChannel(
          int.member.voice.channel,
          cancion,
          {
            textChannel: int.channel,
            member: int.member,
          }
        );
    
        int.reply({ content: 'Buscando Canción...', ephemeral: true })

    }
}