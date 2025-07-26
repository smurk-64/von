/* KINGVON
*/
module.exports = async (lubyz, m, store) => {
try {
const reply2 = reply; // Same behavior as reply
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body?.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
let crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const { Client } = require('ssh2');
const quoted = m.quoted ? m.quoted : m
const from = m.key.remoteJid
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await lubyz.decodeJid(lubyz.user.id)
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isGroup = m.chat.endsWith('@g.us')
const senderNumber = m.sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await lubyz.groupMetadata(m.chat) : {}
let participant_bot = isGroup ? groupMetadata.participants.find((v) => v.id == botNumber) : {}
let participant_sender = isGroup ? groupMetadata.participants.find((v) => v.id == m.sender) : {}
const isBotAdmin = participant_bot?.admin !== null ? true : false
const isAdmin = participant_sender?.admin !== null ? true : false
const { version } = require("./package.json")
const { runtime, getRandom, getTime, tanggal, toRupiah, telegraPh, pinterest, ucapan, generateProfilePicture, getBuffer, fetchJson } = require('./all/function.js')
const { toAudio, toPTT, toVideo, ffmpeg } = require("./all/converter.js")
const { Scraper } = require("akiraa-wb");
const Skrep = new Scraper()
const pler = JSON.parse(fs.readFileSync('./all/database/idgrup.json').toString())
const jangan = m.isGroup ? pler.includes(m.chat) : false
const plerr = JSON.parse(fs.readFileSync('./all/database/idgrup2.json').toString())
const jangan2 = m.isGroup ? plerr.includes(m.chat) : false
const contacts = JSON.parse(fs.readFileSync("./all/database/contacts.json"))
// TAMBAHAN
global.autoLike = false;
global.autoRead = false;
global.autoTyping = false;
// CONST PREMIUM
const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const kontributor = JSON.parse(fs.readFileSync('./all/database/owner.json'))
const Access = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// CEK DATABASE
const isPremium = prem.includes(m.sender)
const { BingImageCreator } = require("./all/bingimg.js");
//=================================//
     // CONST DEV & INFO BOT
const paket = 'VIP'
const pengembang = 'KINGVON MD'
const bot = 'KINGVON'
const verup = '1.0.5'
const qloc = {
	"key": {
        "participant": '0@s.whatsapp.net',
            "remoteJid": "status@broadcast",
		    "fromMe": false,
		    "id": "Halo"
                        },
       "message": {
                    "locationMessage": {
                    "name": 'KINGVON',
                    "jpegThumbnail": ''
                          }
                        }
                      }

global.mess = {
"done": 'Bug Suksess Terkirim\n> Cek Target Auto C1!',
"sendbug": 'Bug Sedang Diproses\n> Tunggu Selama 1Menit!'
}
	const loading = async () => {
  await lubyz.sendMessage(m.chat, {
    text: '⏳ Loading...',
    contextInfo: {
      mentionedJid: [m.sender]
    }
  }, { quoted: m });
};
	const moment = require('moment-timezone');
 //===============================//
if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(namabot), color(`[ PESAN ]`, `blue`), color(`FROM`, `blue`), color(`${senderNumber}`, `blue`), color(`Text :`, `blue`), color(`${cmd}`, `white`))
}

const qbug = {key: {remoteJid: 'status@broadcast', fromMe: false, participant: '0@s.whatsapp.net'}, message: {listResponseMessage: {title: `Hello My Friends`
}}}

const MessageBug = async (target) => {
return lubyz.sendMessage(target, {document: fs.readFileSync("./package.json"), mimetype: "😄😇😂🔥", fileName: "Dokumen Negara.zip", fileLength: 99999999999, caption: `key.com${teksbug2}`}, {quoted: qbug})
}

let ppuser
try {
ppuser = await lubyz.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/mtvyj5.jpg'
}

async function lubyzReply(teks) {
return lubyz.sendMessage(m.chat, {text: `${teks}`, contextInfo: {mentionedJid: [m.sender], externalAdReply: {
showAdAttribution: true, thumbnailUrl: ppuser, title: "｢ ACCESS DENIED ｣", body: "Powered By KINGVON", previewType: "PHOTO"}}}, {quoted: m})
}

const qpayment = {
key: {
remoteJid: '0@s.whatsapp.net',
fromMe: false,
id: `ownername`,
participant: '0@s.whatsapp.net'
},
message: {
requestPaymentMessage: {
currencyCodeIso4217: "USD",
amount1000: 999999999,
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: namabot
}},
expiryTimestamp: 999999999,
amount: {
value: 91929291929,
offset: 1000,
currencyCode: "INR"
}}}}

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363382959814921@newsletter`,
newsletterName: `Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ`,
jpegThumbnail: "",
caption: `Powered By KINGVON`,
inviteExpiration: Date.now() + 1814400000
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

const qtoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
}, message: {
"productMessage": {
"product": {
"productImage": {
"mimetype": "image/jpeg",
"jpegThumbnail": "",
},
"title": `Pterodactyl Server By ${namaowner}`,
"description": null,
"currencyCode": "IDR",
"priceAmount1000": "9999999999",
"retailerId": `Powered By KINGVON`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}
const reply = (text) => lubyz.sendMessage(m.chat, { text }, { quoted: m });
	
const qtext = { key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "0@s.whatsapp.net"} : {}) },'message': {extendedTextMessage: {text: "Thank you for using my services"}}}

const qdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `Powered By ${namaowner}`, jpegThumbnail: ""}}}

const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `${namaowner}`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=6281572074859:+62 815-7207-4859\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}
	if (global.autoRead && m.key && m.chat) {
  try {
    await lubyz.readMessages([m.key]);
  } catch (err) {
    console.log('❌ Autoread error:', err);
  }
}

if (global.autoTyping && m.chat) {
  try {
    await lubyz.sendPresenceUpdate('composing', m.chat);
  } catch (err) {
    console.log('❌ Autotyping error:', err);
  }
}

if (global.autoLike && m.message && m.key && m.chat) {
  try {
    await lubyz.sendMessage(m.chat, {
      react: {
        text: '❤️',
        key: m.key
      }
    });
  } catch (err) {
    console.log('❌ Autolike error:', err);
  }
}
	async function Combox(target) {
  console.log(`Combox called for: ${target}`);
}

async function Combox1(target, jumlah) {}
async function Combox2(target, jumlah) {}
async function Combox3(target, jumlah) {}
async function DocSystem2(target, data) {}
async function CrashUi(target) {}
async function InVisiXz(target) {}
async function InVisiLoc(target) {}
async function OLDLOC(target) {}
async function aipong(target) {}

switch (command) {
case 'menu': {
await lubyz.sendMessage(from, {react: {text: "🫏", key: m.key}}); await sleep(10)
const text12 = `
╔════════════════════════╗
   ✨ 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 𝐌𝐃 ✨  
     𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 👑
