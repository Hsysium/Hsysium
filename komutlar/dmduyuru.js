const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id !=469094615761420299 ) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Bir�ey Yazmal�s�n�z');
  message.delete();
      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyur','duyuru'],
  permLevel: 4
};

exports.help = {
  name: 'dmduyuru',
  description: '�stedi�iniz �eyi bota duyurtur.',
  usage: 'duyuru [duyurmak istedi�iniz �ey]'
};