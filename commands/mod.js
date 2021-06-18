module.exports = {
	name: 'mod',
	desc: 'moderator works',
	execute(message, args) {
		if(message.member.roles.cache.has('851831021536149527') || message.member.roles.cache.has('756146391109337280')) {
			if(args[0] == 'a') {
				return message.reply('what to do?');
			}
			else if(args[0] == 'ban') {
				return message.reply('nope');
			}
			else if(args[0] === 'bomb') {
				const Amount = parseInt(args[1]);
				if (isNaN(Amount)) {
					return message.reply('that doesn\'t seem to be a valid number.');
				}
				else if (Amount < 2 || Amount > 100) {
					return message.reply('you need to input a number between 2 and 100.');
				}
				else {
					message.channel.bulkDelete(Amount);
					return message.reply('OK : ) deleted ' + Amount + ' messages.');
				}
			}

		}

		else {
			return message.reply('You ain\'t no mod. Don\'t try to abuse me you prick or you might get banned!');
		}
	},

};