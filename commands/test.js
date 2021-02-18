const { MessageEmbed } = require('discord.js')
module.exports = {
    info:{
      name: "botinfo", 
      description: "test command", 
      usage: "",
      aliases: [] //if you need you can add more or else if you want none keep it empty like "[]"
    },
    run: async function(client, message, args){
      //all your command code here
      let botinfo = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor("Server Volume Manager", "https://cdn.discordapp.com/emojis/808586694806339594.png?v=1")
      .setDescription('`author : XOUT#5640' `Name : Chill` `API : Discord.js` `coding language : javascript`)
      .setImage('https://cdn.discordapp.com/attachments/760546954928455761/806431862762635274/unknown.png')
      .setFooter('[server](https://discord.gg/TYkT7taeVS)', 'https://i.imgur.com/wSTFkRM.png');
    }
  }