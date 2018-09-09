const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
if (message.author.id !=320842708690272267 ) { return; }
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birþey Yazmalýsýnýz');
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
  description: 'Ýstediðiniz þeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediðiniz þey]'
};
