module.exports = {
	name: 'server',
	desc: 'gives server infos',
	execute(message, args) {
		message.channel.send(`::${message.guild.name}::\nhas ${message.guild.memberCount} users.`);
	},

};