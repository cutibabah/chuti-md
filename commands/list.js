/** 

𝗖𝗛𝗨𝗧𝗜-𝗠𝗗 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗖𝗛𝗨𝗧𝗜 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗥𝗨𝗦𝗛
 
 **/











const { france } = require("../framework/france");
const moment = require("moment-timezone");
const { default: axios } = require('axios');
//const conf = require('../set');


france({ nomCom: 'list',
    desc: 'To check list',
    Categorie: 'General',
    reaction: '🇱🇰', 
    fromMe: 'true', 

       
  },
  async (dest, zk, commandeOptions) => {
    const { ms, arg, repondre } = commandeOptions;
    const { start} = new Date().getTime()
    return repondre('*╭────✧𝗖𝗛𝗨𝗧𝗜-𝐌𝐃✧────◆
┃❃╭──────────────
┃❃│ Prefix : . 
┃❃│ 
┃❃│   
┃❃│ Platform : Linux
┃❃ 
┃❃│ Mode : public
┃❃│ Commands : 231  
┃❃│ 
┃❃│ 𝗦𝗜𝗡𝗛𝗔𝗟𝗔 𝗩𝗘𝗥𝗧𝗜𝗢𝗡 නිකුත් වනු ඇට
┃❃╰───────────────
╰─────✧The-𝗥𝗨𝗦𝗛 𝗢𝗪𝗡𝗘𝗥✧─────◆ 
  

*◇ 𝗰𝗵𝘂𝘁𝗶-𝗺𝗱 COMMANDS ◇*

*╭────☉⁠📸⁠⁠IA📸☉⁠⊷* 
*│❒⁠⁠⁠⁠flash* 
*│❒⁠⁠⁠⁠dalle* 
*│❒⁠⁠⁠⁠gpt* 
*│❒⁠⁠⁠⁠gemini*
*╰═════════════⊷*

*╭────☉⁠📸General📸☉⁠⊷* 
*│❒⁠⁠⁠⁠calc* 
*│❒⁠⁠⁠⁠alive* 
*│❒⁠⁠⁠⁠url* 
*│❒⁠⁠⁠⁠wagroup* 
*│❒⁠⁠⁠⁠channel* 
*│❒⁠⁠⁠⁠owner* 
*│❒⁠⁠⁠⁠developer* 
*│❒⁠⁠⁠⁠support* 
*│❒⁠⁠⁠⁠menu* 
*│❒⁠⁠⁠⁠poll* 
*│❒⁠⁠⁠⁠ping* 
*│❒⁠⁠⁠⁠enc* 
*│❒⁠⁠⁠⁠fmd* 
*│❒⁠⁠⁠⁠tempmail* 
*│❒⁠⁠⁠⁠repo* 
*│❒⁠⁠⁠⁠uptime* 
*│❒⁠⁠⁠⁠ss* 
*│❒⁠⁠⁠⁠vv*
*╰═════════════⊷*

*╭────☉⁠📸Fun📸☉⁠⊷* 
*│❒⁠⁠⁠⁠ranime* 
*│❒⁠⁠⁠⁠fancy* 
*│❒⁠⁠⁠⁠rank* 
*│❒⁠⁠⁠⁠toprank*
*╰═════════════⊷*

*╭────☉⁠📸Search📸☉⁠⊷* 
*│❒⁠⁠⁠⁠google* 
*│❒⁠⁠⁠⁠imdb* 
*│❒⁠⁠⁠⁠github* 
*│❒⁠⁠⁠⁠img* 
*│❒⁠⁠⁠⁠define* 
*│❒⁠⁠⁠⁠lyrics* 
*│❒⁠⁠⁠⁠stickersearch* 
*│❒⁠⁠⁠⁠weather* 
*│❒⁠⁠⁠⁠yts* 
*│❒⁠⁠⁠⁠play* 
*│❒⁠⁠⁠⁠video*
*╰═════════════⊷*

*╭────☉⁠📸⁠⁠Conversion📸☉⁠⊷* 
*│❒⁠⁠⁠⁠emomix* 
*│❒⁠⁠⁠⁠sticker* 
*│❒⁠⁠⁠⁠scrop* 
*│❒⁠⁠⁠⁠take* 
*│❒⁠⁠⁠⁠write* 
*│❒⁠⁠⁠⁠photo* 
*│❒⁠⁠⁠⁠trt*
*╰═════════════⊷*

*╭────☉⁠📸Audio-Edit📸☉⁠⊷* 
*│❒⁠⁠⁠⁠deep* 
*│❒⁠⁠⁠⁠bass* 
*│❒⁠⁠⁠⁠reverse* 
*│❒⁠⁠⁠⁠slow* 
*│❒⁠⁠⁠⁠smooth* 
*│❒⁠⁠⁠⁠tempo* 
*│❒⁠⁠⁠⁠nightcore*
*╰═════════════⊷*

*╭────☉⁠⭐⁠⁠Image-Edit📸☉⁠⊷* 
*│❒⁠⁠⁠⁠shit* 
*│❒⁠⁠⁠⁠wasted* 
*│❒⁠⁠⁠⁠wanted* 
*│❒⁠⁠⁠⁠trigger* 
*│❒⁠⁠⁠⁠trash* 
*│❒⁠⁠⁠⁠rip* 
*│❒⁠⁠⁠⁠sepia* 
*│❒⁠⁠⁠⁠rainbow* 
*│❒⁠⁠⁠⁠hitler* 
*│❒⁠⁠⁠⁠invert* 
*│❒⁠⁠⁠⁠jail* 
*│❒⁠⁠⁠⁠affect* 
*│❒⁠⁠⁠⁠beautiful* 
*│❒⁠⁠⁠⁠blur* 
*│❒⁠⁠⁠⁠circle* 
*│❒⁠⁠⁠⁠facepalm* 
*│❒⁠⁠⁠⁠greyscale* 
*│❒⁠⁠⁠⁠joke*
*╰═════════════⊷*

*╭────☉⁠⁠⁠Games⭐⭐⭐☉⁠⊷* 
*│❒⁠⁠⁠⁠riddle* 
*│❒⁠⁠⁠⁠chifumi* 
*│❒⁠⁠⁠⁠quizz*
*╰═════════════⊷*

*╭────☉⁠♻Download📸☉⁠⊷* 
*│❒⁠⁠⁠⁠insta* 
*│❒⁠⁠⁠⁠twitter* 
*│❒⁠⁠⁠⁠tiktok* 
*│❒⁠⁠⁠⁠mediafire* 
*│❒⁠⁠⁠⁠fbdl* 
*│❒⁠⁠⁠⁠fbdl2* 
*│❒⁠⁠⁠⁠apk* 
*│❒⁠⁠⁠⁠ytmp4* 
*│❒⁠⁠⁠⁠ytmp3*
*╰═════════════⊷*

*╭────☉⁠📸Group⭐☉⁠⊷* 
*│❒⁠⁠⁠⁠welcome* 
*│❒⁠⁠⁠⁠goodbye* 
*│❒⁠⁠⁠⁠antipromote* 
*│❒⁠⁠⁠⁠antidemote* 
*│❒⁠⁠⁠⁠tagall* 
*│❒⁠⁠⁠⁠invite* 
*│❒⁠⁠⁠⁠promote* 
*│❒⁠⁠⁠⁠demote* 
*│❒⁠⁠⁠⁠remove* 
*│❒⁠⁠⁠⁠add* 
*│❒⁠⁠⁠⁠del* 
*│❒⁠⁠⁠⁠info* 
*│❒⁠⁠⁠⁠antilink* 
*│❒⁠⁠⁠⁠antibot* 
*│❒⁠⁠⁠⁠group* 
*│❒⁠⁠⁠⁠gname* 
*│❒⁠⁠⁠⁠gdesc* 
*│❒⁠⁠⁠⁠revoke* 
*│❒⁠⁠⁠⁠gpp* 
*│❒⁠⁠⁠⁠hidetag* 
*│❒⁠⁠⁠⁠automute* 
*│❒⁠⁠⁠⁠autounmute* 
*│❒⁠⁠⁠⁠fkick* 
*│❒⁠⁠⁠⁠nsfw* 
*│❒⁠⁠⁠⁠antiword* 
*│❒⁠⁠⁠⁠quote* 
*│❒⁠⁠⁠⁠left* 
*│❒⁠⁠⁠⁠kickall* 
*│❒⁠⁠⁠⁠onlyadmin* 
*│❒⁠⁠⁠⁠warn*
*╰═════════════⊷*

*╭────☉⁠⭐⁠⁠Mods📸☉⁠⊷* 
*│❒⁠⁠⁠⁠left* 
*│❒⁠⁠⁠⁠tgs* 
*│❒⁠⁠⁠⁠crew* 
*│❒⁠⁠⁠⁠join* 
*│❒⁠⁠⁠⁠jid* 
*│❒⁠⁠⁠⁠sudo* 
*│❒⁠⁠⁠⁠mention* 
*│❒⁠⁠⁠⁠reboot*
*╰═════════════⊷*

*╭────☉⁠⭐⁠⁠Hentai📸☉⁠⊷* 
*│❒⁠⁠⁠⁠hwaifu* 
*│❒⁠⁠⁠⁠trap* 
*│❒⁠⁠⁠⁠hneko* 
*│❒⁠⁠⁠⁠bj* 
*│❒⁠⁠⁠⁠ass* 
*│❒⁠⁠⁠⁠fuck* 
*│❒⁠⁠⁠⁠pussy* 
*│❒⁠⁠⁠⁠dick* 
*│❒⁠⁠⁠⁠porngif* 
*│❒⁠⁠⁠⁠pubg*
*╰═════════════⊷*

*╭────☉⁠♻Wallpapers♻☉⁠⊷* 
*│❒⁠⁠⁠⁠messi* 
*│❒⁠⁠⁠⁠car* 
*│❒⁠⁠⁠⁠enemy* 
*│❒⁠⁠⁠⁠random* 
*│❒⁠⁠⁠⁠dog* 
*│❒⁠⁠⁠⁠cr7* 
*│❒⁠⁠⁠⁠blackpink* 
*│❒⁠⁠⁠⁠bike* 
*│❒⁠⁠⁠⁠aesthetic* 
*│❒⁠⁠⁠⁠islamic*
*╰═════════════⊷*

*╭────☉⁠♻⁠⁠heroku♻☉⁠⊷* 
*│❒⁠⁠⁠⁠setvar* 
*│❒⁠⁠⁠⁠allvar* 
*│❒⁠⁠⁠⁠getvar*
*╰═════════════⊷*

*╭────☉⁠🥏Logo🪀☉⁠⊷* 
*│❒⁠⁠⁠⁠hacker* 
*│❒⁠⁠⁠⁠sand* 
*│❒⁠⁠⁠⁠dragonball* 
*│❒⁠⁠⁠⁠naruto* 
*│❒⁠⁠⁠⁠didong* 
*│❒⁠⁠⁠⁠night* 
*│❒⁠⁠⁠⁠sunset* 
*│❒⁠⁠⁠⁠chocolate* 
*│❒⁠⁠⁠⁠mechanical* 
*│❒⁠⁠⁠⁠rain* 
*│❒⁠⁠⁠⁠cloth* 
*│❒⁠⁠⁠⁠avenger* 
*│❒⁠⁠⁠⁠water* 
*│❒⁠⁠⁠⁠1917* 
*│❒⁠⁠⁠⁠graffiti* 
*│❒⁠⁠⁠⁠thunder* 
*│❒⁠⁠⁠⁠boom* 
*│❒⁠⁠⁠⁠cat* 
*│❒⁠⁠⁠⁠whitegold* 
*│❒⁠⁠⁠⁠lightglow* 
*│❒⁠⁠⁠⁠thor* 
*│❒⁠⁠⁠⁠neon* 
*│❒⁠⁠⁠⁠purple* 
*│❒⁠⁠⁠⁠gold* 
*│❒⁠⁠⁠⁠arena* 
*│❒⁠⁠⁠⁠incandescent* 
*│❒⁠⁠⁠⁠child* 
*│❒⁠⁠⁠⁠typo* 
*│❒⁠⁠⁠⁠light* 
*│❒⁠⁠⁠⁠steel* 
*│❒⁠⁠⁠⁠sunlight* 
*│❒⁠⁠⁠⁠frozen* 
*│❒⁠⁠⁠⁠magma* 
*│❒⁠⁠⁠⁠leaves*
*╰═════════════⊷*

*╭────☉⁠🪀⁠⁠WhatsApp📸☉⁠⊷* 
*│❒⁠⁠⁠⁠lastseen* 
*│❒⁠⁠⁠⁠online* 
*│❒⁠⁠⁠⁠mydp* 
*│❒⁠⁠⁠⁠mystatus* 
*│❒⁠⁠⁠⁠groupadd* 
*│❒⁠⁠⁠⁠privacy*
*╰═════════════⊷*

*╭────☉⁠💌User🪄☉⁠⊷* 
*│❒⁠⁠⁠⁠fullpp* 
*│❒⁠⁠⁠⁠block* 
*│❒⁠⁠⁠⁠unblock* 
*│❒⁠⁠⁠⁠send* 
*│❒⁠⁠⁠⁠fact* 
*│❒⁠⁠⁠⁠quotes* 
*│❒⁠⁠⁠⁠whois* 
*│❒⁠⁠⁠⁠getpp*
*╰═════════════⊷*

*╭────☉⁠💌⁠⁠OWNER📸☉⁠⊷* 
*│❒⁠⁠⁠⁠ban* 
*│❒⁠⁠⁠⁠bangroup*
*╰═════════════⊷*

*╭────☉⁠💌⁠⁠Reaction💌☉⁠⊷* 
*│❒⁠⁠⁠⁠bully* 
*│❒⁠⁠⁠⁠cuddle* 
*│❒⁠⁠⁠⁠cry* 
*│❒⁠⁠⁠⁠hug* 
*│❒⁠⁠⁠⁠awoo* 
*│❒⁠⁠⁠⁠kiss* 
*│❒⁠⁠⁠⁠lick* 
*│❒⁠⁠⁠⁠pat* 
*│❒⁠⁠⁠⁠smug* 
*│❒⁠⁠⁠⁠bonk* 
*│❒⁠⁠⁠⁠yeet* 
*│❒⁠⁠⁠⁠blush* 
*│❒⁠⁠⁠⁠smile* 
*│❒⁠⁠⁠⁠wave* 
*│❒⁠⁠⁠⁠highfive* 
*│❒⁠⁠⁠⁠handhold* 
*│❒⁠⁠⁠⁠nom* 
*│❒⁠⁠⁠⁠bite* 
*│❒⁠⁠⁠⁠glomp* 
*│❒⁠⁠⁠⁠slap* 
*│❒⁠⁠⁠⁠kill* 
*│❒⁠⁠⁠⁠kick* 
*│❒⁠⁠⁠⁠happy* 
*│❒⁠⁠⁠⁠wink* 
*│❒⁠⁠⁠⁠poke* 
*│❒⁠⁠⁠⁠dance* 
*│❒⁠⁠⁠⁠cringe*
*╰═════════════⊷*

*╭────☉⁠💌stickcmd📸☉⁠⊷* 
*│❒⁠⁠⁠⁠setcmd* 
*│❒⁠⁠⁠⁠delcmd* 
*│❒⁠⁠⁠⁠allcmd*
*╰═════════════⊷*

*╭────☉💌tts⭐☉⁠⊷* 
*│❒⁠⁠⁠⁠dit* 
*│❒⁠⁠⁠⁠itta* 
*│❒⁠⁠⁠⁠say*
*╰═════════════⊷*

*╭────☉⁠💌⁠⁠Weeb😋☉⁠⊷* 
*│❒⁠⁠⁠⁠waifu* 
*│❒⁠⁠⁠⁠neko* 
*│❒⁠⁠⁠⁠shinobu* 
*│❒⁠⁠⁠⁠megumin* 
*│❒⁠⁠⁠⁠cosplay* 
*│❒⁠⁠⁠⁠couplepp*
*╰═════════════⊷*

◇ *THE FLASH MULTI DEVICE* ◇

   *Released: 2024*📸
   
 _Thanks For choosing CHUTI-MD_

  Created by *RUSH ©²0²⁴* 
  
     *KEEP USING Chuti-md*!!*\n ```' + 2000 + '``` *ms*') 
    const { end } = new Date().getTime()
    await zok.sendMessage('*╭────✧𝗖𝗛𝗨𝗧𝗜-𝐌𝐃✧────◆
┃❃╭──────────────
┃❃│ Prefix : . 
┃❃│ 
┃❃│   
┃❃│ Platform : Linux
┃❃ 
┃❃│ Mode : public
┃❃│ Commands : 231  
┃❃│ 
┃❃│ 𝗦𝗜𝗡𝗛𝗔𝗟𝗔 𝗩𝗘𝗥𝗧𝗜𝗢𝗡 නිකුත් වනු ඇට
┃❃╰───────────────
╰─────✧The-𝗥𝗨𝗦𝗛 𝗢𝗪𝗡𝗘𝗥✧─────◆ 
  

*◇ 𝗰𝗵𝘂𝘁𝗶-𝗺𝗱 COMMANDS ◇*

*╭────☉⁠📸⁠⁠IA📸☉⁠⊷* 
*│❒⁠⁠⁠⁠flash* 
*│❒⁠⁠⁠⁠dalle* 
*│❒⁠⁠⁠⁠gpt* 
*│❒⁠⁠⁠⁠gemini*
*╰═════════════⊷*

*╭────☉⁠📸General📸☉⁠⊷* 
*│❒⁠⁠⁠⁠calc* 
*│❒⁠⁠⁠⁠alive* 
*│❒⁠⁠⁠⁠url* 
*│❒⁠⁠⁠⁠wagroup* 
*│❒⁠⁠⁠⁠channel* 
*│❒⁠⁠⁠⁠owner* 
*│❒⁠⁠⁠⁠developer* 
*│❒⁠⁠⁠⁠support* 
*│❒⁠⁠⁠⁠menu* 
*│❒⁠⁠⁠⁠poll* 
*│❒⁠⁠⁠⁠ping* 
*│❒⁠⁠⁠⁠enc* 
*│❒⁠⁠⁠⁠fmd* 
*│❒⁠⁠⁠⁠tempmail* 
*│❒⁠⁠⁠⁠repo* 
*│❒⁠⁠⁠⁠uptime* 
*│❒⁠⁠⁠⁠ss* 
*│❒⁠⁠⁠⁠vv*
*╰═════════════⊷*

*╭────☉⁠📸Fun📸☉⁠⊷* 
*│❒⁠⁠⁠⁠ranime* 
*│❒⁠⁠⁠⁠fancy* 
*│❒⁠⁠⁠⁠rank* 
*│❒⁠⁠⁠⁠toprank*
*╰═════════════⊷*

*╭────☉⁠📸Search📸☉⁠⊷* 
*│❒⁠⁠⁠⁠google* 
*│❒⁠⁠⁠⁠imdb* 
*│❒⁠⁠⁠⁠github* 
*│❒⁠⁠⁠⁠img* 
*│❒⁠⁠⁠⁠define* 
*│❒⁠⁠⁠⁠lyrics* 
*│❒⁠⁠⁠⁠stickersearch* 
*│❒⁠⁠⁠⁠weather* 
*│❒⁠⁠⁠⁠yts* 
*│❒⁠⁠⁠⁠play* 
*│❒⁠⁠⁠⁠video*
*╰═════════════⊷*

*╭────☉⁠📸⁠⁠Conversion📸☉⁠⊷* 
*│❒⁠⁠⁠⁠emomix* 
*│❒⁠⁠⁠⁠sticker* 
*│❒⁠⁠⁠⁠scrop* 
*│❒⁠⁠⁠⁠take* 
*│❒⁠⁠⁠⁠write* 
*│❒⁠⁠⁠⁠photo* 
*│❒⁠⁠⁠⁠trt*
*╰═════════════⊷*

*╭────☉⁠📸Audio-Edit📸☉⁠⊷* 
*│❒⁠⁠⁠⁠deep* 
*│❒⁠⁠⁠⁠bass* 
*│❒⁠⁠⁠⁠reverse* 
*│❒⁠⁠⁠⁠slow* 
*│❒⁠⁠⁠⁠smooth* 
*│❒⁠⁠⁠⁠tempo* 
*│❒⁠⁠⁠⁠nightcore*
*╰═════════════⊷*

*╭────☉⁠⭐⁠⁠Image-Edit📸☉⁠⊷* 
*│❒⁠⁠⁠⁠shit* 
*│❒⁠⁠⁠⁠wasted* 
*│❒⁠⁠⁠⁠wanted* 
*│❒⁠⁠⁠⁠trigger* 
*│❒⁠⁠⁠⁠trash* 
*│❒⁠⁠⁠⁠rip* 
*│❒⁠⁠⁠⁠sepia* 
*│❒⁠⁠⁠⁠rainbow* 
*│❒⁠⁠⁠⁠hitler* 
*│❒⁠⁠⁠⁠invert* 
*│❒⁠⁠⁠⁠jail* 
*│❒⁠⁠⁠⁠affect* 
*│❒⁠⁠⁠⁠beautiful* 
*│❒⁠⁠⁠⁠blur* 
*│❒⁠⁠⁠⁠circle* 
*│❒⁠⁠⁠⁠facepalm* 
*│❒⁠⁠⁠⁠greyscale* 
*│❒⁠⁠⁠⁠joke*
*╰═════════════⊷*

*╭────☉⁠⁠⁠Games⭐⭐⭐☉⁠⊷* 
*│❒⁠⁠⁠⁠riddle* 
*│❒⁠⁠⁠⁠chifumi* 
*│❒⁠⁠⁠⁠quizz*
*╰═════════════⊷*

*╭────☉⁠♻Download📸☉⁠⊷* 
*│❒⁠⁠⁠⁠insta* 
*│❒⁠⁠⁠⁠twitter* 
*│❒⁠⁠⁠⁠tiktok* 
*│❒⁠⁠⁠⁠mediafire* 
*│❒⁠⁠⁠⁠fbdl* 
*│❒⁠⁠⁠⁠fbdl2* 
*│❒⁠⁠⁠⁠apk* 
*│❒⁠⁠⁠⁠ytmp4* 
*│❒⁠⁠⁠⁠ytmp3*
*╰═════════════⊷*

*╭────☉⁠📸Group⭐☉⁠⊷* 
*│❒⁠⁠⁠⁠welcome* 
*│❒⁠⁠⁠⁠goodbye* 
*│❒⁠⁠⁠⁠antipromote* 
*│❒⁠⁠⁠⁠antidemote* 
*│❒⁠⁠⁠⁠tagall* 
*│❒⁠⁠⁠⁠invite* 
*│❒⁠⁠⁠⁠promote* 
*│❒⁠⁠⁠⁠demote* 
*│❒⁠⁠⁠⁠remove* 
*│❒⁠⁠⁠⁠add* 
*│❒⁠⁠⁠⁠del* 
*│❒⁠⁠⁠⁠info* 
*│❒⁠⁠⁠⁠antilink* 
*│❒⁠⁠⁠⁠antibot* 
*│❒⁠⁠⁠⁠group* 
*│❒⁠⁠⁠⁠gname* 
*│❒⁠⁠⁠⁠gdesc* 
*│❒⁠⁠⁠⁠revoke* 
*│❒⁠⁠⁠⁠gpp* 
*│❒⁠⁠⁠⁠hidetag* 
*│❒⁠⁠⁠⁠automute* 
*│❒⁠⁠⁠⁠autounmute* 
*│❒⁠⁠⁠⁠fkick* 
*│❒⁠⁠⁠⁠nsfw* 
*│❒⁠⁠⁠⁠antiword* 
*│❒⁠⁠⁠⁠quote* 
*│❒⁠⁠⁠⁠left* 
*│❒⁠⁠⁠⁠kickall* 
*│❒⁠⁠⁠⁠onlyadmin* 
*│❒⁠⁠⁠⁠warn*
*╰═════════════⊷*

*╭────☉⁠⭐⁠⁠Mods📸☉⁠⊷* 
*│❒⁠⁠⁠⁠left* 
*│❒⁠⁠⁠⁠tgs* 
*│❒⁠⁠⁠⁠crew* 
*│❒⁠⁠⁠⁠join* 
*│❒⁠⁠⁠⁠jid* 
*│❒⁠⁠⁠⁠sudo* 
*│❒⁠⁠⁠⁠mention* 
*│❒⁠⁠⁠⁠reboot*
*╰═════════════⊷*

*╭────☉⁠⭐⁠⁠Hentai📸☉⁠⊷* 
*│❒⁠⁠⁠⁠hwaifu* 
*│❒⁠⁠⁠⁠trap* 
*│❒⁠⁠⁠⁠hneko* 
*│❒⁠⁠⁠⁠bj* 
*│❒⁠⁠⁠⁠ass* 
*│❒⁠⁠⁠⁠fuck* 
*│❒⁠⁠⁠⁠pussy* 
*│❒⁠⁠⁠⁠dick* 
*│❒⁠⁠⁠⁠porngif* 
*│❒⁠⁠⁠⁠pubg*
*╰═════════════⊷*

*╭────☉⁠♻Wallpapers♻☉⁠⊷* 
*│❒⁠⁠⁠⁠messi* 
*│❒⁠⁠⁠⁠car* 
*│❒⁠⁠⁠⁠enemy* 
*│❒⁠⁠⁠⁠random* 
*│❒⁠⁠⁠⁠dog* 
*│❒⁠⁠⁠⁠cr7* 
*│❒⁠⁠⁠⁠blackpink* 
*│❒⁠⁠⁠⁠bike* 
*│❒⁠⁠⁠⁠aesthetic* 
*│❒⁠⁠⁠⁠islamic*
*╰═════════════⊷*

*╭────☉⁠♻⁠⁠heroku♻☉⁠⊷* 
*│❒⁠⁠⁠⁠setvar* 
*│❒⁠⁠⁠⁠allvar* 
*│❒⁠⁠⁠⁠getvar*
*╰═════════════⊷*

*╭────☉⁠🥏Logo🪀☉⁠⊷* 
*│❒⁠⁠⁠⁠hacker* 
*│❒⁠⁠⁠⁠sand* 
*│❒⁠⁠⁠⁠dragonball* 
*│❒⁠⁠⁠⁠naruto* 
*│❒⁠⁠⁠⁠didong* 
*│❒⁠⁠⁠⁠night* 
*│❒⁠⁠⁠⁠sunset* 
*│❒⁠⁠⁠⁠chocolate* 
*│❒⁠⁠⁠⁠mechanical* 
*│❒⁠⁠⁠⁠rain* 
*│❒⁠⁠⁠⁠cloth* 
*│❒⁠⁠⁠⁠avenger* 
*│❒⁠⁠⁠⁠water* 
*│❒⁠⁠⁠⁠1917* 
*│❒⁠⁠⁠⁠graffiti* 
*│❒⁠⁠⁠⁠thunder* 
*│❒⁠⁠⁠⁠boom* 
*│❒⁠⁠⁠⁠cat* 
*│❒⁠⁠⁠⁠whitegold* 
*│❒⁠⁠⁠⁠lightglow* 
*│❒⁠⁠⁠⁠thor* 
*│❒⁠⁠⁠⁠neon* 
*│❒⁠⁠⁠⁠purple* 
*│❒⁠⁠⁠⁠gold* 
*│❒⁠⁠⁠⁠arena* 
*│❒⁠⁠⁠⁠incandescent* 
*│❒⁠⁠⁠⁠child* 
*│❒⁠⁠⁠⁠typo* 
*│❒⁠⁠⁠⁠light* 
*│❒⁠⁠⁠⁠steel* 
*│❒⁠⁠⁠⁠sunlight* 
*│❒⁠⁠⁠⁠frozen* 
*│❒⁠⁠⁠⁠magma* 
*│❒⁠⁠⁠⁠leaves*
*╰═════════════⊷*

*╭────☉⁠🪀⁠⁠WhatsApp📸☉⁠⊷* 
*│❒⁠⁠⁠⁠lastseen* 
*│❒⁠⁠⁠⁠online* 
*│❒⁠⁠⁠⁠mydp* 
*│❒⁠⁠⁠⁠mystatus* 
*│❒⁠⁠⁠⁠groupadd* 
*│❒⁠⁠⁠⁠privacy*
*╰═════════════⊷*

*╭────☉⁠💌User🪄☉⁠⊷* 
*│❒⁠⁠⁠⁠fullpp* 
*│❒⁠⁠⁠⁠block* 
*│❒⁠⁠⁠⁠unblock* 
*│❒⁠⁠⁠⁠send* 
*│❒⁠⁠⁠⁠fact* 
*│❒⁠⁠⁠⁠quotes* 
*│❒⁠⁠⁠⁠whois* 
*│❒⁠⁠⁠⁠getpp*
*╰═════════════⊷*

*╭────☉⁠💌⁠⁠OWNER📸☉⁠⊷* 
*│❒⁠⁠⁠⁠ban* 
*│❒⁠⁠⁠⁠bangroup*
*╰═════════════⊷*

*╭────☉⁠💌⁠⁠Reaction💌☉⁠⊷* 
*│❒⁠⁠⁠⁠bully* 
*│❒⁠⁠⁠⁠cuddle* 
*│❒⁠⁠⁠⁠cry* 
*│❒⁠⁠⁠⁠hug* 
*│❒⁠⁠⁠⁠awoo* 
*│❒⁠⁠⁠⁠kiss* 
*│❒⁠⁠⁠⁠lick* 
*│❒⁠⁠⁠⁠pat* 
*│❒⁠⁠⁠⁠smug* 
*│❒⁠⁠⁠⁠bonk* 
*│❒⁠⁠⁠⁠yeet* 
*│❒⁠⁠⁠⁠blush* 
*│❒⁠⁠⁠⁠smile* 
*│❒⁠⁠⁠⁠wave* 
*│❒⁠⁠⁠⁠highfive* 
*│❒⁠⁠⁠⁠handhold* 
*│❒⁠⁠⁠⁠nom* 
*│❒⁠⁠⁠⁠bite* 
*│❒⁠⁠⁠⁠glomp* 
*│❒⁠⁠⁠⁠slap* 
*│❒⁠⁠⁠⁠kill* 
*│❒⁠⁠⁠⁠kick* 
*│❒⁠⁠⁠⁠happy* 
*│❒⁠⁠⁠⁠wink* 
*│❒⁠⁠⁠⁠poke* 
*│❒⁠⁠⁠⁠dance* 
*│❒⁠⁠⁠⁠cringe*
*╰═════════════⊷*

*╭────☉⁠💌stickcmd📸☉⁠⊷* 
*│❒⁠⁠⁠⁠setcmd* 
*│❒⁠⁠⁠⁠delcmd* 
*│❒⁠⁠⁠⁠allcmd*
*╰═════════════⊷*

*╭────☉💌tts⭐☉⁠⊷* 
*│❒⁠⁠⁠⁠dit* 
*│❒⁠⁠⁠⁠itta* 
*│❒⁠⁠⁠⁠say*
*╰═════════════⊷*

*╭────☉⁠💌⁠⁠Weeb😋☉⁠⊷* 
*│❒⁠⁠⁠⁠waifu* 
*│❒⁠⁠⁠⁠neko* 
*│❒⁠⁠⁠⁠shinobu* 
*│❒⁠⁠⁠⁠megumin* 
*│❒⁠⁠⁠⁠cosplay* 
*│❒⁠⁠⁠⁠couplepp*
*╰═════════════⊷*

◇ *THE FLASH MULTI DEVICE* ◇

   *Released: 2024*📸
   
 _Thanks For choosing CHUTI-MD_

  Created by *RUSH ©²0²⁴* 
  
     *KEEP USING Chuti-md*!*\n ```' + (end - start) + '``` *ms*')
  }
)
