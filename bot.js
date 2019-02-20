const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

const bot = new Discord.Client({disableEveryone: true});
client.on("ready", async() => {
    console.log(`${bot.user.username} is online!!!`);
    
    client.user.setActivity("Lucius", {type:"Rerolling for"});
});

//aaaaaaaaaaaaaaaaaaa
client.on('message',function(message)
{
    if(message.content == 'soulgear')
    {
        message.channel.send("https://www.youtube.com/watch?v=7x0aUgpEJa0");
    }
    if(message.content == 'czpatan')
    {
        message.channel.send("https://imgur.com/iNYNrT6");
    }
    if(message.content == 'brackpatan')
    {
        message.channel.send("https://imgur.com/tCv9nby");
    }
    
    if(message.content == 'gracearcstar')
    {
        message.channel.send("https://imgur.com/7yLD5F2");
    }

    if(message.content == 'lifesarcstar')
    {
        message.channel.send("https://imgur.com/81th8JU");
    }

    if(message.content == '373arcstar')
    {
        message.channel.send("https://imgur.com/zpVDHml");
    }
    if(message.content == 'czarcstar')
    {
        message.channel.send("https://imgur.com/vaH2yCL");
    }
    if(message.content == 'graceogdoad')
    {
        message.channel.send("https://imgur.com/24MWKVa");
    }
    if(message.content == 'slimeogdoad')
    {
        message.channel.send("430k https://imgur.com/CI7P6Uz");
    }
    
    //cdfh
    if(message.content == 'cdfhogdoad')
    {
        message.channel.send("570k https://imgur.com/iulAFMQ");
    }
    if(message.content == 'cdfhzaratan')
    {
        message.channel.send("83k https://imgur.com/surBFkM");
    }
    if(message.content == 'cdfhterion')
    {
        message.channel.send("105k https://imgur.com/CI7P6Uz");
    }
    if(message.content == 'cdfharcstar')
    {
        message.channel.send("530k https://imgur.com/NIxzsNq");
    }
});

client.on('message',function(message)
{
    if(message.content == 'therethere')
    {
        message.channel.send("https://imgur.com/Kgr7HkN");
    }
    if(message.content == 'floriavs3musk')
    {
        message.channel.send("https://imgur.com/d1X2MZO");
    }
    if(message.content == 'imnotsalty')
    {
        message.channel.send("https://imgur.com/PSeSDWW");
    }
    
    if(message.content == 'watchin')
    {
        message.channel.send("https://imgur.com/9v69zMi");
    }
    
    if(message.content == 'shikkari')
    {
        message.channel.send("https://imgur.com/tU2VQQW");
    }
    
    if(message.content == 'uguh')
    {
        message.channel.send("https://imgur.com/1ajKXE9");
    }
   
    if(message.content == 'imawhale')
    {
        message.channel.send("https://imgur.com/FoZAon2");
    }

    if(message.content == 'ohmygah')
    {
        message.channel.send("https://imgur.com/MAI37HS");
    }

    if(message.content == 'waaa')
    {
        message.channel.send("https://imgur.com/YSsMqIY");
    }

    if(message.content == 'hah?')
    {
        message.channel.send("https://imgur.com/Ns25fcY");
    }
   
    if(message.content == 'oyaoya')
    {
    message.channel.send("https://imgur.com/ogavh0h");
    }
    
    if(message.content == 'imconcern')
    {
    message.channel.send("https://imgur.com/PoRlAV3");
    }   

});
client.login(process.env.BOT_TOKEN);
