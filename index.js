/*
carina bases*/

require("./all/global")

const func = require("./all/place")
const readline = require("readline")
const yargs = require('yargs/yargs')
const _ = require('lodash')
const fs = require("fs")
const usePairingCode = true
const pino = require("pino")
const chalk = require("chalk")
const { Boom } = require("@hapi/boom")
const { DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion, makeInMemoryStore } = require("@adiwajshing/baileys")

// ================== TELEGRAM BOT SETUP ==================
const TelegramBot = require("node-telegram-bot-api")
const tgToken = process.env.TELEGRAM_TOKEN || "8343658054:AAEsVxO0Ol3g90pte6pd0MT6RXEpNH7FVv0"
const tgBot = new TelegramBot(tgToken, { polling: true })

// Linked users (Telegram ↔ WhatsApp)
let linkedUsers = {}
const userFile = "./linkedUsers.json"
if (fs.existsSync(userFile)) linkedUsers = JSON.parse(fs.readFileSync(userFile))
function saveUsers() { fs.writeFileSync(userFile, JSON.stringify(linkedUsers, null, 2)) }

// Telegram Admins (comma-separated Telegram user IDs)
const TG_ADMINS = (process.env.TELEGRAM_ADMINS || "8343658054").split(",")
// =========================================================

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
    return new Promise((resolve) => { rl.question(text, resolve) })
}

