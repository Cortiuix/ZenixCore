const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')
const { isGuildInstance } = require('distube')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('kick')
    .setDescription('Kickea a un usuario de la guild.')
    .addUserOption(option =>
        option
        .setName("usuario")
        .setDescription("El usuario/a que se kickeara.")
        .setRequired(true)
        )
    .addStringOption(option =>
        option
        .setName("razon")
        .setDescription("la rázon por la que el usuario se kickeara.")
        .setRequired(false)
        ),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        if(!int.guild.me.permissions.has("KICK_MEMBERS")) return int.reply("No tengo los suficientes permisos.")
        if(!int.member.permissions.has("KICK_MEMBERS")) return int.reply("No puedes usar este comando")

        const user = int.options.getUser('usuario')

        const razon = int.options.getString('razon')

        if(!razon) {
            razon: "No se dio una rázon"
        }

        const embed = new Discord.MessageEmbed()
        .setTitle('Usuario Kickeado!')
        .setDescription(`el usuario ${user} ha sido Kickeado exitosamente\nModerador: ${int.member}\nRazon: ${razon}`)
        .setColor('GREEN')
    
        const error = new Discord.MessageEmbed()
        .setDescription('Tengo un error al banear este Usuario, Asegurate que mi rol este arriba del todo')
        .setColor('RED')
    
        await int.guild.members.ban(user, { reason: razon }).catch(err => {
          console.log(err);
          int.reply({ embeds: [error] })

          return;
        });
         int.reply( {embeds: [ embed ]})

    }
}