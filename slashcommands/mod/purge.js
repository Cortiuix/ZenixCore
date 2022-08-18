const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('purge')
    .setDescription('Elimina mensajes en un canal.')
    .addNumberOption(option => 
        option
        .setName("cantidad")
        .setDescription("La cantidad de mensajes que se van a eliminar.")
        ),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        const cantidad = int.options.getNumber('cantidad')

        if(cantidad ==='0') return int.reply("Debes poner mas que un 0 crack")

        if(cantidad > '100') return int.reply("No puedes eliminar mas de 100 mensajes. ")
    
      int.channel.bulkDelete(cantidad).then(()=> {
        int.reply(`**${cantidad}** mensajes borrados correctamente`)
      })

    }
}