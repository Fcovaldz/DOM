/**
 * Colocar una lista en el documento HTML,
 * Colocar un boton que diga agregar elemnto.
 * Cada ves que le den clic al boton debe agregar un elemento a la lista.
 */

/**
 * $("#btn").addEventListener("click", function(){
    var input = document.createElement("input");
    /**console.log(input); 
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "Email");
    input.setAttribute("name", "email");
    
    $("#form").appendChild(input);
})


function $(selector){
    return document.querySelector(selector);
}
 */

const $btn = document.querySelector('#btn');
const $lista = document.querySelector('#lista');

$btn.addEventListener('click', () => {
    /*
     * createElement(): Crear elemento.
     */
    const listElem = document.createElement('li');
    /*
     * text.Content: Agrega contenido al elemento.
     */
    listElem.textContent = 'Nuevo elemento';
    /*
     * appendChild(): Agrega elemento a la lista.
     */
    $lista.appendChild(listElem);
});