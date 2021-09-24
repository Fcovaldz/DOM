/**
 * Leer el valor introducido y verificar si es mayor de edad.
 */
function mayor_edad() {
    var edad = document.getElementById('edad').value;

    if(edad < 18) {
        document.getElementById('area').value = "Eres menor de edad, tienes " + edad + " años";
    } else {
        document.getElementById('area').value = "Eres mayor de edad, tienes " + edad + " años";
    }
}