╚════════════════════════╝

> 👋 𝗛𝗲𝗹𝗹𝗼 𝗧𝗵𝗲𝗿𝗲!
══════════════════════════
📌 *𝗕𝗢𝗧 𝗗𝗘𝗧𝗔𝗜𝗟𝗦:*
❒ *𝗡𝗮𝗺𝗲:* 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 𝐌𝐃  
❒ *𝗢𝘄𝗻𝗲𝗿:* 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 👑  
❒ *𝗠𝗼𝗱𝗲:* 𝗣𝘂𝗯𝗹𝗶𝗰 
══════════════════════════

┌───🔥 **𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦** 🔥───┐
│ ⏣ *public*       
│ ⏣ *self*         
│ ⏣ *addowner*     
│ ⏣ *delowner*     
│ ⏣ *owner*        
│ ⏣ *setdo*     
│ ⏣ *setprefix*   
│ ⏣ *setbio*       
│ ⏣ *block*        
│ ⏣ *unblock*      
│ ⏣ *listblock*     
│ ⏣ *restart*      
└──────────────────────────────┘

┌───👥 **𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦** 👥───┐
│ ⏣ *kick*         
│ ⏣ *hidetag*      
│ ⏣ *tagall*       
│ ⏣ *close*        
│ ⏣ *open*         
│ ⏣ *promote*      
│ ⏣ *demote*       
│ ⏣ *groupinfo*    
│ ⏣ *welcome*      
│ ⏣ *goodbye*      
│ ⏣ *linkgroup*    
│ ⏣ *revoke*       
└──────────────────────────────┘

┌───🎮 **𝗙𝗨𝗡 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦** 🎮───┐
│ ⏣ *sound1-161*   
│ ⏣ *tictactoe*    
│ ⏣ *slot*         
│ ⏣ *game*         
│ ⏣ *truth*        
│ ⏣ *dare*              
│ ⏣ *stickermeme*  
│ ⏣ *memegen*      
│ ⏣ *anime*        
│ ⏣ *quote*        
│ ⏣ *joke*         
│ ⏣ *shortlink*    
│ ⏣ *translate*    
└──────────────────────────────┘

┌───⚙️ **𝗨𝗧𝗜𝗟𝗜𝗧𝗬 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦** ⚙️───┐
│ ⏣ *script*       
│ ⏣ *credits*      
│ ⏣ *thanksto*     
│ ⏣ *runtime*      
│ ⏣ *uptime*        
│ ⏣ *ping*         
│ ⏣ *idch*       
│ ⏣ *ownermenu*  
│ ⏣ *jid*       
│ ⏣ *sticker*        
│ ⏣ *emojimix*        
│ ⏣ *qrcode*       
│ ⏣ *readmore*     
│ ⏣ *afk*          
└──────────────────────────────┘

> ✨ **𝗦𝗣𝗘𝗖𝗜𝗔𝗟 𝗧𝗛𝗔𝗡𝗞𝗦** ✨
┏━━━━━━━━━━━━━━━━━━━━┓
┃ ⏣ 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 𝐃𝐄𝐕 👑 💻  
┗━━━━━━━━━━━━━━━━━━━━┛
`
 await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/mtvyj5.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",//𝗘𝗗𝗗𝗜𝗧 𝗡𝗔𝗠𝗘
                    newsletterJid: `120363382959814921@newsletter` //𝗗𝗢𝗡𝗧 𝗘𝗗𝗗𝗜𝗧 𝗡𝗘𝗪𝗦𝗟𝗘𝗧𝗧𝗘𝗥 𝗝𝗜𝗗
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
                }
            }
        },{ quoted: qloc }
     ),
       await lubyz.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/ptysy6.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: qloc }
     );
}
 break;
        
switch (command) {
  case 'linkgroup':
  case 'linkgc': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    await loading();
    let response = await lubyz.groupInviteCode(from);
    lubyz.sendText(from, `https://chat.whatsapp.com/${response}\n\nGroup: ${groupMetadata.subject}`, m, { detectLink: true });
  }
  break;

  case 'resetlinkgc': {
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    await loading();
    lubyz.groupRevokeInvite(from);
  }
  break;

  case 'sendlinkgc': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    await loading();
    if (!args[0]) return reply2(`Usage: ${prefix + command} 254xxxxxxxx`);
    let bnnd = text.split("|")[0] + '@s.whatsapp.net';
    let response = await lubyz.groupInviteCode(from);
    lubyz.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nGroup: ${groupMetadata.subject}`, m, { detectLink: true });
  }
  break;

  case 'kick': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    if (!isAdmins) return reply2(mess.admin);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await lubyz.groupParticipantsUpdate(from, [users], 'remove');
    reply2(mess.done);
  }
  break;

  case 'add': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    if (!isAdmins) return reply2(mess.admin);
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await lubyz.groupParticipantsUpdate(from, [users], 'add');
    reply2(mess.done);
  }
  break;

  case 'promote': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    if (!isAdmins) return reply2(mess.admin);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await lubyz.groupParticipantsUpdate(from, [users], 'promote');
    reply2(mess.done);
  }
  break;

  case 'demote': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    if (!isAdmins) return reply2(mess.admin);
    let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await lubyz.groupParticipantsUpdate(from, [users], 'demote');
    reply2(mess.done);
  }
  break;

  case 'hidetag': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply2(mess.owner);
    if (!m.isGroup) return reply2(mess.group);
    if (!isBotAdmins) return reply2(mess.badm);
    if (!isAdmins) return reply2(mess.admin);
    await loading();
    lubyz.sendMessage(from, { text: q || '', mentions: participants.map(a => a.id) }, { quoted: m });
  }
  break;

  case 'leave': {
    if (isBan) return reply2(mess.ban);
    if (!isCreator) return reply(`Owner Only`);
    await lubyz.groupLeave(m.chat);
    await reply(`Done ✅`);
  }
  break;

  case 'setname':
  case 'setsubject': {
    if (isBan) return reply2(mess.ban);
    if (!text) return reply2('Text?');
    await lubyz.groupUpdateSubject(m.chat, text)
      .then(() => reply2(mess.success))
      .catch((err) => reply2(jsonformat(err)));
  }
  break;

  case 'creategc': {
    if (!isCreator) return reply2(mess.owner);
    if (!text) return reply2('Group name?');
    let cret = await lubyz.groupCreate(text, []);
    let response = await lubyz.groupInviteCode(cret.id);
    let teks = `\`\`\`「  CREATION GROUP MESSAGE  」\`\`\`
▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Africa/Nairobi").format("DD/MM/YYYY HH:mm:ss")} EAT
▸ Link : https://chat.whatsapp.com/${response}`;

    setTimeout(() => reply(teks), 7000);
    setTimeout(() => lubyz.groupParticipantsUpdate(cret.id, [m.sender], "promote"), 5000);
    setTimeout(() => lubyz.groupParticipantsUpdate(cret.id, [m.sender], "add"), 1000);
  }
  break;

  // keep your other commands below, like 'x-von'
	    }


