let res = document.querySelector('.result');
let confirmar = document.querySelector('.igual');

function insert(valor) {
    res.innerHTML += valor;   
}

function clean() {
    res.innerHTML = '';
}

function backspace() {
    if (res.textContent) {
        let result = document.getElementById('resultado').innerHTML;
        res.innerHTML = result.substring(0, result.length -1);
    }
    
}
function confirma() {

    if (res.textContent != 'ERRO') {
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
    
}
