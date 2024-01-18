// Variables
let numeroMaxPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible)+1 //diez para que sea de cero a 10, +1 para que excluya el cero;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 3;
console.log(numeroSecreto);

while (numeroSecreto != numeroUsuario) {
    numeroUsuario = parseInt(prompt(`Me indicas un n�mero entre 1 y ${numeroMaxPosible} por favor:`));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el n�mero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //incrementamos contador cuando no acierta
        // intentos = intentos + 1;  
        // intentos += 1;
        intentos++

        //mecanismo de salida del bucle
        if (intentos == maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }  
    }   
}