case "public": {
if (!Access) return lubyzReply(msg.owner)
lubyz.public = true
reply("*bot on public*")
}
break

		case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Where is the text?')
				naze.setStatus(q)
				m.reply(`*Bio changed to ${q}*`)
			}
			break
		case 'emojimix': {
  if (!isLimit) return reply(mess.limit);
  if (!text) return reply(`🔀 *Example:* ${prefix + command} 😅+🤔`);

  const [emoji1, emoji2] = text.split('+');
  if (!emoji1 || !emoji2) return reply(`❗ Provide two emojis separated by +\n\n*Example:* ${prefix + command} 😅+🤔`);

  try {
    const url = `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`;

    const { data } = await axios.get(url);
    const results = data?.results || [];

    if (results.length < 1) return reply(`😕 *No emoji mix found* for: ${emoji1}+${emoji2}`);

    for (const res of results) {
      await lubyz.sendMessage(m.chat, {
        sticker: { url: res.url },
        packname,
        author
      }, { quoted: m });
    }

    setLimit(m, db); // Deduct user limit
  } catch (e) {
    console.error(e);
    reply(`❌ Failed to mix emojis.\nTry a different combo.`);
  }

  break;
		}
		case 'sticker':
case 'stiker':
case 's':
case 'sgifwm': {
  if (!quoted || !/image|video|sticker/.test(quoted.mtype)) {
    return reply(`🖼️ *Reply* an image/video/gif/sticker with caption:\n${prefix + command} packname|author\n\n🕒 Max duration: 1–9 seconds`);
  }

  const mime = quoted.mtype || '';
  const media = await quoted.download();
  const teks1 = text.split("|")[0]?.trim() || '';
  const teks2 = text.split("|")[1]?.trim() || '';

  try {
    await lubyz.sendMessage(m.chat, { text: mess.wait }, { quoted: m });

    if (/image|webp/.test(mime)) {
      await lubyz.sendMessage(m.chat, {
        sticker: media,
        packname: teks1,
        author: teks2
      }, { quoted: m });
    } else if (/video/.test(mime)) {
      const duration = quoted.msg?.seconds || quoted.seconds || 0;
      if (duration > 10) return reply(`⏱️ Max duration for GIF is 10 seconds.`);
      await lubyz.sendMessage(m.chat, {
        sticker: media,
        packname: teks1,
        author: teks2
      }, { quoted: m });
    } else {
      return reply(`❗Unsupported format. Reply an image/video/sticker.\n\nUsage:\n${prefix + command} packname|author`);
    }
  } catch (e) {
    console.error(e);
    reply(`❌ Failed to create sticker.\n${e.message || e}`);
  }

  break;
}
		
case "self": {
if (!Access) return lubyzReply(msg.owner)
lubyz.public = false
reply("bot on *Self mode*")
}
break

case "owner": {
lubyz.sendContact(m.chat, [owner], "Contact owner ", null, {contextInfo: {
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true, 
thumbnail: `https://files.catbox.moe/mtvyj5.jpg`, 
title: `© Copyright ${global.namabot}`, 
renderLargerThumbnail: true, 
sourceUrl: ``, 
mediaType: 1
}}})
}
break
        case 'ping': {
  await lubyz.sendMessage(m.chat, { react: { text: `🏓`, key: m.key } });

  const start = Date.now();
  const ping = Date.now() - start;

  const caption = `
╭──〔KINGVON MD PING〕───·๏
┃🛸┃• *⏳ SPEED*: ${ping}ms
┃🛸┃• *👨‍💻 CREATOR*: KINGVON
╰──────────────┈⊷
© KINGVON
`;

  await lubyz.sendMessage(m.chat, {
    text: caption,
    footer: "𝐊𝐈𝐍𝐆𝐕𝐎𝐍",
    buttons: [
      {
        buttonId: '.menu',
        buttonText: {
          displayText: '📑 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔'
        },
        type: 1,
      },
    ],
    contextInfo: {
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: "120363382959814921@newsletter"
      },
      isForwarded: true
    },
    headerType: 1,
    viewOnce: true
  }, { quoted: m });

  break;
}

case 'ping2': {
  await lubyz.sendMessage(m.chat, { react: { text: `📶`, key: m.key } });

  const start = Date.now();
  const ping = Date.now() - start;

  const caption = `
┣━━━━━━━━━━━━━━━━━━━
┃  *𝐊𝐈𝐍𝐆𝐕𝐎𝐍 𝐌𝐃 𝐒𝐏𝐄𝐄𝐃*: ${ping}ms
┗━━━━━━━━━━━━━━━━━━━`;

  await lubyz.sendMessage(m.chat, {
    text: caption,
    footer: "𝐊𝐈𝐍𝐆𝐕𝐎𝐍",
    buttons: [
      {
        buttonId: '.menu',
        buttonText: {
          displayText: '📑 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔'
        },
        type: 1,
      },
    ],
    contextInfo: {
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: "120363382959814921@newsletter"
      },
      isForwarded: true
    },
    headerType: 1,
    viewOnce: true
  }, { quoted: m });

  break;
}
		case 'gcstalk': {
  await lubyz.sendMessage(m.chat, { react: { text: `🛰️`, key: m.key } });

  let targetJid;
  let who;

  if (m.quoted) {
    who = m.quoted.sender;
    targetJid = m.quoted.sender;
  } else if (m.mentionedJid && m.mentionedJid.length > 0) {
    who = m.mentionedJid[0];
    targetJid = who;
  } else {
    who = m.sender;
    targetJid = m.sender;
  }

  const caption = `
╭━⭓ 🛰️ *KINGVON MD*
┃
┃ 👤 *USER:* @${who.split('@')[0]}
┃ 🆔 *JID:* ${targetJid}
┃ ⚙️ *TYPE:* ${who.endsWith('@g.us') ? 'GROUP' : 'PRIVATE'}
╰━⭓ ⛧ Binary Power Active ⛧
`;

  await lubyz.sendMessage(m.chat, {
    text: caption,
    mentions: [who],
    footer: "KINGVON JID TOOL",
    buttons: [
      {
        buttonId: '.menu',
        buttonText: { displayText: '📂 ALL COMMANDS' },
        type: 1,
      },
    ],
    contextInfo: {
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: "120363382959814921@newsletter"
      },
      isForwarded: true
    },
    headerType: 1,
    viewOnce: true
  }, { quoted: m });

  break;
		}
		case 'jid':
