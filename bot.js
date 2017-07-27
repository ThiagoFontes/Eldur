/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');
const music = require('discord.js-music-v11');

// Create an instance of a Discord client
const client = new Discord.Client();

const token = 'Your token here!';

//Songs config
music(client, {
	prefix: '-',       // Prefix of '-'.
	global: false,     // Server-specific queues.
	maxQueueSize: 10,  // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'   // Name of voice channel to join. If omitted, will instead join user's voice channel.
});

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});


// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }

  if (message.content === 'invite'){
    message.channel.send('invite link here');
  }
  
  if (message.content === 'love'){
      message.channel.send('Sending love back...');
      message.channel.send('Love sent');
  }
});

// Log our bot in
client.login(token);

