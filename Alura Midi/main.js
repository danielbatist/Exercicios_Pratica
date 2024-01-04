function tocaSom(seletoraudio) {
    let elemento = document.querySelector(seletoraudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
        
    } else {
        console.log('Elemento não encontrado!!')
    }
}

let listadeteclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listadeteclas.length;cont++) {
    
    let tecla = listadeteclas[cont];
    let instrumento = tecla.classList[1]
    let idaudio = `#som_${instrumento}`

    tecla.onclick = function () {
         tocaSom(idaudio) 
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
            
        }   
    }

    tecla.onkeyup = function (evento) {
        tecla.classList.remove('ativa')
        }
    
}