async function startSesi() {
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const { version, isLatest } = await fetchLatestBaileysVersion()

    console.log(chalk.blue.bold(`
WELCOME TO KINGVON MD
${chalk.yellow.bold(`VERSION : 1.0.`)}
${chalk.magenta.bold(`MODE BRUTAL`)}
${chalk.green.bold("📃 Information :")}   
${chalk.red.bold(`
▢ Script : KINGVON MD
▢ Author : KINGVON
▢ Version : 1.0
`)}
${chalk.white.italic("Created By KINGVON")}\n`));

    const connectionOptions = {
        version,
        keepAliveIntervalMs: 30000,
        printQRInTerminal: !usePairingCode,
        logger: pino({ level: "fatal" }),
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        getMessage: async (key) => {
            if (store) {
                const msg = await store.loadMessage(key.remoteJid, key.id, undefined)
                return msg?.message || undefined
            }
            return { conversation: 'Bot By KINGVON' }
        }
    }

    const lubyz = func.makeWASocket(connectionOptions)

    // 🔹 Pairing code prompt for CLI
    if (usePairingCode && !lubyz.authState.creds.registered) {
        const phoneNumber = await question(color('NUMBER FOR PAIRING EXAMPLE 254720326316 :\n', 'green'));
        const code = await lubyz.requestPairingCode(phoneNumber.trim())
        console.log(`${chalk.redBright('Your Pairing Code')} : ${code}`)
    }

    store?.bind(lubyz.ev)

    // ================= TELEGRAM COMMANDS =================
    // /link <number>
    tgBot.onText(/\/link (.+)/, async (msg, match) => {
        const chatId = msg.chat.id
        const phoneNumber = match[1].trim()
        try {
            const code = await lubyz.requestPairingCode(phoneNumber)
            tgBot.sendMessage(chatId, `📌 Pairing code for *${phoneNumber}*:\n\`${code}\`\nEnter this in WhatsApp.`, { parse_mode: "Markdown" })
            linkedUsers[msg.from.id] = phoneNumber
            saveUsers()
        } catch (err) {
            tgBot.sendMessage(chatId, "❌ Failed to generate pairing code.")
            console.error(err)
        }
    })

    // /listusers (admin only)
    tgBot.onText(/\/listusers/, (msg) => {
        const chatId = msg.chat.id
        const userId = msg.from.id.toString()
        if (!TG_ADMINS.includes(userId)) return tgBot.sendMessage(chatId, "❌ Not allowed.")

        if (Object.keys(linkedUsers).length === 0) return tgBot.sendMessage(chatId, "📭 No users linked yet.")

        let list = "📋 *Linked Users:*\n\n"
        for (let [tgId, waNumber] of Object.entries(linkedUsers)) {
            list += `👤 Telegram: \`${tgId}\`\n📱 WhatsApp: \`${waNumber}\`\n\n`
        }
        tgBot.sendMessage(chatId, list, { parse_mode: "Markdown" })
    })

    // /kickuser <number> (admin only + block on WhatsApp)
    tgBot.onText(/\/kickuser (.+)/, async (msg, match) => {
        const chatId = msg.chat.id
        const userId = msg.from.id.toString()
        if (!TG_ADMINS.includes(userId)) return tgBot.sendMessage(chatId, "❌ Not allowed.")

        const number = match[1].trim()
        let foundKey = null
        for (let [tgId, waNumber] of Object.entries(linkedUsers)) if (waNumber === number) foundKey = tgId
        if (!foundKey) return tgBot.sendMessage(chatId, `⚠️ No user found with WhatsApp number: ${number}`)

        try {
            await lubyz.updateBlockStatus(`${number}@s.whatsapp.net`, "block")
            delete linkedUsers[foundKey]
            saveUsers()
            tgBot.sendMessage(chatId, `✅ User \`${number}\` blocked and removed.`, { parse_mode: "Markdown" })
        } catch (err) {
            tgBot.sendMessage(chatId, `❌ Failed to block user: ${number}`)
            console.error(err)
        }
    })

    // /owner (anyone)
    tgBot.onText(/\/owner/, (msg) => {
        tgBot.sendMessage(msg.chat.id, `👑 *Bot Owner:*\n📱 WhatsApp: ${global.owner}\n🌐 Channel: https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`, { parse_mode: "Markdown" })
    })
    // ======================================================

    // ================= WHATSAPP EVENT LISTENERS =================
    lubyz.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output.statusCode
            console.log(color(lastDisconnect.error, 'deeppink'))
            if (lastDisconnect.error == 'Error: Stream Errored (unknown)') process.exit()
            else if (reason === DisconnectReason.badSession) { console.log(color(`Bad Session File, Please Delete Session and Scan Again`)); process.exit() }
            else if (reason === DisconnectReason.connectionClosed) { console.log(color('[SYSTEM]', 'white'), color('Connection closed, reconnecting...', 'deeppink')); process.exit() }
            else if (reason === DisconnectReason.connectionLost) { console.log(color('[SYSTEM]', 'white'), color('Connection lost, trying to reconnect', 'deeppink')); process.exit() }
            else if (reason === DisconnectReason.connectionReplaced) { console.log(color('Connection Replaced, Another New Session Opened')); lubyz.logout() }
            else if (reason === DisconnectReason.loggedOut) { console.log(color(`Device Logged Out, Please Scan Again And Run.`)); lubyz.logout() }
            else if (reason === DisconnectReason.restartRequired) { console.log(color('Restart Required, Restarting...')); await startSesi() }
            else if (reason === DisconnectReason.timedOut) { console.log(color('Connection TimedOut, Reconnecting...')); startSesi() }
        } else if (connection === "connecting") console.log(color('Connecting . . . '))
        else if (connection === "open") {
            let teksnotif = `
╔════════════════════════╗
   🤖 KINGVON MD CONNECTED 🤖
╚════════════════════════╝

╔━━━━━━━━━━━━━━━━━━━━━━━╗
┃ 🔹 Bot Name: ${global.namabot2}
┃ 🔹 Version : 1.0
┃ 🔹 User    : ${lubyz.user.id.split(":")[0]}
╚━━━━━━━━━━━━━━━━━━━━━━━╝

✅ Status: Online & Ready to Serve!`
            lubyz.sendMessage(global.owner + "@s.whatsapp.net", { text: teksnotif })
            console.log(color('Bot successfully connected'))
        }
    })

    // ================= CALL HANDLER =================
    lubyz.ev.on('call', async (user) => {
        if (!global.anticall) return
        for (let ff of user) {
            if (ff.isGroup == false && ff.status == "offer") {
                let sendcall = await lubyz.sendMessage(ff.from, {
                    text: `@${ff.from.split("@")[0]} Maaf Kamu Akan Saya Block Karna Ownerbot Menyalakan Fitur *Anticall*\nJika Tidak Sengaja Segera Hubungi Owner Untuk Membuka Blokiran Ini`,
                    contextInfo: { mentionedJid: [ff.from], externalAdReply: { showAdAttribution: true, thumbnail: fs.readFileSync("./media/warning.jpg"), title: "｢ CALL DETECTED ｣", previewType: "PHOTO" } }
                }, { quoted: null })
                lubyz.sendContact(ff.from, [owner], "Developer WhatsApp Bot", sendcall)
                await sleep(10000)
                await lubyz.updateBlockStatus(ff.from, "block")
            }
        }
    })

    // ================= MESSAGE HANDLER =================
    lubyz.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            let m = chatUpdate.messages[0]
            if (!m.message) return
            m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
            if (m.key && m.key.remoteJid === 'status@broadcast') return lubyz.readMessages([m.key])
            if (!lubyz.public && m.key.remoteJid !== global.owner+"@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return
            if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
            if (global.autoread) lubyz.readMessages([m.key])
            m = func.smsg(lubyz, m, store)
            require("./von.js")(lubyz, m, store)
        } catch (err) {
            console.log(err)
        }
    })

    // ================= GROUP PARTICIPANTS HANDLER =================
    lubyz.ev.on('group-participants.update', async (anu) => {
        if (!global.welcome) return
        let botNumber = await lubyz.decodeJid(lubyz.user.id)
        if (anu.participants.includes(botNumber)) return
        try {
            let metadata = await lubyz.groupMetadata(anu.id)
            let namagc = metadata.subject
            let participants = anu.participants
            for (let num of participants) {
                let check = anu.author !== num && anu.author.length > 1
                let tag = check ? [anu.author, num] : [num]
                let ppuser = ''
                try { ppuser = await lubyz.profilePictureUrl(num, 'image') } catch { ppuser = 'https://files.catbox.moe/zzmm8z.jpg' }

                if (anu.action == 'add') {
                    lubyz.sendMessage(anu.id, { 
                        text: check ? `@${anu.author.split("@")[0]} Telah Menambahkan @${num.split("@")[0]} Ke Dalam Grup Ini` : `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Welcome Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                }
                if (anu.action == 'remove') {
                    lubyz.sendMessage(anu.id, { 
                        text: check ? `@${anu.author.split("@")[0]} Telah Mengeluarkan @${num.split("@")[0]} Dari Grup Ini` : `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Leaving Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                }
                if (anu.action == "promote") {
                    lubyz.sendMessage(anu.id, { 
                        text: `@${anu.author.split("@")[0]} Telah Menjadikan @${num.split("@")[0]} Sebagai Admin Grup Ini`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Promote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                }
                if (anu.action == "demote") {
                    lubyz.sendMessage(anu.id, { 
                        text: `@${anu.author.split("@")[0]} Telah Memberhentikan @${num.split("@")[0]} Sebagai Admin Grup Ini`,
                        contextInfo: { mentionedJid: [...tag], externalAdReply: { thumbnailUrl: ppuser, title: '© Demote Message', body: '', renderLargerThumbnail: true, sourceUrl: linkgc, mediaType: 1 } }
                    })
                }
            }
        } catch (err) { console.log(err) }
    })

    lubyz.public = true
    lubyz.ev.on('creds.update', saveCreds)
    return lubyz
}

startSesi()

process.on('uncaughtException', function (err) { 
    console.log('Caught exception: ', err) 
})
