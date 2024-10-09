const numeros = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

let numerosMultiplicados = []

export function arrays() {
    console.log('Ejercicio 6.1');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 6.1'
    console.log('Números originales: ', numeros.join(', '));
    for (let i = 0; i < numeros.length; i++) {
        numerosMultiplicados[i] = numeros[i] * 2; // Multiplica por 2 y almacena en el nuevo array
    }
    console.log('Números multiplicados por 2: ', numerosMultiplicados.join(', '));
}