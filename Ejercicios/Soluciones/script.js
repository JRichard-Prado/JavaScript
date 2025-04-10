// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

// alert("Hola Mundo!");


// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.writeln("Hola Mundo!<br>");

// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. 
document.writeln("El resultado de 3 + 5 es: " + (3 + 5) + "<br>");

// 4. Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

// nombreUsuario = prompt("¿Cuál es tu nombre?");
// document.writeln(`Hola ${nombreUsuario} <br>`);  

// 5. Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// numero1 = prompt("Introduce el primer número: ");
// numero2 = prompt("Introduce el segundo número: ");
// document.writeln(`La suma de ${numero1} + ${numero2} es: ${parseInt(numero1) + parseInt(numero2)} <br>`);

// 6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

function mayor() {
    numero1 = prompt("Introduce el primer número: ");
    numero2 = prompt("Introduce el segundo número: ");
    if (numero1 > numero2) {
        document.writeln(`El número mayor es: ${numero1} <br>`);
        
    } else {
        document.writeln(`El número mayor es: ${numero2} <br>`);
    }
}
// mayor();
// 7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

function mayorDeTres() {
    numero1 = prompt("Introduce el primer número: ");
    numero2 = prompt("Introduce el segundo número: ");
    numero3 = prompt("Introduce el tercer número: ");
    if (numero1 > numero2 && numero1 > numero3) {
        document.writeln(`El número mayor es: ${numero1} <br>`);
        
    } else if (numero2 > numero1 && numero2 > numero3) {
        document.writeln(`El número mayor es: ${numero2} <br>`);
        
    } else {
        document.writeln(`El número mayor es: ${numero3} <br>`);
    }
}
// mayorDeTres();
// 8. Escribe un programa que pida un número y diga si es divisible por 2

function divisiblePorDos() {
    numero = prompt("Introduce un número: ");
    if (numero % 2 == 0) {
        document.writeln(`El número ${numero} es divisible por 2 <br>`);
    } else {
        document.writeln(`El número ${numero} no es divisible por 2 <br>`);
    }
}
divisiblePorDos();

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

function contarLetraA() {
    frase = prompt("Introduce una frase: ");

}