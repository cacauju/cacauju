const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./language')
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Zeus29cm\n' 
            + 'ORG: ❲████████████▒▒❳ 90% ZeusWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=556993899391:+55 69 9389-9391\n' 
            + 'END:VCARD' 
prefix = '#'
name = "Zeus"
blocked = []   
limitawal = 30
memberlimit = 3
cr = '_Legion of Gods 神 🇧🇱_'

/******* premium**********/
const userpremium = ["556993899391@s.whatsapp.net","553199507778@s.whatsapp.net"] //ubah nomer kalian
/******* zeus gostoso**********/
const ownerNumber = ["556993899391@s.whatsapp.net","556993899391@s.whatsapp.net"] 
const vipNumber = ["556993899391@s.whatsapp.net","556993772060@s.whatsapp.net"]
/************************************/ 
const BarBarKey = 'IDxO1TFYnKADlX4pxcHa' // 
const VhtearKey = 'PUNYARAMLAN' // YANG DI YOUTUBE
const TobzKey = 'BotWeA' // JANGAN MAU ENAK DOANG
const XteamKey = 'RAMLANGANS' // APIKEY XTEAM BELI SENDIRI:V
const LolHuman = 'YOUR_APIKEY'
/*
/*********** DATABASE LEVEL********/
ahb = 3 
ahc = 5 
/*********** DATABASE LEVEL********/
       
/*********** LOAD FILE ***********/
const { regras } = require('./menu/regras')
const { creditos } = require('./menu/creditos')
const { menus } = require('./menu/menus')
const { menu2 } = require('./menu/menu2')
const { comprarbot } = require('./menu/comprarbot')
const { menuadm } = require('./menu/menuadm')
const { menuvip } = require('./menu/menuvip')
const { menuzeus } = require('./menu/menuzeus')
const { menuprem } = require('./menu/menuprem')
const { evento } = require('./outros/evento')
const videonye = JSON.parse(fs.readFileSync('./add/video.json'))
const audionye = JSON.parse(fs.readFileSync('./add/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./add/image.json'))
const setiker = JSON.parse(fs.readFileSync('./add/stik.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _premiun = JSON.parse(fs.readFileSync('./database/user/premiun.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const zeusinte = JSON.parse(fs.readFileSync('./database/bot/zeusinte.json'))
const antifake = JSON.parse(fs.readFileSync('./database/json/antifake.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json')) 
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))


