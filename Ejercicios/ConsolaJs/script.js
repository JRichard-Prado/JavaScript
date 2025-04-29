// VISUALIZA POR CONSOLA UN MENSAJE:
// 1.- De tipo log personalizado a tu profesor
console.log("Sol 1.- Hola profesor, soy un estudiante de la clase de JavaScript");
// 2.- De tipo wran con el contenido de una variable tipo string con un saludo
let saludo = "Sol 2.- Hola, ¿cómo estás?";
console.warn(saludo);
// 3.- De tipo info que contenga la conactenacion de dos variables tipo string
let nombre = "Juan";
let apellido = "Pérez";
console.info(`Sol 3.- Mi nombre es ${nombre} ${apellido}`);
// 4.- De tipo log con el contenido de una variable de tipo number
let edad = 25;
console.log(`Sol 4.- Mi edad es: ${edad}`);
// 5.- De tipo info con el resultado de realizar las cinco operaciones matemáticas básicas (+, -, *, /, %) sobre dos variables numericas
let num1 = 10;
let num2 = 5;
console.info(`Sol 5.- Operaciones entre ${num1} y ${num2}  \n Suma: ${num1 + num2} \n Resta: ${num1 - num2} \n Multiplicación: ${num1 * num2} \n División: ${num1 / num2} \n Módulo: ${num1 % num2}`);
// 6.- De tipo error con el contenido de una variable de tipo string
let error = "Sol 6.- Ha ocurrido un error inesperado";
console.error(error);
// 7.- De tipo warn con el contenido de una variable de tipo boolean
let esEstudiante = true;
console.warn(`Sol 7.- Es estudiante? ${esEstudiante}`);
// 8.- De tipo wanr con el resultasdo del modulo de una division entre dos variables de tipo numerico
let num3 = 15;
let num4 = 4;   
console.warn(`Sol 8.- El resultado del módulo entre ${num3} y ${num4} es: ${num3 % num4}`);
//  9 de tipo info con el resultado en css personalizado (%c) del contenido de una varible tipo string
let mensaje = "Sol 9.- Mensaje personalizado CSS %Consola";
console.info(`%c${mensaje}`, "color: blue; font-size: 2rem; font-weight: bold; background-color: #6a6af391 ;  border-radius: 10px;");
// 10.- De tipo error con valores numericos (%d) y de cadena (%s) dentro del mensaje.
let valorNumerico = 404;
let valorCadena = "No encontrado";
console.error(`Sol 10.- Error %d ---- %s`, valorNumerico, valorCadena);
// 11.- De tipo info con el resultado de comparar dos numeros e indicar cual es el menor
let numero1 = 8;   
let numero2 = 12;
console.info(`Sol 11.- El menor entre ${numero1} y ${numero2} es: ${Math.min(numero1, numero2)}`);
// 12.- De tipo log con el tipo de dato que contiene una variable
 let variable = 42;
console.log(`Sol 12.- El tipo de dato de la variable es: ${typeof variable}`);
// 13.- De tipo warn informando sin un numero es par o impar
let numero = 7;
if (numero % 2 == 0) {
    console.warn(`Sol 13.- El número ${numero} es par`);
}else
    console.warn(`Sol 13.- El número ${numero} es impar`);
// 14.- De tipo info calculando el factorial de un numero.(Factorial es el resultado de multiplicar ese numero por odos los numeros enteros positivos menores que el.  ej-> Factorial de 5 = 5*4*3*2*1 = 120) 
let numFactorial = 5;
let factorial = 1;
for (let i = numFactorial; i >= 1; i--) {
    factorial *= i;
}   
console.info(`Sol 14.- El factorial de ${numFactorial} es: ${factorial}`);
//  15.-de tipo warn con la secuencia de fibonacci hasta el 1000. (La secuencia de fibonacci es una seria infinita de numeros donde cada numero es la suma de los dos anteriores, comenzando con 0 y 1. ej-> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)