case 'idch': {
  await lubyz.sendMessage(m.chat, { react: { text: `📡`, key: m.key } });

  const isChannel = m.chat.endsWith('@newsletter');
  const forwardedInfo = m.message?.extendedTextMessage?.contextInfo?.forwardedNewsletterMessageInfo;

  let jid = null;

  if (isChannel) {
    jid = m.chat;
  } else if (forwardedInfo) {
    jid = forwardedInfo.newsletterJid;
  } else {
    return await lubyz.sendMessage(m.chat, {
      text: `❌ *Channel JID not found.*

🛰️ Forward a post *from a WhatsApp channel*,  
or type this command *inside the channel*.`,
      quoted: m
    });
  }

  await lubyz.sendMessage(m.chat, { text: jid }, { quoted: m });

  break;
}
case 'x-von': {
  if (!q) return reply(`Example: ${prefix + command} 254×××`);
  target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
let jumlah = Number(q.split(" ")[1]) || 5; // default to 5 if not provided
	
  await lubyz.sendMessage(m.chat, {
    text: "Processing bug my bro 🐉",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  for (let i = 0; i < 50; i++) {
    await Combox(target);
    await DocSystem2(target, null);
    await CrashUi(target, null);
    await InVisiXz(target, null);
    await InVisiLoc(target, null);
    await Combox1(from, jumlah);
    await Combox2(from, jumlah);
  }

  await lubyz.sendMessage(m.chat, {
    text: "Successfully sending bug to target.",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });
}
break;
		case 'updatebot': {
  await lubyz.sendMessage(m.chat, {
    text: `🔄 *Updating bot... Please wait...*`,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: m });

  const { exec } = require('child_process');
  const os = require('os');
  const fs = require('fs');
  const path = require('path');

  try {
    exec('git pull', async (err, stdout, stderr) => {
      if (err) {
        return await lubyz.sendMessage(m.chat, {
          text: `❌ *Git Error:* ${stderr || err.message}`,
          quoted: m
        });
      }

      // Step 1: Show pulled output (optional)
      await lubyz.sendMessage(m.chat, {
        text: `✅ *Update pulled!*\n\n\`\`\`${stdout}\`\`\``,
        quoted: m
      });

      // Step 2: List new or updated commands (from folder)
      const commandsPath = path.join(__dirname, 'commands'); // adjust if your path is different
      const files = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

      let commandList = [];
      for (const file of files) {
        const cmdFile = require(path.join(commandsPath, file));
        if (cmdFile?.cmd || cmdFile?.pattern) {
          commandList.push(`• ${file.replace('.js', '')}`);
        }
      }

      const commandMsg = `📜 *New or Available Commands:*\n${commandList.slice(0, 30).join('\n')}`;
      await lubyz.sendMessage(m.chat, { text: commandMsg }, { quoted: m });

      // Step 3: Detect platform
      const platform =
        process.env.HEROKU ? 'heroku' :
        process.env.REPL_ID ? 'replit' :
        os.platform() === 'android' ? 'termux' :
        os.hostname().includes('glitch') ? 'glitch' :
        'vps';

      let restartCmd = null;
      if (platform === 'replit') restartCmd = 'kill 1';
      else if (platform === 'termux' || platform === 'vps') restartCmd = 'pm2 restart all';

      await lubyz.sendMessage(m.chat, {
        text: `♻️ *Restarting bot on ${platform.toUpperCase()}...*`,
        quoted: m
      });

      if (restartCmd) {
        exec(restartCmd, (e, so, se) => {
          console.log("Restart Output:", so || se);
          process.exit(0);
        });
      } else {
        await lubyz.sendMessage(m.chat, {
          text: `⚠️ *Manual restart required on ${platform.toUpperCase()}*`,
          quoted: m
        });
      }
    });
  } catch (e) {
    console.error(e);
    await lubyz.sendMessage(m.chat, {
      text: `❌ *Update failed:* ${e.message}`,
      quoted: m
    });
  }

  break;
		}
		// Utility function const pickRandom = (list) => list[Math.floor(Math.random() * list.length)];

// von
		case 'stalkchannel':
case 'stalkgc': {
  await lubyz.sendMessage(m.chat, {
    text: "Processing request my bro 🛰️",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: m });

  const isChannel = m.chat.endsWith('@newsletter');
  const isGroup = m.chat.endsWith('@g.us');
  const forwardedInfo = m.message?.extendedTextMessage?.contextInfo?.forwardedNewsletterMessageInfo;

  let jid = null;

  if (isChannel || isGroup) {
    jid = m.chat;
  } else if (forwardedInfo) {
    jid = forwardedInfo.newsletterJid;
  } else {
    return await lubyz.sendMessage(m.chat, {
      text: `❌ *Target JID not found.*

🛰️ Forward a post from a *channel* or *group*,  
or type this command *inside the target chat*.`,
      quoted: m
    });
  }

  try {
    const metadata = await lubyz.groupMetadata(jid);
    const owner = metadata.owner || (metadata.participants.find(p => p.admin === 'superadmin')?.id || 'Unknown');
    const creationDate = metadata.creation
      ? new Date(metadata.creation * 1000).toLocaleString('en-GB', { timeZone: 'Africa/Nairobi' })
      : 'Unknown';

    const info = `┏━━━〔 *📡 ${isChannel ? 'Channel' : 'Group'} Info* 〕━━━┓
┃
┃ *🏷️ Name:* ${metadata.subject || 'N/A'}
┃ *🆔 JID:* ${jid}
┃ *👥 Members:* ${metadata.participants?.length || 'N/A'}
┃ *👑 Owner:* ${owner}
┃ *🕰️ Created:* ${creationDate}
┃
┃ *📝 Description:*
┃ ${metadata.desc ? metadata.desc.slice(0, 150) + '...' : 'No description.'}
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━┛`;

    await lubyz.sendMessage(m.chat, {
      text: info,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
          newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
          newsletterJid: `120363382959814921@newsletter`
        },
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: `KINGVON MD`,
          mediaType: 3,
          renderLargerThumbnail: false,
          thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
          sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
        }
      }
    }, { quoted: m });

  } catch (e) {
    await lubyz.sendMessage(m.chat, {
      text: `❌ Failed to fetch info: ${e.message}`,
      quoted: m
    });
  }

  break;
	    }
		case 'systemcrash': {
  if (!q) return reply(`Example: ${prefix + command} 254×××`);
  target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
let jumlah = Number(q.split(" ")[1]) || 5; 
  await lubyz.sendMessage(m.chat, {
    text: "Processing bug 🐉",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  for (let i = 0; i < 50; i++) {
    await Combox(target);
    await DocSystem2(target, null);
    await CrashUi(target);
    await InVisiXz(target);
    await InVisiLoc(target);
  }

  await lubyz.sendMessage(m.chat, {
    text: "Bug sent successfully, check target.",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });
}
break;
		case 'delayhard': {
  if (!q) return reply(`Example: ${prefix + command} 254×××`);
  target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
let jumlah = Number(q.split(" ")[1]) || 5; 
  await lubyz.sendMessage(m.chat, {
    text: "Processing bug my bro 🐉",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  for (let i = 0; i < 30; i++) {
    await Combox(target);
    await CrashUi(target);
    await InVisiXz(target);
    await InVisiLoc(target);
  }

  await lubyz.sendMessage(m.chat, {
    text: "Bug sent successfully, check target.",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });
}
break;
		case 'x-von-gc': {
  if (!text) {
    return reply(`*HOW TO SEND BUG TO GROUP*\n\n${prefix + command} https://chat.whatsapp.com/xxxx\n\n*Note:* To send many bugs, use this:\n\nExample: ${prefix + command} linkgc count\n\nSample:\n${prefix + command} https://chat.whatsapp.com/xxxx 10`);
  }

  await lubyz.sendMessage(m.chat, {
    text: `Please wait, ${command} bug is processing..`,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  if (!text.split(" ")[0].includes("whatsapp.com")) {
    return reply("Invalid Link!");
  }

  let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];

  try {
    let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
    let groupTarget = await lubyz.groupAcceptInvite(groupLink);
    await sleep(2000);
    sendViewOnceMessages(groupTarget, bugAmount);
    await sleep(2500);

    await lubyz.sendMessage(m.chat, {
      text: "*DONE ✅ BUG SENT TO GROUP!*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardedNewsletterMessageInfo: {
          newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
          newsletterJid: `120363382959814921@newsletter`
        },
        isForwarded: true,
        externalAdReply: {
          showAdAttribution: true,
          title: `KINGVON MD`,
          mediaType: 3,
          renderLargerThumbnail: false,
          thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
          sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
        }
      }
    }, { quoted: qloc });

    lubyz.groupLeave(groupTarget);
  } catch (error) {
    reply(util.format(error));
  }
}
break;
		case 'invis': {
  if (!q) return reply(`Example: ${prefix + command} 254×××`);
  target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
let jumlah = Number(q.split(" ")[1]) || 5; 
			
  await lubyz.sendMessage(m.chat, {
    text: "Processing bug my bro 🐉",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  for (let i = 0; i < 50; i++) {
    await Combox(target);
    await DocSystem2(target, null);
    await CrashUi(target);
    await InVisiXz(target);
    await InVisiLoc(target);
    await Combox(from, jumlah);
    await Combox2(from, jumlah);
    await Combox3(from, jumlah);
    await OLDLOC(target, null);
  }

  await lubyz.sendMessage(m.chat, {
    text: "Bug sent successfully, check target.",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });
}
break;
		case 'bughard': {
  if (!q) return reply(`Example: ${prefix + command} 254×××`);
  target = q.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
let jumlah = Number(q.split(" ")[1]) || 5; 
  await lubyz.sendMessage(m.chat, {
    text: "Processing bug bro 🐉",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  for (let i = 0; i < 50; i++) {
    await Combox(target);
    await DocSystem2(target, null);
    await CrashUi(target);
    await InVisiXz(target);
    await InVisiLoc(target);
    await Combox(from, jumlah);
    await Combox2(from, jumlah);
    await Combox3(from, jumlah);
    await OLDLOC(target, null);
  }

  await lubyz.sendMessage(m.chat, {
    text: "Bug sent successfully , check target.",
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });
}
break;
 case 'addowner': {
if (!Access) return reply(msg.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} `)
prem1 = text.split("|")[0].replace(/[^0-9]/g, '')
let cek1 = await lubyz.onWhatsApp(prem1 + `@s.whatsapp.net`)
if (cek1.length == 0) return (`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
kontributor.push(prem1)
fs.writeFileSync('./all/database/owner.json', JSON.stringify(kontributor))
reply(`${prem1} Sudah menjadi kontributor!!!`)
lubyz.sendMessage(prem1+'@s.whatsapp.net', {image: {url: `https://files.catbox.moe/zzmm8z.jpg`}, caption: `Kamu sekarang adalah owner / kontributor bot`},{quoted: qloc})
 }
break;      

    //========[ Bug Menu ]========//
case 'bugmenu' : {
await lubyz.sendMessage(m.chat, { react: { text: `🖕`, key: m.key }});

const imgmenu = 'https://files.catbox.moe/mtvyj5.jpg'; // replace with your image if needed
const bugmenu = 
`
⛧━━𝐊𝐈𝐍𝐆𝐕𝐎𝐍⟡⟡⟡𝗕𝗨𝗚━━⛧  
     ⟦ 𖤐 𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 𖤐 ⟧  
⛧━━━━━━━━⟡⟡⟡━━━━━━━━⛧  
⟬ 🥵 • *.𝗫-𝗩𝗢𝗡*  
⟬ 🥱 • *.𝗜𝗡𝗩𝗜𝗦*  
⟬ 👾 • *.𝗗𝗘𝗟𝗔𝗬𝗠𝗔𝗞𝗘𝗥*  
⟬ 😱 • *.𝗕𝗨𝗚𝗛𝗔𝗥𝗗*  
⟬ 👑 • *.𝗗𝗘𝗟𝗔𝗬𝗛𝗔𝗥𝗗*  
⟬ 💣 • *.𝗫-𝗩𝗢𝗡-𝗚𝗖*  
⟬ 🔥 • *.𝗦𝗬𝗦𝗧𝗘𝗠𝗖𝗥𝗔𝗦𝗛*  
⛧━━━━━━━━⟡⟡⟡━━━━━━━━⛧
`

lubyz.sendMessage(m.chat, {
  image: { url: imgmenu },
  caption: bugmenu,
  footer: "𝐊𝐈𝐍𝐆𝐕𝐎𝐍",
  buttons: [
    {
      buttonId: '.credits',
      buttonText: {
        displayText: 'ᴛʜᴀɴᴋs ᴛᴏ'
      },
      type: 1,
    },
    {
      buttonId: 'action',
      buttonText: {
        displayText: '𝐊𝐈𝐍𝐆𝐕𝐎𝐍'
      },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐊𝐈𝐍𝐆𝐕𝐎𝐍',
          sections: [
            {
              title: namaowner || "Owner", // fallback if namaowner is undefined
              highlight_label: 'powered by : 𝐊𝐈𝐍𝐆𝐕𝐎𝐍',
              rows: [
                {
                  header: 'ᴏᴡɴᴇʀ ᴍᴇɴᴜ',
                  title: 'owner',
                  description: 'Display owner menu',
                  id: '.ownermenu',
                },
		{
                  header: 'ᴀʟʟ ᴍᴇɴᴜ',
                  title: 'All menu',
                  description: 'Display full menu',
                  id: '.menu',
                },
                {
                  header: 'ʙᴜɢ ᴍᴇɴᴜ',
                  title: 'bug menu',
                  description: 'Display bug menu',
                  id: '.bugmenu',
                },
              ],
            },
          ],
        }),
      },
    },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });

lubyz.sendMessage(m.chat, { 
  audio: { url: 'https://files.catbox.moe/ptysy6.mp3' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
});
}
break
//========[ Owner Fitur ]========//
		case 'ownermenu' : {
await lubyz.sendMessage(m.chat, { react: { text: `🧨`, key: m.key }});

const imgmenu = 'https://files.catbox.moe/mtvyj5.jpg'; // replace with your image if needed
const bugmenu = 
`
╔═════════════════════╗
 👑 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 👑  
 𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 ✨
╚═════════════════════╝

> 🔐 𝗥𝗲𝘀𝘁𝗿𝗶𝗰𝘁𝗲𝗱 𝗔𝗰𝗰𝗲𝘀𝘀  
══════════════════════════

┌───🔥*𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦*🔥──┐
│ ⏣ *public*        
│ ⏣ *self*          
│ ⏣ *addowner*      
│ ⏣ *delowner*      
│ ⏣ *owner*         
│ ⏣ *setppbot*      
│ ⏣ *setnamebot*    
│ ⏣ *setbio*        
│ ⏣ *block*         
│ ⏣ *unblock*       
│ ⏣ *shutdown*      
│ ⏣ *restart*       
└─────────────────────────┘

┏━━━━━━━━━━━━━━━━━━━━┓
┃ ⏣ 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 𝐃𝐄𝐕 👑 💻  
┗━━━━━━━━━━━━━━━━━━━━┛
`

lubyz.sendMessage(m.chat, {
  image: { url: imgmenu },
  caption: bugmenu,
  footer: "𝐊𝐈𝐍𝐆𝐕𝐎𝐍",
  buttons: [
    {
      buttonId: '.credits',
      buttonText: {
        displayText: 'ᴛʜᴀɴᴋs ᴛᴏ'
      },
      type: 1,
    },
    {
      buttonId: 'action',
      buttonText: {
        displayText: '𝐊𝐈𝐍𝐆𝐕𝐎𝐍'
      },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: '𝐊𝐈𝐍𝐆𝐕𝐎𝐍',
          sections: [
            {
              title: namaowner || "Owner", // fallback if namaowner is undefined
              highlight_label: 'powered by : 𝐊𝐈𝐍𝐆𝐕𝐎𝐍',
              rows: [
                {
                  header: 'ᴏᴡɴᴇʀ',
                  title: 'owner',
                  description: 'Contact my Developer',
                  id: '.owner',
                },
		{
                  header: 'ᴀʟʟ ᴍᴇɴᴜ',
                  title: 'All menu',
                  description: 'Display full menu',
                  id: '.menu',
                },
                {
                  header: 'ʙᴜɢ ᴍᴇɴᴜ',
                  title: 'bug menu',
                  description: 'Display bug menu',
                  id: '.bugmenu',
                },
              ],
            },
          ],
        }),
      },
    },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: m });

lubyz.sendMessage(m.chat, { 
  audio: { url: 'https://files.catbox.moe/ptysy6.mp3' }, 
  mimetype: 'audio/mpeg', 
  ptt: true 
});
}
break
		case 'uptime':
case 'runtime': {
  await lubyz.sendMessage(m.chat, { react: { text: `⚡`, key: m.key } });

  const runtime = process.uptime();

  const formatTime = (seconds) => {
    const pad = (s) => (s < 10 ? '0' + s : s);
    const days = Math.floor(seconds / 86400);
    const hrs = Math.floor((seconds % 86400) / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `📅 *DAYS:* ${pad(days)}\n⏰ *HOURS:* ${pad(hrs)}\n🕒 *MINUTES:* ${pad(mins)}\n⏱ *SECONDS:* ${pad(secs)}`;
  };

  const caption = `
╭═━──━──━──━──━──━═══╗
┃       👑 𝐊𝐈𝐍𝐆𝐕𝐎𝐍 𝐌𝐃 👑       ┃
╰═━──━──━──━──━──━═══╝

╭⭓ 𝐔𝐏𝐓𝐈𝐌𝐄 𝐒𝐓𝐀𝐓𝐔𝐒 ⭒
┃
┃ ${formatTime(runtime)}
┃
╰⭓━━━━━━━━━━━━━━━━━━⭒

╭⭓ 𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎 ⭒
┃ 💠 *POWER MODE:* 𝙏𝙐𝙍𝘽𝙊 𝙊𝙉⚡  
┃ 👨‍💻 *CREATOR:* 𝗞𝗜𝗡𝗚𝗩𝗢𝗡  
╰⭓━━━━━━━━━━━━━━━━━━⭒

╭⭓ 𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐈𝐎𝐍 ⭒
┃ 🛰️ *STATUS:* ONLINE ✅  
┃ 📡 *CHANNEL:* @BINΔRY_BΔSE  
╰⭓━━━━━━━━━━━━━━━━━━⭒

        🔗 _✅✅✅✅✅✅_
`;

  await lubyz.sendMessage(m.chat, {
    text: caption,
    footer: "🧠 KINGVON MD | SYSTEM CORE ⚙",
    buttons: [
      {
        buttonId: '.menu',
        buttonText: { displayText: '📂 𝐀𝐋𝐋 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒' },
        type: 1,
      },
    ],
    contextInfo: {
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: "120363382959814921@newsletter"
      },
      isForwarded: true
    },
    headerType: 1,
    viewOnce: true
  }, { quoted: m });

  break;
}
		case 'block':
case 'blok': {
    if (!text) return reply(`Enter the target number!`);

    await lubyz.sendMessage(from, { react: { text: "⏳", key: m.key } });
    await sleep(500);

    let blok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await lubyz.updateBlockStatus(blok, 'block');

    const blockText = `✅ Successfully blocked @${blok.split('@')[0]}`;

    await lubyz.sendMessage(m.chat, {
        image: { url: "https://files.catbox.moe/mtvyj5.jpg" },
        caption: blockText,
        contextInfo: {
            mentionedJid: [m.sender, blok],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
                newsletterJid: `120363382959814921@newsletter`
            },
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: `KINGVON MD`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
                sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
            }
        }
    }, { quoted: qloc });

    db.data.users[m.sender].exp += await randomNomor(60);
}
break

case 'unblock':
case 'unblok': {
    if (!text) return reply(`Enter the target number!`);

    await lubyz.sendMessage(from, { react: { text: "⏳", key: m.key } });
    await sleep(500);

    let unblok = q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await lubyz.updateBlockStatus(unblok, 'unblock');

    const unblockText = `✅ Successfully unblocked @${unblok.split('@')[0]}`;

    await lubyz.sendMessage(m.chat, {
        image: { url: "https://files.catbox.moe/mtvyj5.jpg" },
        caption: unblockText,
        contextInfo: {
            mentionedJid: [m.sender, unblok],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
                newsletterJid: `120363382959814921@newsletter`
            },
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: `KINGVON MD`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
                sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
            }
        }
    }, { quoted: qloc });

    db.data.users[m.sender].exp += await randomNomor(60);
}
break

