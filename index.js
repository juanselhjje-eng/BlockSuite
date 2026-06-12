const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'juanmuland.aternos.me',
  port: 35011,
 username: 'Botsito'
})

bot.on('spawn', () => {
  console.log('Bot conectado')
})
