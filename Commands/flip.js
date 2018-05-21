module.exports = {
	name: 'flip',
	description: 'Flips someone',
	execute(message, args) {
		if (!message.mentions.users.size) {
			return message.channel.send(`You didn't provide anyone to flip, ${message.author}!`);
		}
		if(args[0] === message.mentions.users.first()) {
			const taggedUser = message.mentions.users.first();
			const inverted = taggedUser.username.split('').reverse().join('');
			message.channel.send(`(╯°□°）╯︵${inverted}`);
		}
	},
};