function inserir(elemento) {

    let elements = document.querySelector(elemento);
    res.innerHTML = elements;
}
 

let res = document.querySelector('#tel');
let listadeteclas = document.querySelectorAll('.button');

for (let c = 0; c < listadeteclas.length;c++) {

    let res = document.querySelector('#tel');
    let teclas = listadeteclas[c];
    let valores = String(teclas.value);
    let item = document.createElement('input');
    item.text = valores;
    res.appendChild(item);
    console.log(valores);

    teclas.onclick = function () {
        inserir(valores)
    }
}




