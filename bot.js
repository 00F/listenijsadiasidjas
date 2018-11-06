const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
    client.user.setActivity('If you can dream it you can do it .', {type:'LISTENING'});
client.user.setStatus("dnd")
    
});
client.login(process.env.BOT_TOKEN);
