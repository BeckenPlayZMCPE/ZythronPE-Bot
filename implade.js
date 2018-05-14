const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('for final exam on school!', {type: 'WATCHING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '$help') {
    	msg.channel.send('**__Commands List__** ```[ $server | $info | $ghostview | $help | $github ]``````[ $version | $dcinvite ]```');
    } else
        if (msg.content === 'Zade') {
    	msg.channel.send('You called him. Please tell, what do you want to talk about?');
    } else
        if (msg.content === '$ghostview') {
    	msg.channel.send('**Download the latest plugins builds on Poggit at:** __http://poggit.pmmp.io/ci/Zadezter/GhostView__``` Poggit ¡ | Github ! ```**Check all source code what is made by Zadezter on Github at:** __http://github.com/Zadezter/GhostView__');
    } else
        if (msg.content === '$server') {
    	msg.channel.send('**This is the ZythronPE server! Come and play if you have a time!** ```IP: play.zythronpe.ml | Port: 19132```');
    } else
        if (msg.content === '$info') {
    	msg.channel.send('**This bot was created on 6 May 2018 by using code with Discord.js!** [Owner: __Zadezter#0207__]');
    } else
        if (msg.content === '$version') {
        msg.channel.send('**This bot is running a language code** __discord.js__ **on version IB-1.3 with using a Heroku Server Hosting 24/7!**');
    } else
        if (msg.content === '$dcinvite') {
        msg.channel.send('**ImpladeDeveloped is a starter team for making a code of their bot and public/private plugins!** Tap this link and join: https://discord.gg/2pRGG52');
    } else
        if (msg.content === '$github') {
        msg.channel.send('**This is our ImpladeDeveloped team on Github!** Tap this link: http://github.com/ImpladeDeveloped');
  }

});

client.login(process.env.BOT_TOKEN);