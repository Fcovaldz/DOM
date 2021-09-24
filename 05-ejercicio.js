const $body = document.querySelector('body');
const $selectColor = document.querySelector('#colores');

$selectColor.addEventListener('change', (e) => {
    if(e.target.value === 'crimson') {
        $body.className = '';
        $body.classList.add('crimson');
    } else if(e.target.value === 'aqua') {
        $body.className = '';
        $body.classList.add('aqua');
    } else if(e.target.value === 'green') {
        $body.className = '';
        $body.classList.add('green');
    }
});