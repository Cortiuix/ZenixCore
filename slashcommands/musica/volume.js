const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('volume')
    .setDescription('Cambia el volumen de la cancion')
    .addNumberOption(option => 
        option
        .setName("volumen")
        .setDescription("Escribe el porcentaje de el volumen.")
        .setRequired(true)
    ),
        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        const porcentaje = int.options.getNumber('volumen')

        if(!int.member.voice.channel) return int.reply({ content: 'Debes estar en un canal de voz.', ephemeral: true })
        if(int.guild.me.voice.channel && int.member.voice.channel.id !== int.guild.me.voice.channel.id) return int.reply({ content: 'Debes estar en el mismo canal de voz que yo.', ephemeral: true })
    
        const queue = client.distube.getQueue(int.member.voice.channel)
        if(!queue) return int.reply({ content: 'No hay Canciones Reproduciendose.', ephemeral: true })
    
        if(porcentaje < '1') return int.reply({ content: 'El valor tiene que ser mayor que 1.', ephemeral: true })
        if(porcentaje > '100') return int.reply({ content: 'El valor tiene que ser menor que 100.', ephemeral: true })
    
      try {
          client.distube.setVolume(int.member.voice.channel, porcentaje)
      } catch (e){
        int.reply(`Hubo un error inseperado: **${e}**`)
        return;
    
      }
    
      int.reply({ content: `El volumen se ha establecido a **${porcentaje}%**`})

    }
}