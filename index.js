const Discord = require('discord.js')
const client = new Discord.Client()
const token = require('./config.json')

client.on('ready', () => {
    console.log(`${client.user.tag} is Online!`)
})

client.login(token)