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
