const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'juanmuland.aternos.me',
  port: 25565,
  username: 'BotAFK'
})

bot.on('spawn', () => {
  console.log('Bot conectado')
})