console.warn(`Sol 15.- La secuencia de Fibonacci hasta el 1000 es:`);
let num1Fibo = 0;
let num2Fibo = 1;
for (let i = 0; i < 1000; i++) {
    if (i <= 1) {
        fibonacci = i;
    } else {
        fibonacci = num1Fibo + num2Fibo;
        num1Fibo = num2Fibo;
        num2Fibo = fibonacci;
    }
    console.warn(`${i+1} --> ${fibonacci}`);
}

// 16.- >De tipo log donde calcules los 100 primeros numeros primos.

console.log(`Sol 16.- Los primeros 100 números primos son:`);
let primos = 1;
    for (let i = 2; primos <= 100; i++) {
       let esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                esPrimo = !esPrimo;
                j=i; // Salir del bucle si no es primo
            }
        }
        if (esPrimo) {
            console.log(`El primo ${primos} --> ${i}`);
            primos++;
        }
       
    }
    // 17.-De tipo info donde calcules la letra del DNI dado un numero de 8 digitos
let dni = 12345678;
let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
let letraDNI = letras.charAt(dni % 23); 
// charAt() devuelve el caracter en la posicion indicada por el modulo 23 de la variable dni.
console.info(`Sol 17.- La letra del DNI ${dni} es: ${letraDNI}`);

// 18.- De tipo info donde calcules la letra del NIE dado un numero de 8 digitos
// Los NIE de extranjeros residentes en España tienen una letra (X, Y, Z), 7 números y dígito de copia.
// Para el cálculo del dígito de copia se sustituye:
//     X → 0
//     Y → 1
//     Z → 2
// y se aplica el mismo algoritmo que para el NIF.
// Ejemplo NIE: X0134567A


let nie = "X0134567";

let letraNIE = nie.charAt(0); // La primera letra del NIE
let numeroNIE = nie.substring(1, 8); // Los 7 dígitos del NIE
switch (letraNIE.toUpperCase()) { // Convertir a mayúscula para evitar problemas de comparación
    case "X":
        letraNIE = 0;
        break;
    case "Y":
        letraNIE = 1;
        break;
    case "Z":
        letraNIE = 2;
        break;
    default:
        console.error("Error: La letra del NIE no es válida");
}
let nieNumerico = letraNIE + numeroNIE; // Convertir a número
console.info(`Sol 18.- La letra del NIE ${nie} es: ${letras.charAt(nieNumerico%23)}`);
// 19.- De tipo error para calcular un numero dado a su equivalente en binario sin utilizar funciones propias  de los lenguajes, es decir, dividiendo por 2 hasta hallarlo.
let numeroDecimal = 5; 
let binario = ""; 
// while (numeroDecimal > 0) {
while (numeroDecimal > 0) {
    let residuo = numeroDecimal % 2; 
    binario = residuo + binario; // Concatenar el residuo al principio del resultado
    numeroDecimal = Math.floor(numeroDecimal / 2); 
    // floor() redondea hacia abajo el número decimal al entero más cercano.
}
console.error(`Sol 19.- El número decimal 42 en binario es: ${binario}`);

//De tipo warn donde calcules si un nuemro es numero armstrong, tambien conocido como numero narcisista,o numero de repeticion, es un numero que es igual a la suma de sus digitos elevados a la potencia del numero de  digitos. Por ejemplo, 153 es un numero de armstrong por que 1^3 +5^3+3^3=1+125+27=153. 
// 370,371 y 407 son otros ejemplos de numeros armstrong.
let numeroArmstrong = 153; 
let copia = numeroArmstrong; // Guardar el número original para la comparación final
let suma = 0;

while (copia > 0) {
    let digito = copia % 10; // Obtener el último dígito
    suma += Math.pow(digito, 3); // Elevar el dígito a la potencia de 3 y sumarlo
    copia = Math.floor(copia / 10); // Eliminar el último dígito
}
if (suma === numeroArmstrong) {
    console.warn(`El número ${numeroArmstrong} es un número Armstrong`);
}

   



