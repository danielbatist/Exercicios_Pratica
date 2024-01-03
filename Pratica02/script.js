function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var sex = document.getElementsByName('radsex')
    var res = document.getElementById('res')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Digite novamente')
    }
    if (sex[0].checked) {
        genero = 'Homem'
    
        if (idade >=0 && idade < 10) {
            img.setAttribute('src' , 'imagens/crianmenino.png')
            document.body.style.background = '#DAE693'
        }   else if (idade < 25) {
            img.setAttribute('src' , 'imagens/jovemhomem.png')
            document.body.style.background = '#695049'
        }   else if (idade < 50) {
            img.setAttribute('src' , 'imagens/adultohomem.png')
            document.body.style.background = '#FFBB6F'
        }    else {
            img.setAttribute('src' , 'imagens/idosohomem.png')
            document.body.style.background = '#C6AA7E'
        }
    } else {
        genero = 'Mulher'
        if (idade >=0 && idade < 10) {
            img.setAttribute('src' , 'imagens/crianmenina.png')
            document.body.style.background = '#E39F7B'
        }   else if (idade < 25) {
            img.setAttribute('src' , 'imagens/jovemmulher.png')
            document.body.style.background = '#AD7156'
        }   else if (idade < 50) {
            img.setAttribute('src' , 'imagens/adultomulher.png')
            document.body.style.background = '#9F643F'
        }    else {
            img.setAttribute('src' , 'imagens/idosamulher.png')
            document.body.style.background = '#986B4A'
        }
    }

    res.innerHTML = (`Detectamos ${genero} de ${idade} anos`)
    res.style.textAlign ='center'
    res.appendChild(img)
    
}


