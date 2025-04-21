// 1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

// alert("Hola Mundo!");


// 2. Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.writeln("Hola Mundo! con JavaScript<br>");
// 3. Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. 
// document.writeln("El resultado de 3 + 5 es: " + (3 + 5) + "<br>");

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
// divisiblePorDos();

// 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

function contarLetraA() {
    contador = 0;
    frase = prompt("Introduce una frase: ");
   for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) == "a" || frase.charAt(index) == "A") {
            contador++;
        };
    
   }
    document.writeln(`La letra a aparece ${contador} veces en la frase: ${frase} <br>`);
}

// contarLetraA();

// 10. Escribe un programa que pida una frase y escriba las vocales que aparecen
function contarVocales() {
    frase = prompt("Introduce una frase: ");
    vocales = "aeiouAEIOU";
    for (let index = 0; index < frase.length; index++) {
        if (vocales.includes(frase.charAt(index))) {
            document.writeln(`La letra ${frase.charAt(index)} es una vocal <br>`);
        }            
    }
}
// contarVocales();
// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

function letrasConVocales() {
    frase = prompt("Introduce una frase: ");
    contador = 0;
    vocales = "aeiouAEIOU";
    for (let index = 0; index < frase.length; index++) {
        if (vocales.includes(frase.charAt(index))) {
            contador++;
        }            
    }
    document.writeln(`La frase "${frase}" tiene ${contador} vocales <br>`);
}
// letrasConVocales();
// 12. Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales 

function contarVocalesFrase() {
    frase = prompt("Introduce una frase: ");
    contadorA = 0;
    contadorE = 0;
    contadorI = 0;
    contadorO = 0;
    contadorU = 0;
    for (let index = 0; index < frase.length; index++) {
        if (frase.charAt(index) == "a" || frase.charAt(index) == "A") {
            contadorA++;
        } else if (frase.charAt(index) == "e" || frase.charAt(index) == "E") {
            contadorE++;
        } else if (frase.charAt(index) == "i" || frase.charAt(index) == "I") {
            contadorI++;
        } else if (frase.charAt(index) == "o" || frase.charAt(index) == "O") {
            contadorO++;
        } else if (frase.charAt(index) == "u" || frase.charAt(index) == "U") {
            contadorU++;
        }
    }
    document.writeln(`La letra a aparece ${contadorA} veces <br>`);
    document.writeln(`La letra e aparece ${contadorE} veces <br>`);
    document.writeln(`La letra i aparece ${contadorI} veces <br>`);
    document.writeln(`La letra o aparece ${contadorO} veces <br>`);
    document.writeln(`La letra u aparece ${contadorU} veces <br>`);
}
// contarVocalesFrase();
// 13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
function divisiblePor() {
    numero = prompt("Introduce un número: ");
    if (numero % 2 == 0) {
        document.writeln(`El número ${numero} es divisible por 2 <br>`);
        } else if (numero % 3 == 0) {
        document.writeln(`El número ${numero} es divisible por 3 <br>`);
    
        } else if (numero % 5 == 0) {
        document.writeln(`El número ${numero} es divisible por 5 <br>`);
        
        } else if (numero % 7 == 0) {
        document.writeln(`El número ${numero} es divisible por 7 <br>`);
        } else {
        document.writeln(`El número ${numero} no es divisible por ninguno de los cuatro <br>`);
    }
}
// divisiblePor();         
// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

function divisiblePorCuatro() {
    numero = prompt("Introduce un número: ");
    if (numero % 2 == 0) {
        document.writeln(`El número ${numero} es divisible por 2 <br>`);
    } 
    if (numero % 3 == 0) {
        document.writeln(`El número ${numero} es divisible por 3 <br>`);
    } 
    if (numero % 5 == 0) {
        document.writeln(`El número ${numero} es divisible por 5 <br>`);
    } 
    if (numero % 7 == 0) {
        document.writeln(`El número ${numero} es divisible por 7 <br>`);
    }
    if (numero % 2 != 0 && numero % 3 != 0 && numero % 5 != 0 && numero % 7 != 0) {
        document.writeln(`El número ${numero} no es divisible por ninguno de los cuatro <br>`);
    }
}
// divisiblePorCuatro();

