let pares = [];
export function nrosPares() {
    console.log('Ejercicio 6.2');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 6.2'
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) pares.push(i)
    }
    console.log(`Primeros 10 números pares: ${pares.join(', ')}`);
}