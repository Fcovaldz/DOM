/**
 * "$" = Hace referencia a elemento del HTML.
 */
const $btn = document.querySelector('#btn');
/**
 * Manera de agregar un elemento al elemento.
 * ('click') = Pulsar y soltar el ratón.
 * Palabra reservada.
 */
$btn.addEventListener('mouseover', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');
/**
 * ('keydown') = Pulsar una tecla (sin soltar).
 * Es una palabra reservada.
 */
$inpText.addEventListener('keyup', (e) => {
   /** "e" = hace referencia a evento */
    console.log(e.target.value);
});