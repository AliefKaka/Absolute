let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|sshole/i; // tambahin sendiri

async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return;
    let chat = global.db.data.chats[m.chat];
    let user = global.db.data.users[m.sender];
    let isBadword = badwordRegex.exec(m.text);
    
    if (chat.antiToxic && isBadword && m.isGroup) {
        m.reply(`*⚠️ Kata Kata Toxic Terdeteksi ⚠️*

PERINGATAN JANGAN GUNAKAN KATA TOXIC UNTUK KENYAMANAN CHAT!
`);    
        
    }
    return false;
}

module.exports = { before };

//kalau mau fitur kick jalan emang agak ribet harus restart bot gak tau kenapa
