const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

const fs = require('fs');
// const { CLIENT_RENEG_WINDOW } = require('tls');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));

for(const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', ()=> {
	console.log('TheCoolBot has initiated');
});

client.on('message', message=>{
	if(!message.content.toLocaleLowerCase().startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLocaleLowerCase();

	if(command === 'hi') {
		client.commands.get('hi').execute(message, args);
	}
	else if(command === 'help') {
		const cmds = client.commands.name;
		return message.reply('all the commands currently: ');
	}
	else if(command === 'info') {
		client.commands.get('hi').execute(message, 2);
	}
	else if(command === 'server') {
		client.commands.get('server').execute(message, args);
	}
	else if(command === 'fuck') {
		const Tagged = message.mentions.users.first();
		if(Tagged == undefined) {
			message.channel.send(`You didn't provide me who to fuck so I fucked you, ${message.author}.\nYou must be blessed to be fucked by such a cool bot.`);
		}
		else {
			message.channel.send(`I fucked ${Tagged}.\nYou must be blessed to be fucked by such a cool bot.`);
		}
	}
	else if(command == 'mod') {
		client.commands.get('mod').execute(message, args);
	}
});


client.login(token);
