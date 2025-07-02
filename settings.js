/*Von BASES*/

require("./all/module.js")
const { color } = require('./all/function')
const { version } = require("./package.json")
//========== Setting Owner ==========//
global.owner = "254720326316"
global.owner2 = "KINGVON"
global.namaowner = "KINGVON"
global.botname = "KINGVON MD"
//======== Setting Bot & Link ========//
global.namabot = "KINGVON" 
global.namabot2 = "KINGVON"
global.foother = "© - KINGVON"
global.versibot = "1.0"
global.idsaluran = false
global.linkgc = 'https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x'
global.linksaluran = "https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x"
global.linkyt = 'https://youtube.com/@lubyz'
global.linktele = 'https://t.me/KINGVON'
global.packname = "Lubyz V1.5"
global.author = "Lubyz"

//========== Setting Event ==========//
global.welcome = true
global.autoread = false
global.anticall = false
global.owneroff = false


//========== Setting Panel Server  1==========//
global.domain = ""
global.apikey = ""
global.capikey = ""
//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"

//========= Setting Message =========//
global.msg = {
"error": "Maaf terjadi kesalahan..",
"done": "Succesfully ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer", 
"premium": "*• Premium Only* Fitur Ini Hanya Untuk user premium"

}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
