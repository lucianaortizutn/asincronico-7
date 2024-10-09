export function bucleWhile() {
    console.log('Ejercicio 3.1');
    const ejercicio = document.getElementById('ejercicio')

    ejercicio.textContent  = 'Ejercicio 3.1'
    let i = 10
    while (i>0) {
        console.log(i);
        i -= 1
    }
}