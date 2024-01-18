//interacción con elementos del html
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

//eventos y funciones
function intentoDeUsuario(){
    return alert('click desde el botón');
}
