const Discord = require('discord.js'),
const client = new Discord.Client();

client.on(`ready`, () => {
    console.log(`${client.user.username} ready!`)
    client.user.setActivity(`play.zythronpe.ml:19132`, { type: "streaming", url: "https://www.twitch.tv/twitch" });
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    
    if (msg.content === '$help') {
    	msg.channel.send("**__Commands List__** ```[ $ip | $info | $help ]``````[ $version | $dcinvite ]```");
    } else

        if (msg.content === 'Becken') {
    	msg.channel.send('You called the owner. Looks like you want to talk about an important thing.');
    } else

        if (msg.content === '$ghostview') {
    	msg.channel.send("**Download the latest plugins builds on Poggit at:** __http://poggit.pmmp.io/ci/Zadezter/GhostView__``` Poggit ¡ | Github ! ```**Check all source code what is made by Zadezter on Github at:** __http://github.com/Zadezter/GhostView__");
    } else

        if (msg.content === '$ip') {
    	msg.channel.send('```IP: play.zythronpe.ml | Port: 19132```');
    } else

        if (msg.content === '$info') {
    	msg.channel.send("**This server was created by BeckenPlayZMCPE on 19th January 2018 and BeckenPlayZMCPE was helped by the two staff MrLukePotatoes and Zadezter in managing the server and it took about 3 months to release the server. This server is a multi-server and if you wonder what multiserver means then it means all in one like factions,minigames,roleplay,kitpvp everything in a single server. If you ever wanted to apply for staff here, go to bit.ly/ZPEApply. Also check out our twitter page @ZythronPE and make sure to follow. If you have any questions regarding the server< make sure to contact @BeckenPlayZMCPE and he will answer you as soon as he can.");
    } else

        if (msg.content === '$version') {
        msg.channel.send('**This server is running on mcpe version v1.2.13/1.2.14');
    } else

        if (msg.content === '$dcinvite') {
        msg.channel.send("**If you ever wonder what is the invitation link to ZythronPE's discord server. Here it is:** Tap this link and join: https://discord.gg/5brHyJa");
    } else

        if (msg.content === '$github') {
        msg.channel.send('**This is our ImpladeDeveloped team on Github!** Tap this link: http://github.com/ImpladeDeveloped');
  };

});
