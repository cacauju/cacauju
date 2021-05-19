const menuadm = (prefix, sender) => {
	return `*👲🏿Menu do administrador*
┊⟿${prefix}promover @tagmembro
┊⟿${prefix}demitir @tagadmin 
┊⟿${prefix}ban @tagmembro 
┊⟿${prefix}setname _{Nome novo do gruoo}_
┊⟿${prefix}setdesc _{Alterar desc do grupo}_
┊⟿${prefix}setmarc _{Marcação nova}_
┊⟿${prefix}atnivel _{on/off}_
┊⟿${prefix}zeusinte _{1/0}_
┊⟿${prefix}welcome _{1/0}
┊⟿${prefix}antilinkgrupo _{1/0}_
┊⟿${prefix}antifake _{1/0}_
┊⟿${prefix}gp _{open/close}_
┊⟿${prefix}here {marcação invisível}
┊⟿${prefix}here2 {marcação normal}
┊⟿${prefix}delete / ${prefix}del {apagar mensagem do bot}`
}

exports.menuadm = menuadm
