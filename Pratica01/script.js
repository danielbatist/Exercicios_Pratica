function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if ( hora >= 0 && hora < 12 ) {
        img.scr = 'imagens/manha.png' 
        document.body.style.background = '#F4CCAA'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#FE8F02'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#4A2C3E'
    }
}
        
    