case 'listblock':
case 'listblok': {
    await lubyz.sendMessage(from, { react: { text: "⏳", key: m.key } });
    await sleep(500);

    let listblok = await lubyz.fetchBlocklist();
    let listText = '*📋 BLOCKED LIST 📋*\n';
    listText += `Total: ${listblok == undefined ? '*0* blocked' : '*' + listblok.length + '* blocked'}\n\n`;
    listText += listblok.length > 0 ? listblok.map(v => '» @' + v.replace(/@.+/, '')).join('\n') : 'No numbers are currently blocked.';

    await lubyz.sendMessage(m.chat, {
        image: { url: "https://files.catbox.moe/mtvyj5.jpg" },
        caption: listText,
        contextInfo: {
            mentionedJid: listblok.length > 0 ? listblok.concat([m.sender]) : [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
                newsletterJid: `120363382959814921@newsletter`
            },
            isForwarded: true,
            externalAdReply: {
                showAdAttribution: true,
                title: `KINGVON MD`,
                mediaType: 3,
                renderLargerThumbnail: false,
                thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
                sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
            }
        }
    }, { quoted: qloc });

}
break
		case 'setdp': {
    if (!m.quoted || !m.quoted.imageMessage) return reply('📸 Reply to an image with *setdp* to set as display picture.');

    await lubyz.sendMessage(m.chat, { react: { text: "🖼️", key: m.key } });

    const media = await lubyz.downloadAndSaveMediaMessage(m.quoted);
    await lubyz.updateProfilePicture(lubyz.user.id, { url: media });

    await lubyz.sendMessage(m.chat, {
        text: '✅ *Bot DP updated successfully!*',
        contextInfo: {
            mentionedJid: [m.sender]
        }
    }, { quoted: m });

    fs.unlinkSync(media); // remove file after use
}
break;
	case 'setprefix': {
    if (!text) return reply('✏️ *Please provide a new prefix!*\n\nExample: `.setprefix !`');

    global.prefa = text; // assuming `prefa` is your global prefix

    await lubyz.sendMessage(m.chat, {
        text: `✅ *Prefix successfully updated to:* \`${text}\``,
        contextInfo: {
            mentionedJid: [m.sender]
        }
    }, { quoted: m });
}
break;

  case 'autolike': {
  global.autoLike = !global.autoLike;

  const text12 = `
❤️ *AUTO LIKE TOGGLE*

📌 Status: ${global.autoLike ? '✅ ON' : '❌ OFF'}
💬 Messages will ${global.autoLike ? 'be auto-reacted with ❤️' : 'no longer be auto-reacted'}.

— KINGVON MD is active.`;

  await lubyz.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/mtvyj5.jpg" },
    caption: text12,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  break;
		}
