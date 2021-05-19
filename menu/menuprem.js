const menuprem = (prefix, sender) => {
	return `*MENU PREMIUM*
	
	
	Comando de administrador Premium
	${prefix}add
	
	
	 Figurinhas Premium
	${prefix}addfigurin (nome)
	${prefix}listfigu
	${prefix}mandarfigu (nome)
	
	
	Videos Premium
	${prefix}addvideo (nome)
	${prefix}videolist
	${prefix}getvideo (nome)
	
	
	 Fotos Premium
	${prefix}addimage (nome)
	${prefix}fotolist
	${prefix}getimage (nome)
	
	
	Audios Premium
	${prefix}addaud (nome)
	${prefix}audiolist
	${prefix}getau (nome)
`
}

exports.menuprem = menuprem
