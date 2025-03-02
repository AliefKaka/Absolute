global.owner = ['62895411120976']
global.mods = ['62895411120976']
global.prems = ['62895411120976']
global.numberowner = '62895411120976'
global.nameowner = 'Alief Kaka'
global.mail = 'aliefkaka123@gmail.com' 
global.namebot = 'ABSOLUTE'
global.wm = '© Mamah'
global.instagram = 'YOUR_LINK_INSTAGRAM'
global.gc = 'YOUR_LINK_GROUP'

// Ini Untuk Upload File Ke Channel Discord
global.webhookUrlDiscord = 'WEBHOOK_URL'
global.idChannelDiscord = 'DISCORD_CHANNEL_ID'

global.packname = 'Made With'
global.author = 'Bot WhatsApp'

global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'

global.Qris = 'https://static.topindoku.co.id/images/qris/nobu/ID2021071087658_A01.png'
global.Payment = `
*Metode Pembayaran Tersedia:*

1. **Dana**       : 0895411120976
2. **OVO**        : 0895411120976
3. **GoPay**      : 0895411120976
4. **ShopeePay**  : -
5. **SeaBank**    : -
6. **BankJago**   : -
7. **Madera**     : -
8. **NeoBank**    : -

*Untuk QRIS, silakan scan gambar di bawah ini.*
`

global.ownerrepo = 'GITHUB_USERNAME'
global.repo = 'REPOSITORY_NAME'
global.githubToken = 'YOUR_GITHUB_TOKEN'

global.maxwarn = '2'
global.antiporn = true

global.lann = 'Btz-fsApq' 
global.btc = 'a3xNnypG' 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': global.lann, 
  'https://api.botcahx.eu.org': global.btc
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
