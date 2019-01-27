const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => 
{console.log('Bot started.')
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
});

client.on('message',function(message)
{
    if(message.content == 'imnotsalty')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/imnotsalty.png"]});
    }
    if(message.content == 'sounee')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/sounee.png"]});
    }
    if(message.content == 'watchin')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/watchin.png"]});
    }
    if(message.content == 'shikkari')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/shikkari.gif"]});
    }
    if(message.content == 'uguh')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/uguh.png"]});
    }
    if(message.content == 'kimoi')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/kimoi.png"]});
    }

    if(message.content == 'imawhale')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/imawhale.png"]});
    }

    if(message.content == 'ohmygah')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/ohmygah.png"]});
    }

    if(message.content == 'waaa')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/waaa.png"]});
    }

    if(message.content == 'hah?')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/hah.png"]});
    }

    if(message.content == 'aghaghh')
    {
    message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/aghaghh.png"]});
    } 
   
    if(message.content == 'oyaoya')
    {
    message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/oyaoya.png"]});
    }

    if(message.content == 'wheresmahbook')
    {
    message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/mahbook.png"]});
    }

    if(message.content == 'imconcern')
    {
    message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/concern.png"]});
    }   

    if(message.content == 'hum!')
    {
    message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/hum.png"]});
    }

    if(message.content == 'needmoreslime')
    {
    message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/emote/yslime.png"]});
    }
});
client.login(process.env.BOT_TOKEN);
