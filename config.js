/*
WHATSAPP BOT BY Janith sadanuwan 
WHATSAPP - 94702429656
SUPPORT GROUP - https://chat.whatsapp.com/K7gQraLjYSh7AR73FNnieg
YOUTUBE - http://youtube.com/janithsadanuwan
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QUEENNILU;;;hvdAmR6b#65EN7sHTXh5oi5f8zHL1p6BjhsTe0Tjx2tjphhd0jDo' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://hiruwa_88kg_user:Dh5PmGdTnCVNA0arppRI6j7HLfv4Y2BV@dpg-cnb9050cmk4c73afalgg-a.frankfurt-postgres.render.com/hiruwa_88kg'

 

// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94702429656'

global.OWNER_NAME = '𝐍𝐨𝐭𝐲 𝐍𝐢𝐥𝐮 𝐌𝐝 💕'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '`ඉන්බොස් එන්න එපෝ බ්ලොක් වෙනෝ`' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "false" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = '𝙽𝙾𝚃𝚈 ɴɪʟᴜ 𝙼𝙳 💞'

global.FOOTER = '𝑵𝒐𝒕𝒚 𝑵𝒊𝒍𝒖 𝑴𝒅 2024'

global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@බලන එකා මෝඩයා🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = '𝙉𝙤𝙩𝙮 𝙉𝙞𝙡𝙪 𝙈𝙙 💕 2024' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/1e63f0ee90304a12767c7.jpg' // Set Alive Logo link 

global.ALIVE_MESSAGE = '' // Set Alive Message

global.MAX_SIZE = '500' // Bot Uloading Max size 

global.ANTI_BAD = true // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = true //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'true' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/K7gQraLjYSh7AR73FNnieg ' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl
/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.ytname = "YT: janithsadanuwan" //ur yt chanel name
global.socialm = "GitHub: janithsadanuwan" //ur github or insta name
global.location = "Srilanka, colombo" //ur location
