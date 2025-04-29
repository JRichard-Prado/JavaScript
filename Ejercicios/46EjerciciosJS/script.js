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
   for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == "a" || frase.charAt(i) == "A") {
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
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase.charAt(i))) {
            document.writeln(`La letra ${frase.charAt(i)} es una vocal <br>`);
        }            
    }
}
// contarVocales();
// 11. Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales

function letrasConVocales() {
    frase = prompt("Introduce una frase: ");
    contador = 0;
    vocales = "aeiouAEIOU";
    for (let i = 0; i < frase.length; i++) {
        if (vocales.includes(frase.charAt(i))) {
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
    for (let i = 0; i < frase.length; i++) {
        if (frase.charAt(i) == "a" || frase.charAt(i) == "A") {
            contadorA++;
        } else if (frase.charAt(i) == "e" || frase.charAt(i) == "E") {
            contadorE++;
        } else if (frase.charAt(i) == "i" || frase.charAt(i) == "I") {
            contadorI++;
        } else if (frase.charAt(i) == "o" || frase.charAt(i) == "O") {
            contadorO++;
        } else if (frase.charAt(i) == "u" || frase.charAt(i) == "U") {
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
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            document.writeln(`${i}, `);
        }
    }
}
// divisores();

// 16. Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

function divisorComun() {
    numero1 = prompt("Introduce el primer número: ");
    numero2 = prompt("Introduce el segundo número: ");
    document.writeln(`Los divisores comunes de ${numero1} y ${numero2} son: `);
    for (let i = 1; i <= numero1 && i <= numero2; i++) {
        if (numero1 % i == 0 && numero2 % i == 0) {
            document.writeln(`${i}, `);
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
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0) {
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
    for (let i = 1; i <= 30; i++) {
        for (let j = 1; j <= i; j++) {
            document.writeln(i);
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
    for (let i = numero; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            document.writeln(i);
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
            for (let i = 1; i <= numero; i++) {
                for (let j = 1; j <= i; j++) {
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
     for (let i = 1; i <= 500; i++) {
         document.writeln(i + "<br>"); 
            contador++;  
         if (contador == 5) {
            document.writeln("———————————————————— <br>");
            contador = 0;
         }
         if (i % 4 == 0) {
            document.writeln(`${i} (Múltiplo de 4) <br>`);
         } 
         if (i % 9 == 0) {
            document.writeln(`${i} (Múltiplo de 9) <br>`);
         } 
     }
}
// numeroMultiplos();

// 26. Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
function tabla() {
    filas = prompt("Introduce el número de filas: ");
    columnas = prompt("Introduce el número de columnas: ");
    numero = filas * columnas;
    for (let i = 1; i <= filas; i++) {
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
    for (let i = 0; i < texto.length; i++) {
        resultado += texto.charAt(i) + "-";
        // charAt(i) devuelve el carácter en la posición i de la cadena texto
    }
    document.writeln(`El texto con guiones es: ${resultado.substring(0, resultado.length - 1)} <br>`);
}
// textoGuiones();
// 29. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final. 
function extraerTextoParentesis() {
    texto = prompt("Introduce un texto: ");
    inicio = texto.iOf("(");
    fin = texto.iOf(")");
    // iOf busca el primer paréntesis en la cadena texto y devuelve su posición
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

// extraerTextoParentesis();
// 30. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
function textoAlReves() {
    texto = prompt("Introduce un texto: ");
    textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto.charAt(i);
    }
    document.writeln(`El texto al revés es: ${textoInvertido} <br>`);
}

// textoAlReves();
// 31. Realiza un script que pida un texto e indique si es un palíndromo. Ejemplo de palíndromo: “Dabale arroz a la zorra el abad”.

// Un palíndromo es una palabra o enunciado que es escrito de la misma forma de adelante y al-revés, ignorando la puntuación,  las mayúsculas, y el espaciado. por ejemplo; Ana, Anna, Otto
   
    
function palindromo() {
    text = prompt("Introduce un frase palindromo: ");
    palindromoLower = "";
    textoInvertido = "";
    for (let index = 0; index < text.length; index++) {
        // Ignoramos los espacios y las mayúsculas
        if (text.charAt(index) != " ") {
            palindromoLower += text.charAt(index).toLowerCase();
        }
    }
    for (let i = palindromoLower.length - 1; i >= 0; i--) {
        textoInvertido += palindromoLower.charAt(i);
    }
    document.writeln(`El texto al revés es: ${textoInvertido} <br>`);
    if (palindromoLower == textoInvertido) {
        document.writeln(`El texto ${text} es un palíndromo <br>`);
        document.writeln(`El texto ${textoInvertido} es un palíndromo <br>`);
        document.writeln(`El texto ${palindromoLower} es un palíndromo <br>`);
    } else {
        document.writeln(`El texto ${textoInvertido} no es un palíndromo <br>`);
        document.writeln(`El texto ${palindromoLower} no es un palíndromo <br>`);
    }
}
// palindromo();

// 32. Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado. 

function primeraVocal() {
    texto = prompt("Introduce un texto: ").toLowerCase();
    vocales = "aeiou";
    for (let i = 0; i < texto.length; i++) {
        if ('a'== texto.charAt(i)) {
            document.writeln(`La primera vocal es: ${texto.charAt(i)} en la posición ${i} <br>`);
            i= texto.length; // salimos del bucle
        }else if ('e'== texto.charAt(i)) {
            document.writeln(`La primera vocal es: ${texto.charAt(i)} en la posición ${i} <br>`);
            i= texto.length; // salimos del bucle
        }else if ('i'== texto.charAt(i)) {
            document.writeln(`La primera vocal es: ${texto.charAt(i)} en la posición ${i} <br>`);
            i= texto.length; // salimos del bucle
        } else if ('o'== texto.charAt(i)) {
            document.writeln(`La primera vocal es: ${texto.charAt(i)} en la posición ${i} <br>`);
            i= texto.length; // salimos del bucle
        }else if ('u'== texto.charAt(i)) {
            document.writeln(`La primera vocal es: ${texto.charAt(i)} en la posición ${i} <br>`);
            i= texto.length; // salimos del bucle
        }
    }
}
// primeraVocal();
// 33. Realiza el mismo ejercicio anterior pero utilizando el método includes.
function primeraVocalIncludes() {
    texto = prompt("Introduce un texto: ").toLowerCase();
    vocales = "aeiou";
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto.charAt(i))) {
            document.writeln(`La primera vocal es: ${texto.charAt(i)} en la posición ${i} <br>`);
            break; // salimos del bucle
        }
    }
}
// primeraVocalIncludes();

// 34. Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado
//     0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89... el siguiente número es una suma de los dos anteriores
function fibonacci() {
    numero = prompt("Introduce un número entre 1 y 100: ");
    if (numero < 1 || numero > 100) {
        alert("El número no es válido");
    } else {
        a = 0;
        b = 1;
        document.writeln(`La serie de Fibonacci hasta ${numero} es: `);
        document.writeln(`${a}, ${b}, `);
        for (let i = 2; i < numero; i++) {
            c = a + b;
            document.writeln(`${c}, `);
            a = b;
            b = c;
        }
    }
}
// fibonacci();
// 35. Realiza un juego de Piedra Papel Tijera contra el Pc.
function piedraPapelTijera() {
    usuario = prompt("Elige piedra, papel o tijera: ").toLocaleUpperCase();
    opciones = ["PIEDRA", "PAPEL", "TIJERA"];
    pc = Math.floor(Math.random() * 3)
    document.writeln(`El jugador elige: ${usuario} <br>`);
    document.writeln(`El PC elige: ${opciones[pc]} <br>`);
    if (usuario == opciones[pc]) {
        document.writeln("Empate <br>");
    } else if (usuario == "PIEDRA" && opciones[pc] == "TIJERA") {
        document.writeln("El jugador gana <br>");
    } else if (usuario == "PAPEL" && opciones[pc] == "PIEDRA") {
        document.writeln("El jugador gana <br>");
    } else if (usuario == "TIJERA" && opciones[pc] == "PAPEL") {
        document.writeln("El jugador gana <br>");
    } else {
        document.writeln("El PC gana <br>");
    }
}
// piedraPapelTijera();
// 36. Crea una función que devuelva el número PI con dos decimales. Utiliza la variable PI que ya existe en javascript

function  pi() {
    return Math.PI.toFixed(2);
    // toFixed(2) devuelve el número con dos decimales
}
// document.writeln(`El número PI es: ${pi()} <br>`);

// 37. Crea una función que reciba un parámetro, un dni, y devuelva la letra del mismo. Si el dni pasado tiene algún error devolverá “”.
// Un DNI es un identificador que consta de ocho cifras numéricas y una letra que actúa como dígito de control.Se toma la parte del numero del documento y se divide entre 23 y se obtiene el resto. Ejemplo 88723267P
// Resto Letra
// 0 	T
// 1 	R
// 2 	W
// 3 	A
// 4 	G
// 5 	M
// 6 	Y
// 7 	F
// 8 	P
// 9 	D
// 10 	X
// 11 	B
// 12 	N
// 13 	J
// 14 	Z
// 15 	S
// 16 	Q
// 17 	V
// 18 	H
// 19 	L
// 20 	C
// 21 	K
// 22 	E

function letraDNI(dni) {
    if (dni.length != 9) {
        return "";
    } else {
        dni = parseInt(dni.substring(0, 8));
        letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        resto = dni % 23;
        return letras.charAt(resto);
    }
}
// dni = prompt("Introduce un DNI: ");
// document.writeln(`La letra del DNI ${dni} es: ${letraDNI(dni)} <br>`);

// 38. Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.

// El tipo general de IVA es el 21%. Los tipos reducidos vigentes son el 10% y el 4% (también se aplican el 5% y el 0% a determinadas operaciones).

function precioConIva(precio, iva) {
    if (iva == "" || iva == null || iva == undefined || isNaN(iva)) {
        iva = 21;
        return precio + (precio * iva / 100);
    } else  
        return precio + (precio * iva / 100);
    
    
}
//  precio = parseInt(prompt("Introduce un precio: "));
//  iva = parseInt(prompt("Introduce un IVA: "));

// document.writeln(`El precio con IVA es: ${precioConIva(precio, iva)} <br>`);

// 39. Crea una función que reciba un texto y lo devuelva al revés
function textoAlReves(texto) {
    textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto.charAt(i);
    }
    return textoInvertido;
}
// texto = prompt("Introduce un texto: ");
// document.writeln(`${texto} ==> al revés es: ${textoAlReves(texto)} <br>`);

// 40. Crea una función que genere número entero aleatorio entre min y max, que serán pasados como parámetros. Por defecto min = 1 y max = 100 
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // floor devuelve el número entero menor o igual al número
}
// min = parseInt(prompt("Introduce un número mínimo: "));
// max = parseInt(prompt("Introduce un número máximo: "));
// document.writeln(`El número aleatorio entre ${min} y ${max} es: ${numeroAleatorio(min, max)} <br>`);

// 41. Crea una función que genere 100 números aleatorios entre 1 y 1000 que no se repitan y luego muestralos por pantalla 

function numerosAleatorios() {
    numeros =[];
    while (numeros.length < 5) {
        numAleatorio = Math.floor(Math.random() * 5) + 1;
        // Si el número ya existe en el array, generamos otro número aleatorio
        if (!numeros.includes(numAleatorio)) {
            numeros.push(numAleatorio);
            document.writeln(`${numAleatorio} <br>`);
        }
    }
}
// numerosAleatorios();
// 42. Realiza un script que escriba en el documento la fecha y hora actual. La salida deberá tener el siguiente formato:  Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas. 

function fechaHoraActual() {
    fecha = new Date();
    dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    document.writeln(`Hoy es ${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()} horas. <br>`);
   
   // getDay() devuelve el día de la semana (0-6) 0 es domingo, 1 es lunes, 2 es martes, 3 es miércoles, 4 es jueves, 5 es viernes, 6 es sábado
}
// fechaHoraActual();

// 43. Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos. La salida sería algo así como: En introducir Luís Perez Alonso ha tardado 25 segundos. 

function tiempoIntroducirDatos() {
    tiempoInicio = new Date().getSeconds();
    nombre = prompt("Introduce tu nombre: ");
    apellidos = prompt("Introduce tus apellidos: ");
    tiempoFin = new Date().getSeconds();
    document.writeln(`En introducir ${nombre} ${apellidos} ha tardado ${tiempoFin - tiempoInicio} segundos. <br>`); 
}
// tiempoIntroducirDatos();

// 44. Realiza un script pida un mes y año e imprima su calendario. No hace falta esmerarse en la presentación del calendario, el calendario simplificado puede ser del tipo:  OCTUBRE – 2014  1 (miercoles), 2 (jueves), ….. , 31 (viernes). 

function imprimirCalendario() {
    mes = prompt("Introduce un mes: ");
    anio = prompt("Introduce un año: ");
    fecha = new Date(anio, mes - 1, 1);
    dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    document.writeln(`${mes} - ${anio} <br> <br>`);
    document.writeln("----------------------------------------------------------------------------- <br>");
    document.writeln("Domingo | Lunes | Martes | Miércoles | Jueves | Viernes | Sábado <br>");
    document.writeln("----------------------------------------------------------------------------- <br>");
    
    while (fecha.getMonth() == mes - 1) {
        // getMonth() devuelve el mes (0-11) 0 es enero
        document.writeln(`${fecha.getDate()}   (${dias[fecha.getDay()]}) | `);
        if (fecha.getDay() == 6) {
            // getDay() devuelve el día de la semana (0-6) 0 es domingo
            document.writeln("<br>");
        }
        fecha.setDate(fecha.getDate() + 1);
    }
} 
// imprimirCalendario();
// 45. Realiza un script que pida una fecha y muestre tres fechas que sean la fecha introducida a 30, 60 y 90 días. 
function fechasFuturas() {
    fechaUsr = prompt("Introduce una fecha (dd/mm/aaaa): ");
    fecha = fechaUsr.split("/");
    //  split("/") divide la cadena en un array de cadenas
    dia = parseInt(fecha[0]);
    mes = parseInt(fecha[1]);
    anio = parseInt(fecha[2]);
    fecha = new Date(anio, mes, dia);
    document.writeln(`La fecha introducida es: ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} <br>`);
    fecha.setDate(fecha.getDate() + 30);
    document.writeln(`La fecha dentro de 30 días es: ${fecha.getDate()} <br>`);
    fecha.setDate(fecha.getDate() + 60);
    document.writeln(`La fecha dentro de 60 días es: ${fecha.getDate()} <br>`);
    fecha.setDate(fecha.getDate() + 90);
    document.writeln(`La fecha dentro de 90 días es: ${fecha.getDate()} <br>`);
}

// fechasFuturas();

// 46. Realiza un script que muestre un reloj en pantalla con fecha y hora y que se actualice cada segundo. Función setTimeout().

function reloj() {
    fecha = new Date();
    document.getElementById("reloj").innerHTML= `Hoy es ${fecha.getDate()} / ${fecha.getMonth()} / ${fecha.getFullYear()} y son las ${fecha.toLocaleTimeString()} hrs. <br>`;
    
}
setInterval(reloj ,1000);
