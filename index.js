const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	}
	else if (command === 'flip') {
		if (!message.mentions.users.size) {
			return message.channel.send(`You didn't provide anyone to flip, ${message.author}!`);
		}
		const taggedUser = message.mentions.users.first();
		const inverted = taggedUser.username.split('').reverse().join('');
		message.channel.send(`(╯°□°）╯︵${inverted}`);
	}
});
client.login(process.env.BOT_TOKEN);
