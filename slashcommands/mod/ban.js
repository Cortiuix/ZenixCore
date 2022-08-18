const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('ban')
    .setDescription('Banea a un usuario de la guild.')
    .addUserOption(option => 
        option
        .setName("usuario")
        .setDescription("El usuario que se baneara de la guild.")
        .setRequired(true)
        )
    .addStringOption(option => 
        option
        .setName("razon")
        .setDescription("La rázon por la que el usuario sea baneado/a")
        .setRequired(false)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        if(!int.guild.me.permissions.has("BAN_MEMBERS")) return int.reply("No tengo los suficientes permisos.")
        if(!int.member.permissions.has("BAN_MEMBERS")) return int.reply("No puedes usar este comando")

        const user = int.options.getUser('usuario')

        const razon = int.options.getString('razon')

        if(!razon) {
            razon: "No se dio a conocer una rázon."
        }
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Usuario Baneado!')
        .setDescription(`el usuario ${user} ha sido baneado exitosamente\nModerador: ${int.member}\nRazon: ${razon}`)
        .setColor('GREEN')
    
        const error = new Discord.MessageEmbed()
        .setDescription('Tengo un error al banear este Usuario, Asegurate que mi rol este arriba del todo')
        .setColor('RED')
    
        await int.guild.members.ban(user, { reason: razon }).catch(err => {
        int.reply({ embeds: [error] })
    
          return;
        });
         int.reply({ embeds: [ embed ]})

    }
}