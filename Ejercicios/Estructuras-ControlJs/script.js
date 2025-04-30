let pregunta1 = document.querySelector("#pregunta1");
let pregunta2 = document.querySelector("#pregunta2");
let pregunta3 = document.querySelector("#pregunta3");
let pregunta4 = document.querySelector("#pregunta4");
let pregunta5 = document.querySelector("#pregunta5");
let pregunta6 = document.querySelector("#pregunta6");
let pregunta7 = document.querySelector("#pregunta7");
let pregunta8 = document.querySelector("#pregunta8");
let pregunta9 = document.querySelector("#pregunta9");
let pregunta10 = document.querySelector("#pregunta10");
let pregunta11 = document.querySelector("#pregunta11");
let pregunta12 = document.querySelector("#pregunta12");
let pregunta13 = document.querySelector("#pregunta13");
let pregunta14 = document.querySelector("#pregunta14");
let pregunta15 = document.querySelector("#pregunta15");

//1.- Pregunta dos numeros mediante prompt y muestra el mayor de ambos mediante una condicion if
function numeroMayor() {
    let num1 = parseInt(prompt("Ingrese el primer número:"));
    let num2 = parseInt(prompt("Ingrese el segundo número:"));
    if (num1 > num2) {
        pregunta1.innerHTML = `Sol 1.- El número mayor es primer numero: ${num1}`;
        pregunta1.style.color = "green";
    }
    if (num1 < num2) {
        pregunta1.innerHTML = `Sol 1.- El número mayor es el segundo numero: ${num2}`;
        pregunta1.style.color = "blue";
    }
}
// numeroMayor();
//2.- Pregunta dos numeros mediante prompt y muestra el mayor y el menor mediante una condicion if else
function mayorMenor() {
    let num3 = parseInt(prompt("Ingrese el primer número:"));
    let num4 = parseInt(prompt("Ingrese el segundo número:"));
    if (num3 == num4) {
        pregunta2.innerHTML = `Sol 2.- Ambos números son iguales: ${num3}`;
        pregunta2.style.color = "red";
    } else if (num3 > num4 ) {
        pregunta2.innerHTML = `Sol 2.- El número mayor es: ${num3} y el menor es: ${num4}`;
        pregunta2.style.color = "green";
        
    } else {
        pregunta2.innerHTML = `Sol 2.- El número mayor es e: ${num4} y el menor es: ${num3}`;
        pregunta2.style.color = "blue";
    }
}
// mayorMenor();
// 3.- Pregunta un numero de 0 a 100 y mediante un switch responde a que decena pertenece   
 function decena() {
    let num1 = parseInt(prompt("Ingrese un número del 0 al 100:"));
    switch (true) {
        case (num1 >= 0 && num1 <= 9):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la primera decena entre 0 y 9`;
            break;
        case (num1 >= 10 && num1 <= 19):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la segunda decena entre 10 y 19`;
            break;
        case (num1 >= 20 && num1 <= 29):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la tercera decena entre 20 y 29`;
            break;
        case (num1 >= 30 && num1 <= 39):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la cuarta decena entre 30 y 39`;
            break;
        case (num1 >= 40 && num1 <= 49):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la quinta decena entre 40 y 49`;
            break;
        case (num1 >= 50 && num1 <= 59):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la sexta decena entre 50 y 59`;
            break;
        case (num1 >= 60 && num1 <= 69):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la septima decena entre 60 y 69`;
            break;
        case (num1 >= 70 && num1 <= 79):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la octava decena entre 70 y 79`;
            break;
        case (num1 >= 80 && num1 <=89):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la novena decena entre 80 y 89`;
            break;
        case (num1 >= 90 && num1 <= 100):
            pregunta3.innerHTML = `Sol 3.- El número ${num1} pertenece a la decima decena entre 90 y 100`;
            break;
        default:
            pregunta3.innerHTML = `Sol 3.- El número ${num1} no pertenece a ninguna decena entre 0 y 100`;
            pregunta3.style.color = "red";
            break;
 }
}
// decena();
// 4.- Pregunta un nombre de usuario mediante prompt y si es correcto, pregunta la contraseña de accseso. if

function nombreUsuario() {
    let usuario = prompt("Ingrese su nombre de usuario:");
    if (usuario == "admin") {
        let contrasena = prompt("Ingrese su contraseña:");
        if (contrasena == "1234") {
            pregunta4.innerHTML = `Sol 4.- Bienvenido ${usuario}`;
            pregunta4.style.color = "green";
        } else {
            pregunta4.innerHTML = `Sol 4.- Contraseña incorrecta`;
            pregunta4.style.color = "red";
        }
    } else {
        pregunta4.innerHTML = `Sol 4.- Usuario incorrecto`;
        pregunta4.style.color = "red";
    }
    
}
// nombreUsuario();
// 5.-adivina un  numero de 0 a 10 en 3 intentos con for, prompt,if,else if, else tantas veces como necesites.

function adivinaNumero() {
    let numeroSecreto = Math.floor(Math.random() * 11);
    // console.log(`Número secreto: ${numeroSecreto}`); // Para depuración
    intentos = 3;
    let adivinado = false;
    for (let i = 1; i <= intentos; i++) {
        let numeroUsuario = parseInt(prompt("Adivina el número entre 0 y 10:"));
        if (numeroUsuario == numeroSecreto) {
            pregunta5.innerHTML = `Sol 5.- ¡Felicidades! Adivinaste el número ${numeroSecreto} en ${i} intentos.`;
            pregunta5.style.color = "green";
            adivinado = true;
            break;
        } else if (numeroUsuario < numeroSecreto) {
            alert( `Sol 5.- El número es mayor. Te quedan ${intentos - i} intentos.`);
            pregunta5.style.color = "blue";
        } else {
            alert(`Sol 5.- El número es menor. Te quedan ${intentos - i} intentos.`); 
            pregunta5.style.color = "blue";
        }
    }
    if (!adivinado) {
        pregunta5.innerHTML = `Sol 5.- Lo siento, no adivinaste el número. Era ${numeroSecreto}.`;
        pregunta5.style.color = "red";
    }
    
}

// adivinaNumero();
// 6.- Crea una secuencia de diez numeros consecutivos en pantalla mediante un bucle for.
function secuenciaConsecutivos() {
    pregunta6.innerHTML = `Sol 6.- Secuencia de números consecutivos es:`;
    for (let i = 10; i < 21; i ++) {
        pregunta6.innerHTML += ` ${i}`;
    }   
}
// secuenciaConsecutivos();
// 7.- Crea una secuencia de veinte numeros de cinco en cinco en pantalla mediante un bucle for.

function secuenciaCinco() {
    pregunta7.innerHTML = `Sol 7.- Secuencia de números de cinco en cinco es:`;
    for (let i = 100; i < 200; i += 5) {
        pregunta7.innerHTML += ` ${i},`;
    }   
}
// secuenciaCinco();
// 8.- Muestra en pantalla cinco veces un solo mensaje modal de conformacion mediante un bucle while.
function mensajeModal() {
    let i = 0;
    while (i < 5) {
        confirm(`Sol 8.- Este es un mensaje de confirmación nº ${i+1}.` );
        i++;
    }
}
// mensajeModal();
// 9.- Solicita con un mensaje prompt que pregunte las veces que repites un alert mediante un bucle while
function mensajeAlert() {
    let veces = parseInt(prompt("¿Cuántas veces quieres repetir el mensaje?"));
    let i = 0;
    while (i < veces) {
        alert(`Sol 9.- Este es el mensaje nº ${i+1}.`);
        i++;
    }
}
// mensajeAlert();
// 10.- Solicita con un mensaje prompt si quieres salir de un do while que muestre un alert si no sale
function salir() {
    let salir = false;
    do {
        mensajeSalir = prompt("Sol 10.- ¿Quieres salir del programa? (si/no)");
        if (mensajeSalir == "si") {
            salir = true;
        }
        if (mensajeSalir == "no") {
            alert("Sol 10.- No sale!");
            salir = false;
        }
    } while (!salir);
}
// salir();
// 11.- Act.- Pide nombre y edad al usuario. Utiliza if o un switch para contestar a que franja de edad pertence: 0-11 niño, 12-17 adolecente, 18-29 joven,30-39 mediana edad, 40-64 maduro y mas de 65 tercera edad. muestra en un alert con un mensaje con el nombre , la edad y la franja de edad interpolando variables.
function edad() {
    let nombre = prompt("Ingrese su nombre:");
    let edad = parseInt(prompt("Ingrese su edad:"));
    let franjaEdad;

    if (edad >= 0 && edad <= 11) {
        franjaEdad = "niño";
    } else if (edad >= 12 && edad <= 17) {
        franjaEdad = "adolescente";
    } else if (edad >= 18 && edad <= 29) {
        franjaEdad = "joven";
    } else if (edad >= 30 && edad <= 39) {
        franjaEdad = "mediana edad";
    } else if (edad >= 40 && edad <= 64) {
        franjaEdad = "maduro";
    } else if (edad >= 65) {
        franjaEdad = "tercera edad";
    } else {
        franjaEdad = "edad no válida";
    }

    alert(`Sol 11.- Hola ${nombre}, tienes ${edad} años y perteneces a la franja de edad: ${franjaEdad}.`);
    pregunta11.innerHTML = `Sol 11.- Hola ${nombre}, tienes ${edad} años y perteneces a la franja de edad: ${franjaEdad}.`;
}

// edad();
// 12.- Act.- Pide un mes del año y responde a que estacion metereologica pertecene y a que signo Zodiacal puede pertenecer tambien. NOTA: cada mes puede pertenecer a dos signos zodiacales y cuatro meses pertecneces a dos estaciones diferentes tambien.

/*  Estaciones del año en España 
    Primavera: inicia el 20 de marzo al 21 de junio. 
    Verano: inicia el 21 de junio y finaliza el 23 de septiembre.
    Otoño: inicia el 23 de septiembre y finaliza el 21 de diciembre.
    Invierno: inicia el 21 de diciembre y finaliza el 20 de marzo. */

/*  Aries: del 21 de marzo al 19 de abril.
    Tauro: del 20 de abril al 20 de mayo.
    Géminis: del 21 de mayo al 20 de junio.
    Cáncer: del 21 de junio al 22 de julio.
    Leo: del 23 de julio al 22 de agosto.
    Virgo: del 23 de agosto al 22 de septiembre.
    Libra: del 23 de septiembre al 22 de octubre.
    Escorpio: del 23 de octubre al 21 de noviembre.
    Sagitario: del 22 de noviembre al 21 de diciembre.
    Capricornio: del 22 de diciembre al 19 de enero.
    Acuario: del 20 de enero al 18 de febrero.
    Piscis: del 19 de febrero al 20 de marzo.
*/
function estacionZodiacal() {
    let mes = parseInt(prompt("Ingrese el mes del año (1-12):"));
    if (mes >=3 && mes <= 6) {
            if (mes == 3) {
            pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al invierno y primavera.
            Signo Zodiacal: Aries y Piscis. </pre>`;
            }else if (mes == 4) {
            pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece a la primavera .
            Signo Zodiacal: Aries y Tauro </pre>`;
            }else if (mes == 5) {
            pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece a la primavera .
            Signo Zodiacal: Tauro y Géminis </pre>`;
            }else if (mes == 6) {
            pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece a la primavera y verano.
            Signo Zodiacal: Géminis y Cancer  </pre>`;  
            }
    } else if (mes > 6 && mes <= 9) {
        if (mes == 7) {
        pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al verano.
        Signo Zodiacal: Cancer y Leo </pre>`;
        }else if (mes == 8) {
        pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al verano.
        Signo Zodiacal: Leo y Virgo </pre>`;
        }else if (mes == 9) {
        pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al verano y otoño.
        Signo Zodiacal: Virgo y Libra </pre>`;
        }
    }else if (mes > 9 && mes <= 12) {
        if (mes == 10) {
        pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al otoño.
            Signo Zodiacal: Libra y Escorpio </pre>`;
        }else if (mes == 11) { 
        pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al otoño.
            Signo Zodiacal: Escorpio y Sagitario </pre>`;
        }else if (mes == 12) {
        pregunta12.innerHTML = `<pre>   Sol 12.- El mes ${mes} pertenece al otoño y invierno.
            Signo Zodiacal: Sagitario y Capricornio </pre>`;
        }
    } else if (mes > 12 || mes <= 2) {
        if (mes == 1 || mes == 2) {
        pregunta12.innerHTML = `Sol 12.- El mes ${mes} pertenece al invierno.`;
        }
    }
}
// estacionZodiacal();
// 13.- Act.- Modifica el ejercicio anterior para que muestre exactamente el mes y el sodiaco que corresponda
// ejemplo: si el usuario ingresa 3, el programa debe mostrar que el mes es marzo y que su signo zodiacal es aries o piscis.
function zodiaco() {
    let mes = parseInt(prompt("Ingrese el mes del año (1-12):"));
    let signoZodiacal;
    switch (mes) {
        case 1:
            mesNombre = "Enero";
            signoZodiacal = "Capricornio o Acuario";
            break;
        case 2:
            mesNombre = "Febrero";
            signoZodiacal = "Acuario o Piscis";
            break;
        case 3:
            mesNombre = "Marzo";
            signoZodiacal = "Piscis o Aries";
            break;
        case 4:
            mesNombre = "Abril";
            signoZodiacal = "Aries o Tauro";
            break;
        case 5:
            mesNombre = "Mayo";
            signoZodiacal = "Tauro o Géminis";
            break;
        case 6:
            mesNombre = "Junio";
            signoZodiacal = "Géminis o Cáncer";
            break;
        case 7:
            mesNombre = "Julio";
            signoZodiacal = "Cáncer o Leo";
            break;
        case 8:
            mesNombre = "Agosto";
            signoZodiacal = "Leo o Virgo";
            break;
        case 9:
            mesNombre = "Septiembre";
            signoZodiacal = "Virgo o Libra";
            break;
        case 10:
            mesNombre = "Octubre";
            signoZodiacal = "Libra o Escorpio";
            break;
        case 11:
            mesNombre = "Noviembre";
            signoZodiacal = "Escorpio o Sagitario";
            break;
        case 12:
            mesNombre = "Diciembre";
            signoZodiacal = "Sagitario o Capricornio";
            break;
        default:
            mesNombre = "Mes no válido";
            signoZodiacal = "Signo no válido";
            break;
    }
    if (mesNombre !== "Mes no válido") {
        pregunta13.innerHTML = `Sol 13.- El mes es ${mesNombre} y su signo zodiacal es ${signoZodiacal}.`;
    } else {
        pregunta13.innerHTML = `Sol 13.- ${mesNombre} signo zodiacal es ${signoZodiacal}.`;
        pregunta13.style.color = "red";
    }
    
   
}
// zodiaco();
// 14.- Crea una estructura while que pregunte una letra del abcedario y nos muestre si el vocal o consonante. La pregunta se debe realizar indefinidamente mientras no pulse la 's' o la 'S'. 
function vocalConsonante() {
    let letra;
    let continuar = true;
    while (continuar) {
        let letraIngresada = prompt("Ingrese una letra del abecedario ('s' ó 'S' para salir):");
        letra = letraIngresada.toLocaleLowerCase();
        if (letra == 's') {
            continuar = false;
        } else if ("aeiou".includes(letra)) {
            alert(`La letra ${letraIngresada} es una vocal.`);
            } else {
            alert(`La letra ${letraIngresada} es una consonante.`);
            }
            }
}
// vocalConsonante();
// 15.- Muestra por pantalla todos los multiplos de 2 que hay entre 0 y 100 . luego los multiplos de 7.
function multiplos() {
    let multiplos2 = "<pre>    Sol 15.- Múltiplos de 2 entre 0 y 100: <br></pre>";
    let multiplos7 = "<pre>    Múltiplos de 7 entre 0 y 100: <br></pre> ";
    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            multiplos2 += `${i}, `;
        }
        if (i % 7 == 0) {
            multiplos7 += `${i}, `;
        }
    }
    pregunta15.innerHTML = `${multiplos2} ${multiplos7}`;
    pregunta15.style.fontSize = "1rem";
}
multiplos();