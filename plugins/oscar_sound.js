let fs = require('fs')
let handler = async (m) => {
let jarot = fs.readFileSync('./mp3/DJ+LITERASI+DEMONS.mp3')
conn.sendFile(m.chat, jarot, '', '', m, true)
}

handler.customPrefix = /^(hanz)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
