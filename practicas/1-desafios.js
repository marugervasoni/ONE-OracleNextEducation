// Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro 
// sitio web!".
alert("¡Bienvenida y bievenido a nuestro sitio web!");

// Declara una variable llamada nombre y asígnale el valor "Luna".
let nombre = "Luna";

// Crea una variable llamada edady asígnale el valor 25.
let edad = 25;

// Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;

// Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

// Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");

// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! 
// Completa todos los campos". Ahora muestra una alerta con el valor de la 
// variable mensajeDeError .
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en 
// la variable nombre.
let nombre1 = prompt('nombre de usuario');

// Pide al usuario que ingrese su edad usando un prompt y almacénala en la
//  variable edad.
let edad1 = prompt('ingrese su edad');

// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje
//  "¡Puedes obtener tu licencia de conducir!".
if(edad1 >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}

//_----------------------------------------------------------------------------------
// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra 
// "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeLaSemana = prompt('¿Qué día de la semana es?')

if (diaDeLaSemana === "sabado" || diaDeLaSemana === "domingo") {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!");
}

// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Escribe un numero positivo o negativo");

if (numero < 0) {
    alert("El número ingresado por el usuario es negativo");
} else if (numero > 0){
    alert("El número ingresado por el usuario es positivo");
} else {
    alert("El número ingresado por el usuario es cero");
}

// Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra 
// "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente para ganar.".
let puntuacion = 130;

if(puntuacion >= 100) {
    alert("¡Felicidades, has ganado!");
} else {
    alert("Intenta nuevamente para ganar.");
}

// Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un
//  template string para incluir el valor del saldo.
let saldo = 300;
alert(`El saldo de tu cuenta es: $ ${saldo}`)

// Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta
//  de bienvenida usando ese nombre.
let nombreUsuario = prompt('ingresa tu nombre');
alert(`Bienvenido usuario ${nombreUsuario}`);

//------------------------------------------------------------------------------------------------
// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador <= 10) {
    console.log(`contador tiene el valor de ${contador}`);
    contador++;
}


// Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;
while (contador2 >= 0) {
    console.log(`contador tiene el valor de ${contador2}`);
    contador2--;
}


// Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let maxNum = prompt('CR: Diga un numero del 1 al 15');
let contador3 = maxNum;

while (contador3 >= 0 ) {

    console.log(`Cuenta regresiva desde el número ${maxNum}:  ${contador3}`);
    contador3--;
}
//otra:
// let numeroMaximo = prompt("Ingresa un número para la cuenta regresiva:");

// while (numeroMaximo >= 0) {
// console.log(numeroMaximo);
// numeroMaximo--;
// }


// Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let minNum = prompt('CP: Diga un numero del 1 al 15');
let contador4 = 0;

while (contador4 <= minNum) {
    console.log(`Cuenta progresiva hasta el número ${minNum}:  ${contador4}`);
    contador4++;
}

//----------------------------------------------------------------------------------------------------------------------------------------------
// Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido');

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let name = 'Maria';
console.log(`¡Hola, ${name}!`);

// Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`¡Hola, ${name}!`);

// Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajeProgramación = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(lenguajeProgramación);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado 
// en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = 1;
let valor2 = 2;
let resultadoSuma = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}.`);

// Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let resultadoResta = valor1 + valor2;
console.log(`La resta de ${valor1} y ${valor2} es igual a ${resultadoResta}.`);

// Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un 
// mensaje apropiado en la consola.
let age =  prompt('ingrese su edad')

if(age >= 18) {
    console.log('Usted es mayor de edad');
} else {
    console.log('Usted es menor de edad');
}

// Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let number = parseFloat(prompt('ingrese un numero'));

if (number > 0) {
    alert('el numero es positivo');
} else if (number < 0) {
    alert('el numero es negativo')
} else {
    alert('el numero es 0')
}

// Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let num = 1;

while (num <= 10) {
    console.log(`numero ${num}`);
    num++;
}

// Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = 10;

if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}

// Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numAleatorio = Math.floor(Math.random());
console.log(numAleatorio);
// let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;

// Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numAleatorio2 = Math.floor(Math.random()*10)+1;

// Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numAleatorio3 = Math.floor(Math.random()*1000)+1;