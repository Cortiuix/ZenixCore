const Discord = require('discord.js')

module.exports = {
  name: 'help',
  alias: [],

  async execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle("Command List!")
  .setColor("#3e75a5")           
  .setThumbnail("https://cdn.discordapp.com/avatars/778684218938097704/f2db95f18d9e16d1417884d0ec23211c.webp?size=1024")
  .setDescription("**Utility Commands** \n\n ``z!warn, z!warn-remove, z!warns, z!help`` \n\n **Moderation Commands** \n\n ``z!ban, z!kick, z!nuke`` \n\n **Fun Commands** \n\n ``z!avatar`` \n\n **Music Commands** \n\n  ``z!play, z!pause, z!continue, z!queue, z!skip, z!stop, z!volume`` \n\n **Accion commands**  \n\n ``z!gay, z!hug, z!pat, z!punch`` \n\n **General Commands** \n\n ``z!calculator`` \n\n **Economy Commands** \n\n ``z!work, z!with, z!shop, z!setitems, z!sell, z!rob, z!remove-item, z!leaderboard, z!inventory, z!give, z!gamble, z!dep, z!daily, z!buy, z!bal, z!add-item``")

    message.channel.send({ embeds: [embed] })
  

  }
}