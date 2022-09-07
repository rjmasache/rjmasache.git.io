/*
const titulo = document.querySelector('h1');
titulo.textContent = 'Hola mundo con JavaScript';
 */

let mascota = 'Gato';

if (mascota === 'Gato') {
    console.log('Adoro a los gatos');
} else {
    console.log('Prefiero a los gatos');
}

function multiplicarNumeros(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplicarNumeros(5, 2));

/*
document.querySelector('html').onclick = function () {
    alert('Mi primer Evento con JavaScript');
}
 */

let miImagen = document.querySelector('img');
miImagen.onclick = function () {
    let miSrc = miImagen.getAttribute('src');
    if (miSrc === 'images/bmw-motorcycle.jpg') {
        miImagen.setAttribute('src', 'images/bmw-cafe-racer.jpeg');
    } else {
        miImagen.setAttribute('src', 'images/bmw-motorcycle.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre');
    if (!miNombre) {
        establecerNombreUsuario()
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Bienvenido/a, ' + miNombre + ' , es un placer';
    }
}

if (!localStorage.getItem('nombre')) {
    establecerNombreUsuario()
} else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bienvenido/a, ' + nombreAlmacenado + ' , es un placer';
}

miBoton.onclick = function () {
    establecerNombreUsuario();
}
