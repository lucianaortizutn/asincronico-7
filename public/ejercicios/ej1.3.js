export function saludar() {
    console.log('Ejercicio 1.3');
    const ejercicio = document.getElementById('ejercicio')

    ejercicio.textContent  = 'Ejercicio 1.3'
    let nombre = prompt("¿Cuál es tu nombre?");
    console.log(`Hola, ${nombre}!`);
}