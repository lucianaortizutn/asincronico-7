export function mayorA100() {
    console.log('Ejercicio 3.2');
    const ejercicio = document.getElementById('ejercicio')

    ejercicio.textContent  = 'Ejercicio 3.2'
    let nro = 0
    do {
        nro = prompt("Ingresa un número mayor a 100");
        if (nro > 100) console.log(`Ingresaste un número mayor a 100: ${nro}`);
    } while (nro <= 100);
}