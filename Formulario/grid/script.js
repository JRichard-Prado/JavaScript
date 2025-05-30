const nombre = document.querySelector('#nombre');
const apellido1 = document.querySelector('#apellido1');
const apellido2 = document.querySelector('#apellido2');
const nomCompleto = document.querySelector('#nombre-completo');
//
const nie = document.querySelector('#nif-nie');
const telf = document.querySelector('#telefono');
const email = document.querySelector('#correo-electronico');
const out = document.querySelector('#out');

// funcion para mostrar el nombre completo en el campor nomCompleto
function mostrarNombreCompleto() {
    nomCompleto.value = `${nombre.value} ${apellido1.value} ${apellido2.value}`;
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

//segundo fieldset

nie.addEventListener('mouseover', () => { nie.style.boxShadow = '0 0 10px blue';});
nie.addEventListener('mouseout', () => { nie.style.boxShadow = ''; });
telf.addEventListener('mouseover', () => { telf.style.boxShadow = '0 0 10px blue';});
telf.addEventListener('mouseout', () => {telf.style.boxShadow = ''; });
email.addEventListener('mouseover', () => { email.style.boxShadow = '0 0 10px blue';});
email.addEventListener('mouseout', () => {email.style.boxShadow = ''; });

//funcion para mostrar los datos en el campo out


//agreagar evento al salir del campo nie
nie.addEventListener('blur',()=>{
    calcularLetraDNI();
    mostrarDatos();
} );
// agregar evento al salir del campo telf
telf.addEventListener('blur', mostrarDatos);
// agregar evento al salir del campo email
email.addEventListener('blur', mostrarDatos);


//calcular la letra del dni ejm 12345678Z
nie.addEventListener('blur', calcularLetraDNI);
let auxOut = nie.value; // Variable para almacenar el resultado de la letra del DNI
function calcularLetraDNI() {
     const dni  = document.querySelector('#nif-nie').value;
    if ( dni <= 99999999) {
        const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
        const letra = letras[dni % 23];
        auxOut = `${dni}${letra}`;
    } else {
        auxOut = 'DNI no válido';
    }
}

function mostrarDatos() {
    out.value = ` ${auxOut} / ${telf.value} / ${email.value}`;
}

//evento al pasar por encima de los botones
const btns = document.querySelectorAll('form>input[type="button"],input[type="reset"]');
btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.boxShadow = '0 0 10px white';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.boxShadow = '';
    });
});