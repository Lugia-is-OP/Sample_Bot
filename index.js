// ====================== INPORTING TOKEN =======================
require('dotenv').config()
// ====================== START BOT CODE ========================
const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix } = require('./config.json')

// ====================== LISTENING TO CONSOLE ========================
client.on('ready', () => {
    console.log(`${client.user.tag} is Online!`)
    // ===== BOT PRESENCE =====
    client.user.setPresence({
        activity: {
            name: "MESSAGE HERE",  // ===== THE MESSAGE SHOWING IN THE PRESENCE =======
            type: "LISTENING", // ==== PLAYING, WATCHING, LISTENING, STREAMING ====== 
        }
    })
})
// ====================== LISTENING TO MESSAGES ========================
client.on('message', async (message) => {

    // Returning Message , If it is from guild or Bot or Webhook
    if (message.author.bot || !message.guild || message.webhookID) return
    // Returning Message , IF it does not start from Prefix
    if (!message.content.startsWith(prefix)) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    
    if(command === "ping"){ // ===== Ping is a Command so When were Anyone Calls (prefix)ping ========
        message.reply("PONG") // === So Bot wil Reply with PONG ==========
    }
})
// ====================== BOT LOGINING ========================
client.login(process.env.TOKEN).catch((err) => {
    console.log("TOKEN Invaild / TOKEN NOT GIVEN ")
})