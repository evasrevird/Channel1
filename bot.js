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
        message.channel.sendMessage("https://www.youtube.com/watch?v=7x0aUgpEJa0");
    }
    if(message.content == 'czpatan')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/guide/czpatan.png"]});
    }
    if(message.content == 'brackpatan')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/guide/brackpatan.png"]});
    }
    
    if(message.content == 'gracearcstar')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/guide/gracearcstar.png"]});
    }

    if(message.content == 'lifesarcstar')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/guide/lifesarcstar.png"]});
    }

    if(message.content == '373arcstar')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/guide/373arcstar.png"]});
    }
    if(message.content == 'czarcstar')
    {
        message.channel.send({files:["C:/Users/Marik/Desktop/Grace/commands/guide/czarcstar.png"]});
    }
});


client.on('message',function(message)
{
    if(message.content == 'imnotsalty')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/imnotsalty.png"]});
    }
    if(message.content == 'sounee')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/sounee.png"]});
    }
    if(message.content == 'watchin')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/watchin.png"]});
    }
    if(message.content == 'shikkari')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/shikkari.gif"]});
    }
    if(message.content == 'uguh')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/uguh.png"]});
    }
    if(message.content == 'kimoi')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/kimoi.png"]});
    }

    if(message.content == 'imawhale')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/imawhale.png"]});
    }

    if(message.content == 'ohmygah')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/ohmygah.png"]});
    }

    if(message.content == 'waaa')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/waaa.png"]});
    }

    if(message.content == 'hah?')
    {
        message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/hah.png"]});
    }

    if(message.content == 'aghaghh')
    {
    message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/aghaghh.png"]});
    } 
   
    if(message.content == 'oyaoya')
    {
    message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/oyaoya.png"]});
    }

    if(message.content == 'wheresmahbook')
    {
    message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/mahbook.png"]});
    }

    if(message.content == 'imconcern')
    {
    message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/concern.png"]});
    }   

    if(message.content == 'hum!')
    {
    message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/hum.png"]});
    }

    if(message.content == 'needmoreslime')
    {
    message.channel.sendMessage({files:["C:/Users/Marik/Desktop/Grace/commands/emote/yslime.png"]});
    }
});
client.login(process.env.BOT_TOKEN);
