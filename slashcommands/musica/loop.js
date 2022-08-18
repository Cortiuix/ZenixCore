const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('loop')
    .setDescription('activa o desactiva la repeticion del servidor.')
    .addStringOption(option =>
        option
        .setName("accion")
        .setDescription("Especifica si quieres desactuvar o activar")
        .addChoice("activar", "activar")
        .addChoice("desactivar", "desactivar")
        .setRequired(true)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        if(!int.member.voice.channel) return int.reply({ content: 'Debes estar en un canal de voz.', ephemeral: true })
        if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'debes estar en el mismo canal de voz que yo.', ephemeral: true })
    
        const queue = client.distube.getQueue(int.member.voice.channel)
        if(!queue) return int.reply({ content: 'No hay Canciones Reproduciendose.', ephemeral: true })
    
      let opcion = int.options.getString("accion")
    
      if(opcion === "desactivar"){
        client.distube.setRepeatMode(int.member.voice.channel, 0)
        int.reply({ content: 'La repeticion se ha desactivado' })
        return;
      }
    
      if(opcion === "activar"){
        client.distube.setRepeatMode(int.member.voice.channel, 2)
        int.reply({ content: 'La repeticion se ha activado' })
        return;
      }

    }
}