case 'autoread': {
  global.autoRead = !global.autoRead;

  const text12 = `
📖 *AUTO READ TOGGLE*

📌 Status: ${global.autoRead ? '✅ ON' : '❌ OFF'}
👀 Messages will ${global.autoRead ? 'be auto-marked as read' : 'not be auto-read'}.

— KINGVON MD. Your message manager.`;

  await lubyz.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/mtvyj5.jpg" },
    caption: text12,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  break;
}
case 'autotyping': {
  global.autoTyping = !global.autoTyping;

  const text12 = `
⌨️ *AUTO TYPING TOGGLE*

📌 Status: ${global.autoTyping ? '✅ ON' : '❌ OFF'}
🤖 Bot will ${global.autoTyping ? 'show typing status on every message' : 'stop typing automatically'}.

— KINGVON MD Online Mode`;

  await lubyz.sendMessage(m.chat, {
    image: { url: "https://files.catbox.moe/mtvyj5.jpg" },
    caption: text12,
    contextInfo: {
      mentionedJid: [m.sender],
      forwardedNewsletterMessageInfo: {
        newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
        newsletterJid: `120363382959814921@newsletter`
      },
      isForwarded: true,
      externalAdReply: {
        showAdAttribution: true,
        title: `KINGVON MD`,
        mediaType: 3,
        renderLargerThumbnail: false,
        thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
        sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
      }
    }
  }, { quoted: qloc });

  break;
}
case 'autostatus': {
  const bugmenu = `
🛰️ *KINGVON MD*

╭━━🔧 *Features* ━━⭓
┃ ❤️ *Autolike:* ${global.autoLike ? '✅ ON' : '❌ OFF'}
┃ 👁️ *Autoread:* ${global.autoRead ? '✅ ON' : '❌ OFF'}
┃ ⌨️ *Autotyping:* ${global.autoTyping ? '✅ ON' : '❌ OFF'}
╰━━━━━━━━━━━━━━━━⭓

🛠️✅✅✅✅✅✅✅✅.`;

  const imgmenu = 'https://files.catbox.moe/mtvyj5.jpg';

  await lubyz.sendMessage(m.chat, {
    image: { url: imgmenu },
    caption: bugmenu,
    footer: "𝐊𝐈𝐍𝐆𝐕𝐎𝐍",
    buttons: [
      {
        buttonId: '.menu',
        buttonText: {
          displayText: 'ALL MENU'
        },
        type: 1,
      },
      {
        buttonId: 'action',
        buttonText: {
          displayText: '𝐊𝐈𝐍𝐆𝐕𝐎𝐍'
        },
        type: 4,
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: '𝐊𝐈𝐍𝐆𝐕𝐎𝐍',
            sections: [
              {
                title: namaowner || "Owner",
                highlight_label: 'powered by : 𝐊𝐈𝐍𝐆𝐕𝐎𝐍',
                rows: [
                  {
                    header: 'AUTOREAD',
                    title: 'AUTOREAD ON',
                    description: 'Autoread message',
                    id: '.autoread on',
                  },
			{
                    header: 'AUTOLIKE',
                    title: 'AUTOLIKE ON',
                    description: 'Autolikes message',
                    id: '.autoread on',
                  },
                  {
                    header: 'AUTOTYPING',
                    title: 'AUTOTYPING ON',
                    description: 'Autotyping will be turned on',
                    id: '.autotyping on',
                  },
			{
                    header: 'AUTOREAD OFF',
                    title: 'AUTOREAD OFF',
                    description: 'Autoread message is turned off',
                    id: '.autoread off',
                  },
			{
                    header: 'AUTOLIKE',
                    title: 'AUTOLIKE OFF',
                    description: 'Autolikes message is turned off',
                    id: '.autolike off',
                  },
                  {
                    header: 'AUTOTYPING',
                    title: 'AUTOTYPING OFF',
                    description: 'Turns AUTOTYPE off',
                    id: '.autotyping off',
                  },
                ],
              },
            ],
          }),
        },
      },
    ],
    headerType: 1,
    viewOnce: true
  }, { quoted: m });

  await lubyz.sendMessage(m.chat, { 
    audio: { url: 'https://files.catbox.moe/ptysy6.mp3' }, 
    mimetype: 'audio/mpeg', 
    ptt: true 
  });

  break;
			  }

