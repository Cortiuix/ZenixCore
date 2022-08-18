const { SlashCommandBuilder} = require('@discordjs/builders')
const Discord = require('discord.js')

module.exports = {

    data: new SlashCommandBuilder()

    .setName('queue')
    .setDescription('Mira la playList del servidor'),

        /**
         * @param {import{'discord.js'}.Interaction} int
         */   

    async run(client, int){

        const queue = client.distube.getQueue(int.member.voice.channel)
        if(!queue) return int.reply({ content: 'No hay Canciones Reproduciendose', ephemeral: true })
    
        const embed = new Discord.MessageEmbed()
        .setTitle(`Playlist de ${int.guild.name}`)
        .setDescription('\n' + queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).slice(0, 100).join("\n"))
    
        int.reply({ embeds: [embed]})

    }
}