export function esPar(nro) {
    console.log('Ejercicio 4.1');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 4.1'
    
    console.log(`El número ${nro} es par: ${nro%2===0}`);
}