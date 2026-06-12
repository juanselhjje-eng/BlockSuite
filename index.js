const mc = require('minecraft-protocol')

const client = mc.createClient({
  host: 'juanmuland.aternos.me',
  port: 35011,
  username: 'BotAFK'
})

client.on('connect', () => {
  console.log('Bot conectado')
})

client.on('error', err => {
  console.log(err)
})
