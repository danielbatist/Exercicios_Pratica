function tocaSom(idelementoaudio) {
    document.querySelector(idelementoaudio).play();
}

let listadeteclas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listadeteclas.length;cont++) {
    
    let tecla = listadeteclas[cont];
    let instrumento = tecla.classList[1]
    let idaudio = `#som_${instrumento}`

    tecla.onclick = function () {
         tocaSom(idaudio) 
    }
    
}


