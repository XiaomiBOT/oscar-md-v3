let fetch = require('node-fetch')
let teks = 'Donasi'
let handler = async (m, { conn }) => conn.send2ButtonLoc(m.chat, await (await fetch('https://telegra.ph/file/c6d47e0aa9dca2263bee9.png'+ teks)).buffer(), `

*𝐇𝐚𝐥𝐨 𝐁𝐚𝐧𝐡 𝐃𝐨𝐧𝐚𝐬𝐢 𝐲𝐮𝐤 𝐁𝐢𝐚𝐫 𝐁𝐨𝐭 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐥𝐚𝐥𝐮👋*
╔═══════════════════
║ _*DONASI UNTUK*_  Hanz ×͜×
╠═══════════════════
║          ❉ 〔 *𝗗𝗢𝗡𝗔𝗦𝗜* 〕 ❉
║➸ *DANA* : 
║➸ 085779150501
║➸ *PULSA
║➸ 085779150501
║➸ *Saweria*:
║ https://saweria.co/ranggabot123
╰═══════════════════
╔════════════════════
║ *Donasi Via Ikuti Sosial media*
╠════════════════════
║     ❉ 〔 𝐒𝐨𝐬𝐢𝐚𝐥 𝐌𝐞𝐝𝐢𝐚 Hanz 〕 ❉
║➸ *Instasgram*
║ https://instagram.com/rangga_botz
║➸ *Youtube*
║ https://youtube.com/channel/UCkiB1g5qA7xtd7AlXd46vcw
║➸ *Github*
║ https://github.com/XiaomiBOT
╚════════════════════

`.trim(), wm, 'Owner', '.owner', 'Menu', '.menu')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
