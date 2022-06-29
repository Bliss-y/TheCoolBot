module.exports = {
	name: 'hi',
	desc: 'This is a ping command',
	execute(message, args) {
		if(args == 2) {
			message.channel.send('I\'m cool. and basically That\'s it :)');
		}
		else{message.channel.send(`Hello!, ${message.author}`);}
	},

};