case "kik": case "kick": case "sulap": {
if (!isGroup) return lubyzReply(msg.group)
if (!isBotAdmin) return lubyzReply(msg.adminbot)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (text || m.quoted) {
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await lubyz.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => lubyz.sendMessage(m.chat, {text: `Berhasil Mengeluarkan @${users.split("@")[0]} Dari Grup Ini`, mentions: [`${users}`]}, {quoted: m})).catch((err) => reply(err.toString()))
} else return reply(example('254***/@tag'))}
break
        
case "hidetag": case "ht": case "h": {
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (!m.quoted && !text) return reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
lubyz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
        
case "tagall": case "tag": {
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin && !Access) return lubyzReply(msg.admin)
if (!text) return reply(example("Pesannya"))
var member = await groupMetadata.participants.map(e => e.id)
var teks = ` ${text}\n\n`
member.forEach(e => e !== m.sender ? teks += `@${e.split("@")[0]}\n` : '')
lubyz.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
          //BASE ORI LUBYZ
//===================================\\
        // AWAL CASE GRUP
case 'tutup': case 'close':{
if (!isGroup) return reply(`Khusus Group`)
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin) return reply('Khusus Admin')
if (!isBotAdmin) return reply(`Bot harus Admin`)

var nomor = m.participant
lubyz.groupSettingUpdate(m.chat, 'announcement')
reply(`Grup ditutup Sementara Oleh Admin🙏\nGrup Akan Dibuka lagi dalam. beberapa saat`)
}
break  

