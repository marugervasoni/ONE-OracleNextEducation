// Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
    console.log('Hola mundo');
}
holaMundo();

// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar('Maru');

// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(numero) {
    return numero * 2;
}
console.log(duplicarNumero(8));

// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1, num2, num3) {
    let resultado = (num1 + num2 + num3) / 3;
    return resultado;
}
console.log(promedio(2, 6, 9));

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function elNumeroMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {           //-> otra solución: return a > b ? a : b;
        return num2;
    } else {
        return 'son iguales';
    }
}
console.log(elNumeroMayor(5,5)); 

// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(num) {
    return num * num;
}
console.log(cuadrado(6));

//----------------------------------------------------------------------------------------------------------------------
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en 
// kilogramos, que se recibirán como parámetros.
function calcularIMC(alturaMts, pesoKg) {
    return pesoKg / (alturaMts * alturaMts);
}
console.log(calcularIMC(1.64, 64));

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);


// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda 
// brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolaresAReales(dolares) {
    var cotizacionDolar = 4.80;
    var reales = dolares * cotizacionDolar;
    return reales;
  }
  // Ejemplo de uso
  let valorEnDolar = 50;
  let valorEnReales = convertirDolaresAReales(valorEnDolar);
  console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que 
// se proporcionarán como parámetros.
function calcularAreaYPerimetroRectangular(altura, anchura) {
    var area = altura * anchura;
    var perimetro = 2 * (altura + anchura);
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let altura = 3; // en metros
  let anchura = 5; // en metros
  calcularAreaYPerimetroRectangular(altura, anchura);

// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará 
// como parámetro. Considera Pi = 3,14.
function calcularAreaYPerimetroCircular(radio) {
    var pi = 3.14;
    var area = pi * radio * radio;
    var perimetro = 2 * pi * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
  }
  // Ejemplo de uso
  let radio = 4; // en metros
  calcularAreaYPerimetroCircular(radio);

// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);