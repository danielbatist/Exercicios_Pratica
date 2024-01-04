let listadeteclas = document.querySelectorAll('.button');
let campodigitação = document.querySelector('#tel');

for( let c = 0; c < listadeteclas.length;c++){

    let teclas = listadeteclas[c];

    teclas.onclick = function () {
        campodigitação.value += teclas.value;
    }

    teclas.onkeydown = function (evento) {
        if (evento.code === 'Space') {
            teclas.classList.add('ativa');
        }
    



    teclas.onkeyup = function (evento) {
        teclas.classList.remove('ativa');
    }
    }
}