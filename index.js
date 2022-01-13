const Discord = require('discord.js')
const config = ('./config.json')
const client = new Discord.Client();



const token = config.TOKEN
const prefix = config.PREFIX



client.on("ready", async () => {
 await client.user.setActivity('XYLIVER GITHUB', { type: 'PLAYING'})
  console.log(`Logged in as client.user.tag`)
})



client.login(token)



