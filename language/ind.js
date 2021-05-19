exports.wait = () => {
	return`_Aguarde, estou fazendo.⏰_`
}

exports.succes = () => {
	return`*Sucesso✓*`
}

exports.lvlon = () => {
	return`*Os níveis está ativado 👴🏽🤙🏿*`
}

exports.lvloff = () => {
	return`*Os níveis está desativado 😔*`
}

exports.lvlnul = () => {
	return`_Você ainda não tem um nível!_`
} 

exports.lvlnoon = () => {
	return`*Peça a um adm para ativar os níveis neste grupo!*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*

*🤝 Percebemos que você ainda não está registrado(a) em nosso banco de dados... para está se registrando use ${prefix}rg nome|idade - obs: use isso no privado do bot!* 

•Exemplo: ${prefix}rg zeus|18`
}

exports.rediregis = () => {
	return`*Você já está registrado em nosso banco de dados 🏦🎲🤝*`
}

exports.stikga = () => {
	return`*Falha, tente novamente mais tarde!*`
}

exports.linkga = () => {
	return`*Link inválido*`
}

exports.groupo = () => {
	return`*Comando só pode ser usado em grupos!*
https://chat.whatsapp.com/Fxv0UBq3r3dD3eA3Yw1wx5`
}

exports.matar = (pushname, anug, mem) => {
	return` ${pushname} matou o @${mem('@')[0]}

Tem um assassino a solta corram antes que seja tarde!!`
}

exports.ownerb = () => {
	return`Esse comando só pode ser usado pelo Zeus `
}

exports.ownerg = () => {
	return`*🚫*`
} 
exports.vip = () => { 
  return `_Você não possui uma conta *vip*😥_` 
}

exports.zeusinte = () => {
	return`Ative a inteligência artificial do zeus para poder usar esse comando`

}

exports.admin = () => {
	return`_que se ta tentando fazer membro?kkkk 🤣🤣🤣_`
}
exports.nivel = () => { 
  return`*Para fazer uso deste comando é nescessário ter o nível 3 👳🏿‍♂️*`
} 
exports.badmin = () => {
	return`Preciso ser adm para o uso desse comando 😞*`
}

exports.userpremium = () => { 
	return `_Você não possui uma conta premium😥_` 
}

exports.nsfwoff = () => {
	return`Ative o nsfw para poder usar esse comando!`
}

exports.bug = () => {
	return`*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco 🤨*`
}

exports.clears = () => {
	return`Todas as conversas foram apagadas :b`
}

exports.pc = () => {
	return`*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`Registrado🤝`
}

exports.cmdnf = (prefix, command) => {
	return`Comando *${prefix}${command}* não encontrado, use *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*`
}

exports.menu = (pushname, prefix, time, time2, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `⚡Zeus 

❍ Prefix: 「 ${prefix} 」
❍ Status: Online 
  
  Horário: ${time}
  Data: ${time2}
  
✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*📑Informações1*
⇝${prefix}info 
⇝${prefix}criadorbot
⇝${prefix}bug (Fale sobre o bug que você deseja reportar)
⇝${prefix}creditos
⇝${prefix}comprarbot
  
✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*📄Informações2*
⇝${prefix}perfil
⇝${prefix}menus
⇝${prefix}regras
⇝${prefix}ping
⇝${prefix}nivel
⇝${prefix}rank
  
✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*🏄🏿‍♀️Ações*
⇝${prefix}figugif
⇝${prefix}figu
⇝${prefix}clima
⇝${prefix}imagem 
⇝${prefix}voz {código do idioma} {fala}
⇝${prefix}cadr {texto}
⇝${prefix}buscanime
⇝${prefix}fraselogo
⇝${prefix}map
⇝${prefix}pornhub (título)
⇝${prefix}convite
  
✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
 *🎡Diversão*
⇝${prefix}cassino
⇝${prefix}pisc 
⇝${prefix}zeus
⇝${prefix}caracoroa 
⇝${prefix}gay 
⇝${prefix}rankgay
⇝${prefix}resp {sua pergunta}
⇝${prefix}avalie
⇝${prefix}gado
⇝${prefix}buc
⇝${prefix}gostoso
⇝${prefix}caracoroa
⇝${prefix}casal
⇝${prefix}prnhb Nome/texto

✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
  *📩Download*
⇝${prefix}loli
⇝${prefix}ftkpop
⇝${prefix}cachorrinho
⇝${prefix}play {nome da música}
⇝${prefix}ytmp4 {url yt}
⇝${prefix}ytmp3 {url yt}
 
✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*✂️Encurtador*
⇝${prefix}ssweb {url} 
⇝${prefix}encurta {url}

✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*🔎Stalkear*
⇝${prefix}tiktokstalk {id/nome do usuário}
✄╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
`}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`*Parabéns, você upou de nível 🥳 ${getLevelingLevel(sender)} - Experiência:  ${getLevelingXp(sender)}*`}
 
exports.limitend = (pushname) => {
	return`💤`
}

exports.limitcount = (limitCounts) => {
	return`💤` 
}

exports.satukos = () => {
	return`*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*`
}