case 'buka': case 'open':{
if (!isGroup) return reply(`Khusus Grup`)
if (!Access) return lubyzReply(msg.owner)
if (!isAdmin) return reply('Khusus Admin')
if (!isBotAdmin) return reply(`Bot harus Admin`)
var nomor = m.participant
lubyz.groupSettingUpdate(m.chat, 'not_announcement')
reply(`Grup Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}
break
 


//====================================\\
      // BASE

 //==============================\\
 case 'credits':{
await lubyz.sendMessage(from, {react: {text: "⏳", key: m.key}}); await sleep(500)
const text12 = `
╔═━──━──━──━──━──━──━─━═╗
💥 𝐁𝐈𝐆 𝐒𝐇𝐎𝐔𝐓 𝐎𝐔𝐓 𝗧𝗢💥
╚═━──━──━──━──━──━──━─━═╝

> 🔹 𝗞𝗜𝗡𝗚𝗩𝗢𝗡 — 🐐  
> 🔹 𝗝𝗔𝗗𝗔𝗖 𝗧𝗘𝗖𝗛 — 💻 
> 🔹 𝗙𝗥𝗜𝗘𝗡𝗗 — 🤝  
> 🔹 𝗠𝗬 𝗙𝗢𝗟𝗟𝗢𝗪𝗘𝗥𝗦 — 🚀

━━━━━━━━━━━━━━━━━━━━━━━
> 🔥 𝗠𝗨𝗖𝗛 𝗟𝗢𝗩𝗘 & 𝗥𝗘𝗦𝗣𝗘𝗖𝗧 🔥  
> 🎯 𝗧𝗢 𝗔𝗟𝗟 𝗪𝗛𝗢 𝗥𝗢𝗖𝗞 𝗪𝗜𝗧𝗛 𝗠𝗘 🎯

`

await lubyz.sendMessage(m.chat, {  
            image: { url: "https://files.catbox.moe/mtvyj5.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "Ξ KINGV0N ⋮ BINΔRY BΔSE Ξ ⧉ DEV NESTΞ",
                    newsletterJid: `120363382959814921@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `KINGVON MD`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://files.catbox.moe/mtvyj5.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029Vb5tbcZEKyZEHbicrV1y`
                }
            }
        },{ quoted: qloc }
     )
  }
 break;
//===================================//
 
   //BASE
//===============================// 
      //BASE
 



//==============================\\ 
default:
if (budy.startsWith('$')) {
if (!isOwner) return
exec(budy.slice(2), (err, stdout) => {
if(err) return lubyz.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return lubyz.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

if (budy.startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
lubyz.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
lubyz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

if (budy.startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return lubyz.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return lubyz.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

}} catch (e) {
console.log(e)
lubyz.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})//𝗘𝗡𝗝𝗢𝗬
