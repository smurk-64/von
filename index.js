/*
VON bases
*/

require("./all/global");

const func = require("./all/place");
const readline = require("readline");
const yargs = require('yargs/yargs');
const _ = require('lodash');
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const chalk = require('chalk');
const pino = require('pino');
const fs = require('fs');

const question = (text) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(text, resolve);
    });
};

async function startSesi() {
    const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) });
    const { state, saveCreds } = await useMultiFileAuthState(`./session`);
    const { version } = await fetchLatestBaileysVersion();

    console.log(chalk.blue.bold(`
WELCOME TO KINGVON MD
${chalk.yellow.bold(`VERSION : 1.0.`)}
${chalk.magenta.bold(`MODE BRUTAL`)}
${chalk.green.bold("📃 Information :")}
${chalk.red.bold(`
▢ Script : KINGVON MD
▢ Author : KINGVON
▢ Versi : 1.0
`)}
${chalk.white.italic("Created By KINGVON")}\n`));

    const connectionOptions = {
        version,
        logger: pino({ level: "silent" }),
        printQRInTerminal: true,
        auth: state,
        browser: ["Ubuntu", "Chrome", "20.0.04"]
    };

    const lubyz = makeWASocket(connectionOptions);

    store?.bind(lubyz.ev);

    lubyz.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

            if (reason === DisconnectReason.badSession) {
                console.log(chalk.red(`Bad Session File. Please delete session and scan again.`));
                process.exit();
            } else if (reason === DisconnectReason.connectionClosed || reason === DisconnectReason.connectionLost || reason === DisconnectReason.timedOut) {
                console.log(chalk.yellow(`Connection closed. Reconnecting...`));
                startSesi(); // Auto restart
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(chalk.red(`Connection replaced. Another session is open.`));
                await lubyz.logout();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red(`Device logged out. Please scan again.`));
                await lubyz.logout();
                startSesi(); // Restart for QR code
            } else {
                console.log(chalk.red(`Unknown disconnect reason. Reconnecting...`));
                startSesi();
            }
        } else if (connection === 'connecting') {
            console.log(chalk.green(`Menghubungkan . . .`));
        } else if (connection === 'open') {
            let teksnotif = `
*KINGVON MD connected*

*▢ Botname :* ${global.namabot2}
*▢ Version :* 1.0
*▢ Name : ${lubyz.user.id.split(":")[0]}*`;
            lubyz.sendMessage(global.owner + "@s.whatsapp.net", { text: teksnotif });
            console.log(chalk.green(`Bot berhasil tersambung.`));
        }
    });

    lubyz.ev.on('creds.update', saveCreds);

    // Anti-Call Handler
    lubyz.ev.on('call', async (user) => {
        if (!global.anticall) return;
        for (let ff of user) {
            if (!ff.isGroup && ff.status === "offer") {
                let sendcall = await lubyz.sendMessage(ff.from, {
                    text: `@${ff.from.split("@")[0]} Maaf kamu akan saya block karena menelpon bot. Hubungi owner untuk membuka blokir.`,
                    contextInfo: { mentionedJid: [ff.from] }
                });
                await lubyz.updateBlockStatus(ff.from, "block");
            }
        }
    });

    // Message Handler
    lubyz.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            m = chatUpdate.messages[0];
            if (!m.message) return;

            m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message;
            if (m.key && m.key.remoteJid === 'status@broadcast') return lubyz.readMessages([m.key]);
            if (!lubyz.public && m.key.remoteJid !== global.owner + "@s.whatsapp.net" && !m.key.fromMe && chatUpdate.type === 'notify') return;
            if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return;
            if (global.autoread) lubyz.readMessages([m.key]);

            m = func.smsg(lubyz, m, store);
            require("./james2.js")(lubyz, m, store);
        } catch (err) {
            console.log(err);
        }
    });

    // Group Participant Handler
    lubyz.ev.on('group-participants.update', async (anu) => {
        if (!global.welcome) return;

        let botNumber = await lubyz.decodeJid(lubyz.user.id);
        if (anu.participants.includes(botNumber)) return;

        try {
            let metadata = await lubyz.groupMetadata(anu.id);
            let namagc = metadata.subject;

            for (let num of anu.participants) {
                let ppuser;
                try { ppuser = await lubyz.profilePictureUrl(num, 'image'); } catch { ppuser = 'https://files.catbox.moe/mtvyj5.jpg'; }

                if (anu.action === 'add') {
                    lubyz.sendMessage(anu.id, { text: `Hallo Kak @${num.split("@")[0]} Selamat Datang Di *${namagc}*`, contextInfo: { mentionedJid: [num] } });
                } else if (anu.action === 'remove') {
                    lubyz.sendMessage(anu.id, { text: `@${num.split("@")[0]} Telah Keluar Dari Grup Ini`, contextInfo: { mentionedJid: [num] } });
                } else if (anu.action === 'promote') {
                    lubyz.sendMessage(anu.id, { text: `@${num.split("@")[0]} Telah Menjadi Admin Grup Ini`, contextInfo: { mentionedJid: [num] } });
                } else if (anu.action === 'demote') {
                    lubyz.sendMessage(anu.id, { text: `@${num.split("@")[0]} Telah Diberhentikan Sebagai Admin Grup Ini`, contextInfo: { mentionedJid: [num] } });
                }
            }
        } catch (err) {
            console.log(err);
        }
    });

    lubyz.public = true;

    return lubyz;
}

startSesi();

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ', err);
});
