const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'juanmuland.aternos.me:35011',
  port: 25565,
  username: 'BotAFK'
})

bot.on('spawn', () => {
  console.log('Bot conectado')
})
