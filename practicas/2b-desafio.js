// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 
// 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarEnConsola(array) {
    console.log(array);
}
mostrarEnConsola(lenguagesDeProgramacion);

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarEnOrdenInverso(array) {
    let lenguajeExtraido;
    let arrayLenguajesInverso = [];

    while (array.length > 0) {
        lenguajeExtraido = array.pop();
        arrayLenguajesInverso.push(lenguajeExtraido);
    }
    return arrayLenguajesInverso;
}
mostrarEnOrdenInverso(lenguagesDeProgramacion);

// Crea una función que calcule el promedio de los elementos en una lista de números.
let arrayNumeros = [4, 7, 9, 10, 5];

function calcularPromedioLista(array) {
    let totalSuma = 0;
    let index = 0;

    while (index < array.length ) {
        totalSuma += array[index];
        index++
    }
    return totalSuma / array.length;     
}
console.log(calcularPromedioLista(arrayNumeros));


// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarMayorYMenor(array) {
  let mayor = array[0];
  let menor = array[0]; 

  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
    if (array[i] < menor) {
      menor = array[i];
    }
  }
    return (`Número menor = ${menor} y Número mayor = ${mayor}`);
}
console.log(mostrarMayorYMenor(arrayNumeros));

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sumarElementosDeUnaLista(array) {
    let totalSuma = 0;
    let index = 0;          
                                                    
    while (index < array.length ) {
        totalSuma += array[index];
        index++
    }
    return totalSuma;     
}

//otra forma
// function calcularSuma(lista) {
//     let suma = 0;
//     for (let i = 0; i < lista.length; i++) {
//       suma += lista[i];
//     }
//     return suma;
// }

console.log(sumarElementosDeUnaLista(arrayNumeros));

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function devolverPosicion(elemento, array) {   
    if (array.includes(elemento)) {
        return array.indexOf(elemento);
    } else {
        return -1
    }
}
let elementoBuscado = 9;
console.log(devolverPosicion(elementoBuscado,arrayNumeros));

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6];

function fusionarListas(arr1, arr2) {
    let nuevaLista = [];

    if (arr1.length !== arr2.length) {
        return "Las listas no son del mismo tamaño"
    }
    for (let i = 0; i < arr1.length; i++) {
        nuevaLista.push(arr1[i] + arr2[i]);    
    }
       
    return nuevaLista;
}
console.log(fusionarListas(nums1,nums2));

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function devolverCuadrado(array) {
    let nuevaLista = [];

    for (let i = 0; i < array.length; i++) {
        nuevaLista.push(array[i] + array[i]);        
    }
    return nuevaLista;
}
console.log(devolverCuadrado(nums1));