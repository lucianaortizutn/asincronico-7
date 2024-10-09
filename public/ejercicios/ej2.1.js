export function mayor() {
    console.log('Ejercicio 2.1');
    const ejercicio = document.getElementById('ejercicio')

    ejercicio.textContent  = 'Ejercicio 2.1'
    let a = 6;
    let b = 8;
    let c = 5;

    if (a > b && a > c) {
        console.log("El mayor de los tres números es: ", a);
    } else if (b > a && b > c) {
        console.log("El mayor de los tres números es: ", b);
    } else if (c > a && c > b) {
        console.log("El mayor de los tres números es: ", c);
    }
}