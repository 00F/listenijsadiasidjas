const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setActivity('~ | 72 | ~', {type:'LISTENING'});
client.user.setStatus("dnd")
    
});
client.login(process.env.BOT_TOKEN);