// 15. Escribir un programa que escriba en pantalla los divisores de un número dado
function divisores() {
    numero = prompt("Introduce un número: ");
    document.writeln(`Los divisores de ${numero} son: `);
    for (let index = 1; index <= numero; index++) {
        if (numero % index == 0) {
            document.writeln(`${index}, `);
        }
    }
}
// divisores();

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

function divisorComun() {
    numero1 = prompt("Introduce el primer número: ");
    numero2 = prompt("Introduce el segundo número: ");
    document.writeln(`Los divisores comunes de ${numero1} y ${numero2} son: `);
    for (let index = 1; index <= numero1 && index <= numero2; index++) {
        if (numero1 % index == 0 && numero2 % index == 0) {
            document.writeln(`${index}, `);
        }
    }
    
}
// divisorComun();

// 17. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
function primo() {
    numero = prompt("Introduce un número: ");
    contador = 0;
    // recorre el número desde 1 hasta el número introducido
    // y cuenta cuántos divisores tiene
    for (let index = 1; index <= numero; index++) {
        if (numero % index == 0) {
            contador++;
        }
    }
    // si el número tiene 2 divisores, es primo
    // si el número tiene más de 2 divisores, no es primo
    if (contador == 2) {
        document.writeln(`El número ${numero} es primo <br>`);
    } else {
        document.writeln(`El número ${numero} no es primo <br>`);
    }
    
}
// primo();
// 18. Pide la edad y si es mayor de 18 años indica que ya puede conducir.
function esMayorDeEdad() {
    edad = prompt("Introduce tu edad: ");
    if (edad >= 18) {
        document.writeln(`Tu edad es: ${edad} Ya puedes conducir <br>`);
    } else {
        document.writeln(`Tu edad es: ${edad} No puedes conducir <br>`);
    } 
}
// esMayorDeEdad();
// 19. Pide una nota (número). Muestra la calificación según la nota:
//             0-3: Muy deficiente
//             3-5: Insuficiente
//             5-6: Suficiente
//             6-7: Bien
//             7-9: Notable
//             9-10: Sobresaliente
function calificacion() {
    nota= prompt("Introduce una nota: ");
    if (nota >= 0 && nota < 3) {
        document.writeln(`La calificación es:${nota} Muy deficiente <br>`);
    } else if (nota >= 3 && nota < 5) {
        document.writeln(`La calificación es:${nota} Insuficiente <br>`);
    } else if (nota >= 5 && nota < 6) {
        document.writeln(`La calificación es:${nota} Suficiente <br>`);
    } else if (nota >= 6 && nota < 7) {
        document.writeln(`La calificación es:${nota} Bien <br>`);
    } else if (nota >= 7 && nota < 9) {
        document.writeln(`La calificación es:${nota} Notable <br>`);
    } else if (nota >= 9 && nota <= 10) {
        document.writeln(`La calificación es:${nota} Sobresaliente <br>`);
    } else {
        document.writeln(`Nota no válida <br>`);
    }
}

// calificacion();
// 20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

function concatenarCadenas() {
    resultado = "";
    do {
        cadena = prompt("Introduce una cadena de texto: ");
        if (cadena != null) {
            resultado += cadena + "-";
        }
    } while (cadena != null);
    
document.writeln(`Las cadenas introducidas son: ${resultado.substring(0,resultado.length - 1)} <br>`);
}
// concatenarCadenas();
// 21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

function sumaNumeros() {
    suma = 0;
    do {
        numero = prompt("Introduce un número: ");
        if (numero != null) {
            if (isNaN(numero)) {
                alert("No es un número");
            } else {
                suma += parseInt(numero);
            }
        }
    } while (numero != null);
    
    document.writeln(`La suma total de los números introducidos es: ${suma} <br>`);
}
// sumaNumeros();

// 22. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma:
//     1
//     22
//     333
//     4444
//     55555
//     666666
//     …….

