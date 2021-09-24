/*document.write('Hola desde javascript');*/

/**
 * Devuelve un arreglo de los elementos que tienen esa etiqueta.
 */
/*
const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Titulo cambiado desde Javascript';

const texto = document.getElementById('text');
texto.innerHTML = 'Este texto esta escrito desde javascript';
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(title)
*/

/**
 * textContent = '' // Hace referencia al elemento.
 * innerHTML = '' // Vuelve el texto visible que contiene el nodo.
 * Seleccionar id : '#' - Seleccionar clase: '.' ;
*/

/**
 * Obtiene un elemnto por id.
 */
document.getElementById
/**
 * Obtiene todos los elementos de una clase y devuelve un arreglo.
 */
document.getElementsByClassName
/**
 * Obtiene todos los elementos por nombre y devuelve un arreglo.
 */
document.getElementsByName


const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde javascript';

/**
 * Crear elemtos html.
 */
const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);