// OUTRAS
        const double = Math.floor(Math.random() * 2) + 1

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.subscribe','white'),color('YOU','red'),color('TUBE','white'),color('ampibi gaming','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		const mdata = await client.groupMetadata(anu.jid)
		if(antifake.includes(anu.jid)) {
			if (anu.action == 'add'){
				num = anu.participants[0]
				if(!num.split('@')[0].startsWith(55)) {
					client.sendMessage(mdata.id, 'Não é permitido números internacionais, por isso você será removido😞\n\n International numbers are not allowed, so you will be removed😥', MessageType.text)
					setTimeout(async function () {
						client.groupRemove(mdata.id, [num])
					}, 1000)
				}
			}
		}
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePictur(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3YTt12MyS0myUfGwYP8rxDNmVwkQfzKcKQ&usqp=CAU'
				}
				teks = `( ꈍᴗꈍ) Olá @${num.split('@')[0]} Seja Bem-Vindo(a) ao grupo 💕`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remo') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePictur(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `q`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            const apiKey = 'API-KEY' // apikey you can get it at https://mhankbarbar.moe
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
			const time2 = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
			const timi2 = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu2 = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase() 
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender) 
            
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isZeusinte = isGroup ? zeusinte.includes(from) : false
            const isAntiFake = isGroup ? antifake.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender) 
			const isVip = vipNumber.includes(sender)
			const isPrem = userpremium.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
			
			
	        //Sistema de nivel
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 1) + 100
                const requiredXp = 1000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //sistema de check de limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//Sistema de limite
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }

      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        } 
            if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('_Como você é ademir não irei te remover!_')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*B.A.N.I.D.O*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 2000)
	}
	
	if (messagesC.includes("fdp")){
			client.updatePresence(from, Presence.composing)
			reply("sim, paguei sua mãe pra te comer e vc nasceu")
	}
	
		if (messagesC.includes("corno")){
			client.updatePresence(from, Presence.composing)
			reply("o teu pai virou corno assim que sua mãe engravidou de você")
	}
	
		if (messagesC.includes("tnc")){
			client.updatePresence(from, Presence.composing)
			reply("denovo?😏")
	}
	
		if (messagesC.includes("vsfd")){
			client.updatePresence(from, Presence.composing)
			reply("só se você tbm for🙈")
	}
	
		if (messagesC.includes("cade o bot")){
			client.updatePresence(from, Presence.composing)
			reply("oie lindo")
	}
	
		if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			reply("oi")
	} 
	
	if (messagesC.includes("oi")){
			client.updatePresence(from, Presence.composing)
			reply("oii amor da minha vida❤️")
	}
	
	
	   // Barra de nível 
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 3000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*10))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			
			
			/*[-- function rank --]*/
			const levelRole = getLevelingLevel(sender)
   	     var role = 'SEM RANK'
   	     if (levelRole <= 3) {
   	         role = 'GHOST'
   	     } else if (levelRole <= 5) {
   	         role = 'GHOST II'
   	     } else if (levelRole <= 7) {
   	         role = 'MEMBRO'
   	     } else if (levelRole <= 8) {
   	         role = 'MEMBRO II'
   	     } else if (levelRole <= 9) {
   	         role = 'MEMBRO III'
   	     } else if (levelRole <= 10) {
   	         role = 'GADO'
   	     } else if (levelRole <= 11) {
   	         role = 'GADO II'
   	     } else if (levelRole <= 12) {
   	         role = 'GADO III'
   	     } else if (levelRole <= 13) {
   	         role = 'GADO III'
   	     } else if (levelRole <= 14) {
   	         role = 'GADO IV'
   	     } else if (levelRole <= 14) {
   	         role = 'MEMBRO ATIVO'
   	     } else if (levelRole <= 15) {
   	         role = 'ADOTADO I'
   	     } else if (levelRole <= 16) {
   	         role = 'ADOTADO II'
   	     } else if (levelRole <= 17) {
   	         role = 'ADOTADO III'
   	     } else if (levelRole <= 18) {
   	         role = 'ADOTADO IV'
   	     } else if (levelRole <= 19) {
   	         role = 'ADOTADO V'
   	     } else if (levelRole <= 20) {
   	         role = 'FILHO DO ZEUS'
   	     } else if (levelRole <= 21) {
   	         role = 'ATIVASSO I'
   	     } else if (levelRole <= 22) {
   	         role = 'ATIVASSO II'
   	     } else if (levelRole <= 23) {
   	         role = 'ATIVASSO III'
   	     } else if (levelRole <= 24) {
   	         role = 'ATIVASSO IV'
   	     } else if (levelRole <= 25) {
   	         role = 'ATIVASSO V'
   	     } else if (levelRole <= 26) {
   	         role = 'NOOB'
   	     } else if (levelRole <= 27) {
   	         role = 'NOOB II'
   	     } else if (levelRole <= 28) {
   	         role = 'NOOB III'
   	     } else if (levelRole <= 29) {
   	         role = 'NOOB IV'
   	     } else if (levelRole <= 30) {
   	         role = 'SUPREMO'
   	     }
   

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {
				case 'mutual6':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break 
            case 'casal':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = 'O amor vale apena, só basta querer que aconteça💕 Seu par perfeito é o(a)'
						for(i = 0; i < 1; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += ` @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
            case 'rankgay':
						try{
						if (!isGroup) return reply(ind.groupo())
						d = []
						teks = '🏳️‍🌈 𝑹𝒂𝒏𝒌 𝒅𝒐𝒔 𝒎𝒂𝒊𝒔 𝒗𝒊𝒂𝒅𝒊𝒏𝒉𝒐𝒔 🏳️‍🌈\n'
						for(i = 0; i < 5; i++) {
						r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
						teks += `🌈✗ @${groupMembers[r].jid.split('@')[0]}\n`
						d.push(groupMembers[r].jid)
						}
						mentions(teks, d, true)
						} catch (e) {
						console.log(e)
						reply('Deu erro, tente novamente :/')
						}
						break
case 'matar':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				    reply(ind.matar())
					rate = body.slice(1)
					const ma =['Você é um psicopata!! Matou o(a) jovem a facadas 🔪', 'Você é um assassino silencioso, você matou esse(a) jovem asfixiado', 'Assassino barulhento, entrou na casa dele e descarregou um pente todo...🔫📢']
					const am = ma[Math.floor(Math.random() * ma.length)] 
					tesk = am
					client.sendMessage(from, tesk, text, { quoted: mek})
					break
				case 'transfer6':
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6993899391@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'buylimit6':
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
		case 'perfil6':
    				client.updatePresence(from, Presence.composing)
					if (!isRegistered) return reply(ind.noregis())
    				try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_Seu perfil_* 」\n│• *Nome:* ${pushname}\n│• *Registrado:* √\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buffer = await getBuffer(profil)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break 
				case 'totaluser':
					client.updatePresence(from, Presence.composing) 
				  if (!isOwner) return reply(ind.ownerg()) 
					teks = `╭────「 *TOTAL USER ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
			case 'happymod6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender) 
			break

                                case 'antilinkgrupo':

          if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('digite 1 para ativar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Mas já ativaram isso? 🤔')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Ativado!')
						client.sendMessage(from,`Atenção a todos os membros deste grupo, o anti-link de grupos está ativo, Caso você enviar um link de alguem grupo será removido!`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('Anti-link de grupos foi desativado!')
						var ini = anti.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply('Desativar grupo anti-link com sucesso neste grupo ✔️')
					} else {
						reply('1 para ativar, 0 para desativar ')
					}
			break
                case 'nangis6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'blowjob6':
				if (!isRegistered) return reply(ind.noregis())
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'beijar':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'neko':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
					case 'abraçar':
				if (!isRegistered) return reply(ind.noregis())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'boquete':
				if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
				if (!isRegistered) return reply(ind.noregis())
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'beijar2':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'hentaifig':
				if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
				if (!isRegistered) return reply(ind.noregis())
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                    case 'dengo':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'lolifig':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'animecry':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                      case 'qrcode6':
				if (!isRegistered) return reply(ind.noregis())
				
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, '𝐌𝐚𝐬𝐮??𝐚𝐧 𝐓𝐞𝐤𝐬/𝐔𝐫𝐥 𝐘𝐚𝐧𝐠 𝐈𝐧𝐠𝐢𝐧 𝐃𝐢 𝐁𝐮𝐚𝐭 𝐐𝐑', text, {quoted: mek})
					const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, buff, image, {quoted: mek})
					
					break
                case 'ninjalogo6':
				if (!isRegistered) return reply(ind.noregis())
                      if (args.length < 1) return reply('Teks nya mana?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(ind.wait())
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}&apikey=BotWeA`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})

                      break
                case 'naruto':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
                case 'minato':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'boruto':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'hinata':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
				case 'sasuke':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'rize':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'itori':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'akira':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'kurumi':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
					case 'miku':
				if (!isGroup) return reply(ind.groupo())
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply(ind.wait())
			    buffer = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${no}&msg=${bg}`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*Toma ai lindor'})
					break
                case 'nekonime6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Cintai nekonime'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Error Kak!!'})
						reply('❌ *ERROR* ❌')
					}
					await limitAdd(sender)
					break
                case 'kpop6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                                        reply(ind.wait())
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                                        if (anu.error) return reply(anu.error)
                                        buffer = await getBuffer(anu.image)
                                        randomkpop = `*${anu.desc}`
                                        client.sendMessage(from, buffer, image, {quoted: mek, caption: randomkpop})
                                        await limitAdd(sender)
                                        break
				case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis()) 
				if (!isGroup) return reply(ind.groupo())
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp4`, quoted: mek}) 
					break
                         case 'play':   
              if (!isGroup) return reply(ind.groupo())
	          if (!isRegistered) return reply(ind.noregis())
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error) 
               client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
                 infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
                buffer = await getBuffer(anu.result.thumbnail) 
                lagu = await getBuffer(anu.result.url_audio) 
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp4':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
				if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
					if (args.length < 1) return reply('Cade o Url?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'}) 
					client.sendMessage(from, '*Estou fazendo o download, aguarde um momento! ♻️*',MessageType.text, { quoted: mek} )
					if (anu.error) return reply(anu.error)
					
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					case 'porn':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
					data = await fetchJson(`https://api.lolhuman.xyz/api/pornhub?apikey=e5d9be2f49006382730e8e8d&url=${args[0]}`, {method: 'get'}) 
					hasil = `${data.title}`
					reply(hasil)
					break
				case 'limit6':
				   if (!isRegistered) return reply(ind.noregis())
				   checkLimit(sender)
					break
					case 'listonline': 
        		if (!isGroupAdmins) return reply(ind.admin())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'Membros onlines:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
					case 'teste':
					if (!isRegistered) return reply(ind.noregis())
					
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media4.giphy.com/media/hhHcFH0xAduCs/giphy.gif?cid=82a1493bheen0lbgvio6qxk6w5aglre0u917rqwgef475dg9&rid=giphy.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					
					break
                case 'beritahoax6':
                     if (!isRegistered) return reply(ind.noregis())
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
					case 'ppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Envie uma imagem com a legenda *${prefix}ppbot*`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Obg pelo novo perfil 😗')
					break 
					case 'brainly6':
					if (!isRegistered) return reply(ind.noregis())
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ JAWABAN:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bcgc6':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					var nomor = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 TRANSMISSÃO 」*\n\nSla : ${groupName}\nSLA2 : wa.me/${(sender.split('@')[0])}\nSla3 : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 TRANSMISSÃO 」*\n\nSla : ${groupName}\nSla2 : wa.me/${(sender.split('@')[0])}\nSla3 : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					} 
					break
					case 'ttp':
					if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return reply('yang mau dijadiin text sticker apaan, titit kah?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					}) 
					break
				case 'cadr35':
				case 'tulis1':
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis1 Ramlan baik hati`)
				ramlan = body.slice(8)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${ramlan}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case 'cadr25':
				case 'tulis2':
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Teksnya mana kak? Contoh : ${prefix}nulis2 Ramlan baik hati`)
				laysha = body.slice(8)
				reply('「❗」WAIT BRO GUE NULIS DUMLU YAKAN')
				buffer = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${laysha}&APIKEY=${XteamKey}`)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Lebih baik nulis sendiri ya kak :*'})
				await limitAdd(sender)
				break
				case 'cadr':
				case 'tulis':
				if (!isGroup) return reply(ind.groupo())
				if (args.length < 1) return reply('Cadê o texto mamaco?')
				if (!isRegistered) return reply(ind.noregis())
					teks = body.slice(7)
					reply('*⏰AGUARDE UM MOMENTO!*')
					buffer = await getBuffer(`https://api.vhtear.com/write?text=${teks}&apikey=${VhtearKey}`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					
					break 
					case 'pinterest':
					if (!isGroup) return reply(ind.groupo())
					if (!isRegistered) return reply(ind.noregis()) 
					if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
				
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${body.slice(11)}`, {method: 'get'})
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*𝐏𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓*`})
					break
										case 'hentai': 
						try { 
						  if (!isGroup) return reply(ind.groupo())
						  if (!isRegistered) return reply(ind.noregis()) 
						  if (!isNsfw) return reply(ind.nsfwoff())
						  if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
							res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=BotWeA`, {method: 'get'})
							buffer = await getBuffer(res.result)
							client.sendMessage(from, buffer, image, {quoted: mek, caption: 'eita 😳'})
						} catch (e) {
							console.log(`Error :`, color(e,'red'))
							reply('Ocorreu um erro, tente novamente mais tarde!')
						}
					break
                                case 'loli':
                                        gatauda = body.slice(6)
                                        if (!isGroup) return reply(ind.groupo())
                                        if (!isRegistered) return reply(ind.noregis())
                                        if (getLevelingLevel(sender) < ahb ) return reply(ind.nivel(command, pushname, getLevelingLevel, sender, ahb))
                                        anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                                        buffer = await getBuffer(anu.result)
                                        client.sendMessage(from, buffer, image, {quoted: mek})
                                        await limitAdd(sender)
                                        break
					case 'resepmasakan6':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
                   case 'igstalk6':
                   if (!isRegistered) return reply(ind.noregis())
                   
                     hmm = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/igs?u=${body.slice(9)}`)
                     buffer = await getBuffer(hmm.data.profilehd)
                     hasil = `Fullname : ${hmm.data.fullname}\npengikut : ${hmm.data.follower}\nMengikuti : ${hmm.data.following}\nPrivate : ${hmm.data.private}\nVerified : ${hmm.data.verified}\nbio : ${hmm.data.bio}`
                    client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    
					break 
                    case 'Banall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setmarc':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`Marcaçao altarada para: ${cr}`)
					await limitAdd(sender)
					break 
					case 'pisc':
                     if (!isGroup) return reply(ind.groupo())
                     if (!isRegistered) return reply(ind.noregis())
			     	if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}stc atari*`)
                    url = encodeURI(`https://api.xteam.xyz/attp?file&text=${body.slice(6)}`)
		    		attp2 = await getBuffer(url)
			    	client.sendMessage(from, attp2, sticker, {quoted: mek})
			     	break
					case 'grouplist6':
					if (!isRegistered) return reply(ind.noregis())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group XPTN BOT :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				case 'rg': 
				  if (isGroup) return  reply( '*Para está se registrando ou verificar se está registrado, use o meu privado!*')
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if (namaUser.length >= 30) return reply(`Pq seu nick é tão grande, isso seria um nick ou um trem? 🚆`)
                if (umurUser.length >= 3, umurUser.length <= 1) return reply(`Sua idade não pode ser mais nova que 10 e nem mais velha que 40`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await reply(ind.registered(namaUser, umurUser, serialUser, time, sender))
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
					break
            	case 'mining6':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`Só porque você é o dono, toma de presente ${one}Xp`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break  
				case 'bisakah6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
					case 'shitpost':
					data = fs.readFileSync('./outros/shitpost.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 buffer = await getBuffer(randKey.result)
				client.sendMessage(from, buffer, image, {caption: 'chitpost', quoted: mek})
                 break
                 case "shit":
            fs.readdir('./outos/shit', async (err, files) => {
            let imagens = files.filter((f) => f.split(".").pop() == "mp4");
            let imagem = imagens[Math.floor(Math.random() * imagens.length)];
            dua = fs.readFileSync(`./outros/shit/${imagem}`);
            client.sendMessage(from, dua, video, {caption: 'chitpost', quoted: mek})
          });
        break
				case 'kapankah6':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah6':
           if (!isRegistered) return reply(ind.noregis())
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'caracoroa':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				
					rate = body.slice(1)
					const ra =['Cara 👨🏽‍🦲 ✨', 'Coroa 👴🏽 ✨' ]
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, '*Resultado:* '+ te+``, text, { quoted: mek })
					await limitAdd(sender) 
					
					break
				case 'ping':
				if (!isRegistered) return reply(ind.noregis()) 
					rate = body.slice(1)
					const re =['19', '25', '28']
					const ta = re[Math.floor(Math.random() * re.length)] 
					buffer = await getBuffer(`https://i.ibb.co/1rFpLGc/1164b039-354e-4b02-9a2c-e0c02eb208f5.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:'*Ping:* _' + ta+`ms_\n*Dispositivo:* _Nokia Tijolão_\n*Rede:* _Wi-fi_\n*Status:* _Carregando_`})
					
					//maquina gay//
					break					
				case 'gay':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())  
					rate = body.slice(1)
					const ab =['10%', '15%', '20%', '32%', '34%', '39%', '41%', '49%', '50%', '53%', '55%', '61%', '67%', '69%', '74%', '75%', '80%', '88%', '90%', '93%', '99%', '100%']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = await getBuffer(`https://i.ibb.co/FhGKxX4/IMG-20210209-WA0172.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳‍🌈 | Máquina gay*\n_${pushname} você é `+be +` gay._`}) 
					
					break
				case 'resp':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis()) 
					rate = body.slice(1)
					const ge =['Não', 'Sim', 'Provavelmente', 'Talvez', 'Minhas fontes dizem que sim', 'Provavelmente não', 'Provavelmente sim', 'Minha resposta é sim', 'Minha resposta é não', 'Quem sabe', 'Também queria saber', 'Não sei']
					const ha = ge[Math.floor(Math.random() * ge.length)] 
					tesk = ha
					client.sendMessage(from, tesk, text, { quoted: mek})
					
					
					
					break

      //menus do bot

               case 'help6': 
				case 'menu':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
					await costum(ind.menu(pushname, prefix, time, time2 , getLevelingLevel, getLevelingXp, sender, role, reqXp, _registered, uangku), text, tescuk, cr)
					break
				case 'menu6':
client.sendMessage(from, ind.menu(pushname, prefix, time, time2), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Legion of Gods 神 🇧🇱", 'jpegThumbnail': fs.readFileSync('kk/botlogo.webp')}}}})					
break
			     case 'menuadm':
			    if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
		await costum(menuadm(prefix, sender, role), text, tescuk, cr)
                break
                 case 'menuprem':
                if (!isPrem) return reply('Apenas Premiuns podem usar esse comando')
			    if (!isGroup) return reply(ind.groupo())
		await costum(menuprem(prefix, sender, role), text, tescuk, cr)
                break
				 case 'menuzeus':
				if (!isOwner) return reply(ind.ownerg()) 
			    if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
		await costum(menuzeus(prefix, sender, role), text, tescuk, cr)
                break
				case 'menuvip':
				if (!isVip) return reply(ind.vip())
			    if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
		await costum(menuvip(prefix, sender, role), text, tescuk, cr)
                break
                case 'regras':
                if (!isGroup) return reply(ind.groupo())
		await costum(regras(prefix, sender, role), text, tescuk, cr)
                break
                case 'creditos':
                if (!isGroup) return reply(ind.groupo())
		await costum(creditos(prefix, sender, role), text, tescuk, cr)
                break
                case 'evento':
		client.sendMessage(from, evento(prefix, sender), text, {quoted: mek})
                break
                case 'menus':
		await costum(menus(prefix, sender, role), text, tescuk, cr)
                break
                case 'menu2':
		await costum(menu2(prefix, sender, role), text, tescuk, cr)
                break
                case 'comprarbot':
		await costum(comprarbot(pushname, prefix, sender, role), text, tescuk, cr)
                break
				case 'donasi6':
				case 'donate6':
				if (!isRegistered) return reply(ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
				case 'nivel':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 1000 * (Math.pow(2, userLevel) - 1)
                resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ *Nick* : ${pushname}\n┣⊱ *Experiência:*  ${userXp}/${requiredXp}\n┣⊱ *Nivel:* ${userLevel}\n┣⊱ *Patente*: ${role}\n┣⊱ *Link:* wa.me/${sender.split("@")[0]}\n┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
				break
				case 'perfil':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                    try {
					profil = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                const userLevel2 = getLevelingLevel(sender)
                const userXp2 = getLevelingXp(sender)
                if (userLevel2 === undefined && userXp2 === undefined) return reply(ind.lvlnul())
                const requiredXp2 = 3000 * (Math.pow(2, userLevel2) - 1)
                profile = `╭─「 *_Seu perfil_* 」\n┣⊱ *Nome:* ${pushname}\n┣⊱ *Registrado:* √\n┣⊱ *Experiência:*  ${userXp2}/${requiredXp2}\n┣⊱ *Nivel:* ${userLevel2}\n┣⊱ *Patente*: ${role}\n┣⊱ *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buffer = await getBuffer(profil)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile}, text, tescuk, cr)
				break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `_Info: Zeus. Apenas um simples bot para o whatsapp, focado em diversão e moderação de grupos! Quer me add no seu grupo? Converse com #criadorbot ??_`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
				case 'blocklist6': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, {quoted: mek}, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
                case 'here':
                if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
                case 'spamcall':
			if (!isRegistered) return reply(ind.noregis())
			if (!isGroup) return reply(ind.groupo())
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			client.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
			if (!isRegistered) return reply(ind.noregis())
			if (!isGroup) return reply(ind.groupo())
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			client.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
                case 'fraselogo':
                if (!isRegistered) return reply(ind.noregis())
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Use: \n${prefix}fraselogo texto|texto2\n\nExemplo :\n${prefix}fraselogo zeus|teste`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Prontinhuuu', quoted: mek})
					await limitAdd(sender)
					break
					case 'placa':
					if (args.length < 1) return reply('qual o nome da plaquinha?')
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply(ind.wait())
					buffer = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=18&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Tem mulher pedir nao?'})
					break
                case 'ssweb':
                    if (!isRegistered) return reply(ind.noregis())
                    if (!isGroup) return reply(ind.groupo())
					if (args.length < 1) return reply('Coloque uma url ✌️🙄')
					teks = body.slice(7)
					reply(ind.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${teks}`)
					buffer = await getBuffer(anu.gambar)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'pokemon':
                if (!isRegistered) return reply(ind.noregis())
                
                   if (!isGroup) return reply(ind.groupo())
                   
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					
					break
                case 'cachorrinho':
                if (!isRegistered) return reply(ind.noregis())
                   if (!isGroup) return reply(ind.groupo())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ytmp46':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					await limitAdd(sender)
					break

        //Atualização
                case 'belle6':
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '👀️'})
                   case 'clima':
               if (!isGroup) return reply(ind.groupo())
               if (!isRegistered) return reply(ind.noregis())
				client.updatePresence(from, Presence.composing) 
       		if (args.length == 0) return reply('Insira o nome da sua cidade.')
            try {
				const clima = await axios.get(`https://pt.wttr.in/${body.slice(7)}?format=Cidade%20=%20%l+\n\nEstado%20=%20%C+%c+\n\nTemperatura%20=%20%t+\n\nUmidade%20=%20%h\n\nVento%20=%20%w\n\nLua agora%20=%20%m\n\nNascer%20do%20Sol%20=%20%S\n\nPor%20do%20Sol%20=%20%s`)
				const buffer = await getBuffer(`https://wttr.in/${body.slice(7)}.png`)
				let teks = `*「C L I M A」*
╴
${clima.data}
╴
Legion of Gods 神 🇧🇱`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
            } catch {
                reply('Estranho...\nCertifique-se de não estar usando acentos ok?')
            }
            break
		        case 'ftkpop':
            if (!isRegistered) return reply(ind.noregis())
            if (!isGroup) return reply(ind.groupo())
                   kpp = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=BotWeA`, {method: 'get'})
                   kpp1 = await getBuffer(kpp.result)
                   client.sendMessage(from, kpp1, image, {quoted: mek, caption: 'Ebaaaa kpop:)'})
                   await limitAdd(sender)
					break
				case 'semoji':
					if (args.length < 1) return reply('Emoji?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=${teks}&apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
			    case 'map':
			if (!isRegistered) return reply(ind.noregis())
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
					break 
				case 'topanime': 	
				client.updatePresence(from, Presence.composing) 
				reply(`[❕] Loading`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/topanime?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Title:* : ${i.title}\n*Studio* : ${i.studio}\n*Rank* : ${i.rank}\n*Peak* : ${i.stats.peak}\n*Previously* : ${i.stats.previously}\n*Week On Top* : ${i.stats.weeksOnTop}\n*Status* : ${i.stats.status}\n*Stat* : ${i.stats.stat}\n=================\n`
				}
				reply(teks)
				break
				case 'ocr6': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻𝗴𝗮𝗻 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}𝗼𝗰𝗿')
					}
					await limitAdd(sender)
					break
				case 'figugif': 
				case 'figu':
				case 's':
				    
				    if (!isGroup) return reply(ind.groupo())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Envie uma imagem/gif/video não mt pesada, cm a legenda #figu`)
					}
					break
				case 'voz':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
		
				if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 130
					? reply('Para reduzir spam o máximo de letras permitidas são 130!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefixo alterado para:* ${prefix}`)
					break 
				case 'tiktokstalk':
				if (!isRegistered) return reply(ind.noregis())
				try {
				if (!isGroup) return reply(ind.groupo())
						if (args.length < 1) return client.sendMessage(from, 'Qual o nome do usuário/id?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(ind.wait())
						teks = `*ID* : ${user.id}\n*Nome do usuário* : ${user.uniqueId}\n*Nome* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguindo* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Corações* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Nome de usuário/id provavelmente inválido!')
					}
					break
                 case 'convite':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `_Aqui está o link do grupo 😛✌️_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender) 
			        
			        break	
              case 'delete':
					    case 'del': 
					      if (!isOwner) return reply(ind.ownerb())
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'here2': 
				  if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `¡ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break 
				case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'buc':
					if (!isRegistered) return reply(ind.noregis())
					if (!isGroup) return reply(ind.groupo())
		            if (args.length < 1) return reply ('Vou sair aqui ok? Pfv tentem esquecer isso...era eu? Era mas pfv não espalhem eu só queria uma figurinha pra zoar com pessoas ÍNTIMAS minhas não era pra ter esse alvoroço todo....(não aql roula n é minha kk.. é de um amigo meu pfv não espalhem tmb) nunca pedia nada pra ngm daqui então pfv não espalhem e esquecem isso pfv...')
		            break
			       case 'block7':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `Desbloqueado com sucesso ${body.slice(9)}@c.us`, text)
					break
				case 'exit': 
				if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				await reply(from, 'bye').then(() => client.groupLeave(groupId))
					break
				case 'bc6': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST BOT 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					}
					break
			   	case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('🤝')
					break						
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isVip && !isGroupAdmins) return reply(ind.vip())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Quem você quer add?')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Número privado, não foi possível add!')
					}
					break
					case 'gp':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`🤝`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'criadorbot':
            case '=r':
            case '[':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessae(from, 'Tuh nomer owner ku >_<, jangan spam atau ku block kamu',MessageType.text, { quoted: mek} )
					break    
           case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, '🤝', text, {quoted: mek})
					break
           case 'demitir':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #demitir @tagadministrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*?? :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} seus dias de glória acabaram 😭😭👌`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break 
			case 'bug':
                case 'reportar':
                case 'report':
                     const pesan = body.slice(5)
                      if (pesan.length > 1000) return client.sendMessage(from, 'Você excedeu o número máximo de letras(1000). Por favor, resuma o seu report.', msgType.text, {quoted: mek})
                        var nomor = mek.participant
                       const teks1 = `*[BUG REPORTADO]*\nNumero : @${nomor.split("@s.whatsapp.net")[0]}\nMOTIVO : ${pesan}`
                      var options = {
                         text: teks1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    client.sendMessage('556993899391@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Seu bug foi reportado para o Zultra, agradecemos por ter entrado em contato com o suporte😉')
                    break
					case 'cadr23':
				
					if (args.length < 1) return reply(ind.wrongf)
					var gold51 = body.slice(7)
                                        var gold291 = gold51.split("|")[0];
					reply(ind.wait)
					nullis = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${gold291}&apikey=apivinz`)
					client.sendMessage(from, nullis, image, {caption: 'Aqui mano', quoted: mek})
					break
				case 'promover':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #promover @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗦𝗲𝗹𝗮𝗺𝗮𝘁🥳 𝗮𝗻𝗱𝗮 𝗻𝗮𝗶𝗸 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗮𝗱𝗺𝗶𝗻 𝗴𝗿𝗼𝘂𝗽 (+_+) :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`@${mentioned[0].split('@')[0]} parabéns pela promoção 🥳🥳`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break	
					case 'antifake':
					try {
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAntiFake) return reply('Ja esta ativo')
						antifake.push(from)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
					} else if (Number(args[0]) === 0) {
						antifake.splice(from, 1)
						fs.writeFileSync('./database/json/antifake.json', JSON.stringify(antifake))
						reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					} catch {
						reply('Deu erro, tente novamente :/')
					}
                break
					 case 'remover':
					if (!isGroup) return reply(ind.groupo())
					if (!isVip) return reply(ind.vip())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #remover @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(tesk, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions('👋', mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
			     	case 'ban':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Use #ban @tagmembro')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(tesk, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions('👋', mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break


               //adicionar midia no bot
case 'listfigu': 
				    if (!isRegistered) return reply(ind.noregis())
				    if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de figurinhas :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addfigurin':
				    if (!isPrem) return reply(mess.only.premium)
				    if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Qual o nome da figurinha?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./add/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./add/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sucesso ao adicionar na lista de figurinhas\nUse ${prefix}listfigu para ver`, MessageType.text, { quoted: mek })
					break
               case 'mandarfigu':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(12)
					result = fs.readFileSync(`./add/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break	
					case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
				if (!isQuotedVideo) return reply('Marque uma foto e digite o nome dela!')
					svst = body.slice(10)
					if (!svst) return reply('Qual o nome do vídeo?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./add/video/${svst}.mp4`, delb)
					fs.writeFileSync('./add/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sucesso ao adicionar na lista de videos\nUse ${prefix}videolist para ver`, MessageType.text, { quoted: mek })
					break 
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de videos :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break 
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
					case 'premium':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					_premiun.push(from)
                    fs.writeFileSync('./database/user/premiun.json', JSON.stringify(_premiun))
					userpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					addpremium = userpremium
					reply(`*Agora você é um premium* ${addpremium} \n\nUse ${prefix}menuprem para ver seus novos comandos:)`)
					break 
				case 'addimage':
				    if (!isRegistered) return reply(ind.noregis())
				    if (!isPrem) return reply(mess.only.premium)
					if (!isQuotedImage) return reply('Reply imagenya blokk!')
					svst = body.slice(10)
					if (!svst) return reply('Marque uma foto e digite o nome dela')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./add/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./add/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sucesso ao adicionar na lista de fotos\nUse ${prefix}fotolist para ver a lista de fotos`, MessageType.text, { quoted: mek })
					break 
				case 'fotolist':
				if (!isRegistered) return reply(ind.noregis())
			    if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de fotos :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break 
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./add/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek})
					break 
				case 'addaud':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					if (!isQuotedAudio) return reply('Responda um audio e digite um nome!')
					svst = body.slice(7)
					if (!svst) return reply('Qual o nome do audio?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./add/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./add/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sucesso ao adicionar na lista de audios\nUse ${prefix}audiolist para ver a lista de audios`, MessageType.text, { quoted: mek })
					break 
				case 'audiolist':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					teks = '*Lista de áudios Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break 
				case 'getau':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPrem) return reply(mess.only.premium)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./add/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					addpremium.splice(`${rprem}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/user/premium.json', JSON.stringify(addpremium))
					reply(`Você não é mais um membro premium wa.me/${rprem} Portando não podera mais usar os comandos premiuns`)
					break
				case 'admin':
					if (!isGroup) return reply(ind.groupo())
					teks = `⭐ *admin acorda (๑•﹏•)* \n\n `
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks +=`\n! @${admon.split('@')[0]}`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'imagem':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply(ind.noregis())
				if (!isQuotedSticker) return reply('*Marque um sticker! 😉*')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui está amigo! '})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *O comando já estava ativo antes*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬SUCESSO ❭ nsfw foi ativado neste grupo')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUCESSO ❭ nsfw foi desativado neste grupo')
					} else {
						reply(ind.satukos())
					}
					break
				case 'zeus':
			     if (!isGroup) return reply(ind.groupo())
		          if (!isZeusinte) return reply(ind.zeusinte())
				   if (args.length < 1) return reply('*🕵🏻‍♂️ O Bot Precisa De Um Texto 🕵🏻‍♂️*')
					luc4rio1 = body.slice(5)
                    luc4rio2 = await fetchJson(`https://luc4rio.herokuapp.com/api/adicionais/simsimi?texto=${luc4rio1}`, {method: 'get'})
                    if (luc4rio2.Erro) return reply(luc4rio2.Erro)
                    luc4rio3 = `${luc4rio2.Mensagem}`
                    client.sendMessage(from, luc4rio3, text, {quoted: mek})
                    break
			case 'zeusinte':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.zeusinte())
					if (args.length < 1) return reply('Use "zeusinte 1" para ativar a inteligência ou use "zeusinte 0" para desativar')
					if (Number(args[0]) === 1) {
						if (isZeusinte) return reply(' *O comando já estava ativo antes*  !!')
						zeusinte.push(from)
						fs.writeFileSync('./database/bot/zeusinte.json', JSON.stringify(zeusinte))
						reply('A inteligência artificial do zeus foi ativado nesse grupo!')
					} else if (Number(args[0]) === 0) {
						zeusinte.splice(from, 1)
						fs.writeFileSync('./database/bot/zeusinte.json', JSON.stringify(zeusinte))
						reply('A inteligência artificial do zeus foi desativado nesse grupo!')
					} else {
						reply(ind.satukos())
					}
					break
                case 'atnivel':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :??')
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('Já está ativado!')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'off') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
                 case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Pessoas bloqueadas* ${body.slice(7)}@c.us`, text)
				case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Já está ativado* !!!')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😳 Welcome foi ativado neste grupo!*')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*😰 Welcome foi desativado neste grupo!*')
					} else {
						reply(ind.satukos())
					}
					break
               case 'avalie':
               if (!isRegistered) return reply(ind.noregis())
               if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Pergunta : *${body.slice(1)}*\n\nResposta : *${random}%*`
              reply(hasil)
                break
                case 'gado':
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de gadisse🐂\n\nVocê é: *${random}%* GADO(A)😛🐂`
              reply(hasil)
                break
                case 'gostoso':
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
              client.updatePresence(from, Presence.composing) 
                random = `${Math.floor(Math.random() * 100)}`
               hasil = `Nivel de gostosura🤤\n\nVocê é: *${random}%* gostoso(A)😏👊`
              reply(hasil)
                break
                 case 'event6':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞??𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *Marque uma pessoa que terá sua foto do perfil clonada:* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('q')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`obg pela foto de perfil 😳 @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender) 
					break    
					
					//rank de nível 
				case 'rank':
	if (!isRegistered) return reply( ind.noregis())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				let leaderboardlvl = '-----[ *RANKING DE NIVEL* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 5; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.split('@')[0]}\n┣⊱  *XP*: ${_level[i].xp}\n┣⊱  *Nivel*: ${_level[i].level}\n`
				}
				await reply(leaderboardlvl)
				} catch (err) {
				console.error(err)
				await reply(`minimal 5 user untuk bisa mengakses database`)
				}
				break
				case 'buscanime':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.wait())
					}
					await limitAdd(sender)
					break
					
					//atualizações 
					
					case 'cassino':
		const sotoy = [
		'🍊-🍒-🍐',
		'🍒-🔔-🍊',
		'🍇-🍇-🍇',
		'🍊-🍋-🔔',
		'🔔-🍒-🍐',
		'🔔-🍒-🍊',
        '🍊-🍋-🔔',		
		'🍐-🍒-🍋',
		'🍐-🍐-🍐',
		'🍊-🍒-🍒',
		'🔔-🔔-🍇',
		'🍌-🍒-🔔',
		'🍐-🔔-🔔',
		'🍊-🍋-🍒',
		'🍋-🍋-🍌',
		'🔔-🔔-🍇',
		'🔔-🍐-🍇',
		'🔔-🔔-🔔',
		'🍒-🍒-🍒',
		'🍌-🍌-🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
            const somtoy3 = sotoy[Math.floor(Math.random() * sotoy.length)]
	yow = `[  🎰 CASSINO ]\n-----------------\n${somtoy}\n${somtoy2}⟵\n${somtoy3}`
            reply(yow)
	            break
	                        case 'encurta':                     
					data = await fetchJson(`https://encurta.net/api?api=7676c2a06283550f068bcf8aed4de517f91e4875&url=${args[0]}`, {method: 'get'})
                     hasil = `${data.shortenedUrl}`                     
					reply(hasil)
                    break
				default:
			if (body.startsWith(`${prefix}${command}`)) {

                  reply(`Comando *${prefix}${command}* não encontrado, use *${prefix}menu*!`)

                  }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