function piramide() {
    for (let index = 1; index <= 30; index++) {
        for (let j = 1; j <= index; j++) {
            document.writeln(index);
        }
        document.writeln("<br>");
    }
}
// piramide();

// 23. Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario de la siguiente forma : (suponiendo que indica 30).
//     303030303030303030303030303030303030303030303030303030303030
//     2929292929292929292929292929292929292929292929292929292929
//     28282828282828282828282828282828282828282828282828282828
//     …..
//     333
//     22
//     1 

function piramideInversa() {
    numero = prompt("Introduce un número: ");
    for (let index = numero; index >= 1; index--) {
        for (let j = 1; j <= index; j++) {
            document.writeln(index);
        }
        document.writeln("<br>");
    }     
}
// piramideInversa();
// 24. Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) :
//     1
//     12
//     123
//     1234
//     12345
//     123456
//     …… 

function piramideNumeros() {
    do {
        numero = prompt("Introduce un número: ");
        if (numero > 50) {
            alert("El número no puede ser mayor de 50");
        } else {
            for (let index = 1; index <= numero; index++) {
                for (let j = 1; j <= index; j++) {
                    document.writeln(j);
                }
                document.writeln("<br>");
            } 
        }
    } while (numero > 50);
}    
// piramideNumeros();




// 25. Un script que escriba los números del 1 al 500, que indique cuales son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
// 1
// 2
// 3
// 4 (Múltiplo de 4)
// 5-
// ————————————————————-
// 6
// 7
// 8 (Múltiplo de 4)
// 9 (Múltiplo de 9)
// 10

function numeroMultiplos() {
    contador = 0;
     for (let index = 1; index <= 500; index++) {
         document.writeln(index + "<br>"); 
            contador++;  
         if (contador == 5) {
            document.writeln("———————————————————— <br>");
            contador = 0;
         }
         if (index % 4 == 0) {
            document.writeln(`${index} (Múltiplo de 4) <br>`);
         } 
         if (index % 9 == 0) {
            document.writeln(`${index} (Múltiplo de 9) <br>`);
         } 
     }
}
// numeroMultiplos();

// 26. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
function tabla() {
    filas = prompt("Introduce el número de filas: ");
    columnas = prompt("Introduce el número de columnas: ");
    numero = filas * columnas;
    for (let index = 1; index <= filas; index++) {
        for (let j = 1; j <= columnas; j++) {
            document.writeln(numero + " ");
            numero--;
        }
        document.writeln("<br>");
    }    
}
// tabla();

// 27. Realiza un script que pida un texto y lo muestre en mayúsculas.

function textoMayusculas() {
    texto = prompt("Introduce un texto: ");
    document.writeln(`El texto en mayúsculas es: ${texto.toUpperCase()} <br>`);
}
// textoMayusculas();

// 28. Realiza un script que pida una cadena de texto y la muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-é- -t-a-l”.

function textoGuiones() {
    texto = prompt("Introduce un texto: ");
    resultado = "";
    for (let index = 0; index < texto.length; index++) {
        resultado += texto.charAt(index) + "-";
        // charAt(index) devuelve el carácter en la posición index de la cadena texto
    }
    document.writeln(`El texto con guiones es: ${resultado.substring(0, resultado.length - 1)} <br>`);
}
// textoGuiones();
// 29. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final. 
function extraerTextoParentesis() {
    texto = prompt("Introduce un texto: ");
    inicio = texto.indexOf("(");
    fin = texto.indexOf(")");
    // indexOf busca el primer paréntesis en la cadena texto y devuelve su posición
    // si no encuentra el paréntesis devuelve -1
    if (inicio == -1 || fin == -1) {
       if (inicio == -1) {
             document.writeln(`El texto entre paréntesis es: "" <br>`);
        
       } else if (fin== -1) {
            document.writeln(`El texto entre paréntesis es: ${texto.substring(inicio+1)} <br>`);
            // substring(inicio) devuelve la cadena desde la posición inicio hasta el final de la cadena texto
       } 
    } else {
        document.writeln(`El texto entre paréntesis es: ${texto.substring(inicio + 1, fin)} <br>`);
    }

}

extraerTextoParentesis();