const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('unlock')
    .setDescription('Desbloquea el canal donde se use el comando.'),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        if(!int.guild.me.permissions.has("MANAGE_CHANNELS")) return int.reply("No tengo los suficientes permisos.")
        if(!int.member.permissions.has("MANAGE_CHANNELS")) return int.reply("No puedes usar este comando")

        let rol = int.guild.roles.cache.find(r => r.name === '@everyone')
        if(!rol) return int.reply("No he podido encontrar el rol `@everyone`")

        int.channel.permissionOverwrites.create(rol, { SEND_MESSAGES: true})

        int.reply("Se ha desbloqueado el canal correctamente.")

    }
}