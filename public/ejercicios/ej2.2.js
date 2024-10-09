export function parOImpar() {
    console.log('Ejercicio 2.2');
    const ejercicio = document.getElementById('ejercicio')

    ejercicio.textContent  = 'Ejercicio 2.2'
    let nro = prompt("Ingresa un número y te diré si es par o impar");
    if (nro % 2 === 0) console.log(`El número ${nro} es par.`)
    else  console.log(`El número ${nro} es impar.`)
}