const nombre = document.querySelector('#nombre');
const apellido1 = document.querySelector('#apellido1');
const apellido2 = document.querySelector('#apellido2');
const nomCompleto = document.querySelector('#nombre-completo');
//campos del segundo fieldset
const nie = document.querySelector('#nif-nie');
const telf = document.querySelector('#telefono');
const email = document.querySelector('#correo-electronico');
const out = document.querySelector('#out');

// funcion para mostrar el nombre completo en el campor nomCompleto
function mostrarNombreCompleto() {
    let nombreout = '';
    let apellido1out = '';
    let apellido2out = '';
    if (nombre.value.length < 3 ) {
         nombreout = "Nombre incompleto";
    } else nombreout = nombre.value;
    if (apellido1.value.length < 3) {
         apellido1out = "Apellido1 incompleto";
         
    }else  apellido1out = apellido1.value;
    if (apellido2.value.length < 3) {
        apellido2out = "Apellido2 incompleto";
    }else  apellido2out = apellido2.value;

    nomCompleto.value = `${nombreout} ${apellido1out} ${apellido2out}`;
}
// agregar un evento al salir del campo nombre y mostrar el nombre completo ycalcular la letra del dni
nombre.addEventListener('blur', () => {
    mostrarNombreCompleto();
});
// agregar un evento al cambiar el campo apellido1
apellido1.addEventListener('change', mostrarNombreCompleto);
// agregar un evento al cambiar el campo apellido2
apellido2.addEventListener('change', mostrarNombreCompleto);


// evento al pasar y quitar el ratón por encima del campos resaltar la sombras 
nombre.addEventListener('mouseover', () => { nombre.style.boxShadow = '0 0 10px blue';});
nombre.addEventListener('mouseout', () => {nombre.style.boxShadow = ''; });

apellido1.addEventListener('mouseover', () => { apellido1.style.boxShadow = '0 0 10px blue';});
apellido1.addEventListener('mouseout', () => {apellido1.style.boxShadow = ''; });
apellido2.addEventListener('mouseover', () => { apellido2.style.boxShadow = '0 0 10px blue';});
apellido2.addEventListener('mouseout', () => {apellido2.style.boxShadow = ''; });

//eventos al los campos del segundo fieldset

nie.addEventListener('mouseover', () => { nie.style.boxShadow = '0 0 10px blue';});
nie.addEventListener('mouseout', () => { nie.style.boxShadow = ''; });
telf.addEventListener('mouseover', () => { telf.style.boxShadow = '0 0 10px blue';});
telf.addEventListener('mouseout', () => {telf.style.boxShadow = ''; });
email.addEventListener('mouseover', () => { email.style.boxShadow = '0 0 10px blue';});
email.addEventListener('mouseout', () => {email.style.boxShadow = ''; });




//agreagar evento al salir del campo nie
nie.addEventListener('blur',()=>{
    calcularLetraDNI();
    mostrarDatos();
} );
// agregar evento al salir del campo telf
telf.addEventListener('blur', mostrarDatos);
// agregar evento al salir del campo email
email.addEventListener('blur', mostrarDatos);

// funcion para mostrar los datos en el campo out
function mostrarDatos() {
       out.value = `${auxOut} / ${telf.value} / ${email.value}`;
}

//calcular la letra del dni ejm 02345678T
nie.addEventListener('blur', calcularLetraDNI);
let auxOut = nie.value; // Variable para almacenar el resultado de la letra del DNI

//evento para validar el campo NIE para que solo se introduzcan números y la longitud sea de 8 dígitos y positivos
nie.addEventListener('input', function() {
    if (nie.value.length > 8 || nie.value < 0) {
        nie.value = nie.value.slice(0, 8);
        if (nie.value < 0 ) {
            nie.value = '';
            auxOut = 'DNI no válido';
        }
    }
});

function calcularLetraDNI() {
    const dni  = document.querySelector('#nif-nie').value;
    const dniNumerico = String(dni); // Convertir el valor del campo NIE a cadena de texto para evitar que el usuario introduzca un número de 8 dígitos
// console.log(`El valor del campo NIE es: ${dniNumerico}`);

    if ( dniNumerico.length==8 && dni <= 99999999) {
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const letra = letras[dni % 23];
        auxOut = `${dni}${letra}`;
    } else {
        nie.value = '';
        auxOut = 'DNI no válido';
    }
}


//evento al pasar por encima de los botones
const btns = document.querySelectorAll('form>input[type="submit"],input[type="reset"]');
btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.boxShadow = '0 0 10px white';
        btn.style.backgroundColor = '#1f2e80';
        btn.style.cursor = 'pointer';
        btn.style.fontSize= '0.9rem';
        btn.style.transition= ' all 0.3s ease';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.boxShadow = '';
        btn.style.backgroundColor = '#05156b';
        btn.style.fontSize= '13.3333px';
        btn.style.transform= 'scale(1)';
    });
});