const Discord = require('discord.js')

module.exports = {
  name: 'help',
  alias: [],

  async execute (client, message, args){

  const embed = new Discord.MessageEmbed()
  .setTitle("Command List!")
  .setColor("#3e75a5")           
  .setThumbnail("https://cdn.discordapp.com/avatars/778684218938097704/f2db95f18d9e16d1417884d0ec23211c.webp?size=1024")
  .setDescription("**Utility Commands** \n\n ``p!warn, p!warn-remove, p!warns, p!help`` \n\n **Moderation Commands** \n\n ``p!ban, p!kick, p!nuke`` \n\n **Fun Commands** \n\n ``p!avatar`` \n\n **Music Commands** \n\n  ``p!play, p!pause, p!continue, p!queue, p!skip, p!stop, p!volume`` \n\n **Accion commands**  \n\n ``p!gay, p!hug, p!pat, p!punch`` \n\n **General Commands** \n\n ``p!calculator`` \n\n **Economy Commands** \n\n ``p!work, p!with, p!shop, p!setitems, p!sell, p!rob, p!remove-item, p!leaderboard, p!inventory, p!give, p!gamble, p!dep, p!daily, p!buy, p!bal, p!add-item``")

    message.channel.send({ embeds: [embed] })
  

  }
}