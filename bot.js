var Discord = require('discord.js');
var fs = require('fs');
var client = new Discord.Client();

client.on('ready', () => {
  console.log(`Welcome Bro ${client.user.tag}!`);
});
var prefix = 'M!' 

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "457566403793518603") return;

  
  if (message.content.startsWith(prefix + 'watch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watching Now: **__${argresult}__**`)
} 

 
  if (message.content.startsWith(prefix + 'listen')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **__${argresult}__**`)
} 


if (message.content.startsWith(prefix + 'name')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'avatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}

if (message.content.startsWith(prefix + 'stream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/iimetoda");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **__${argresult}__**`)
} 
if (message.content.startsWith(prefix + 'play')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **__${argresult}__**`)
} 



});


client.login(process.env.BOT_TOKEN);
