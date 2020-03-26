const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
	
	//666740619569397790
	
})

client.on('message', message => {
	//console.log(message.content);
	
	if (message.content === 'no') {
		message.channel.send('ha, no');
	}
	if (message.content === 'No') {
		message.channel.send('ha, no');
	}
	if (message.content === 'Big Chungus') {
		message.channel.send('BIG BIG CHUNGUS, BIG CHUNGUS!');
	}
	if (message.content === 'big chungus') {
		message.channel.send('BIG BIG CHUNGUS, BIG CHUNGUS!');
	}
	if (message.content === 'BIG CHUNGUS') {
		message.channel.send('BIG BIG CHUNGUS, BIG CHUNGUS!');
	}
	if (message.content === 'chungus') {
		message.channel.send('BIG BIG CHUNGUS, BIG CHUNGUS!');
	}
	if (message.content === 'CHUNGUS') {
		message.channel.send('BIG BIG CHUNGUS, BIG CHUNGUS!');
	}
	
	var interval = setInterval (function (){
        message.channel.send("@Kerser#3065 this is a daily reminder that you owe @Miserable#6968 $20 :)");
      }, 86400000); // time between each interval in milliseconds
	
})


client.login(token);
