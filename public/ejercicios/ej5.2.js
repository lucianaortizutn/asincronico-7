export function libroAntiguo(nombre, anio) {
    console.log('Ejercicio 5.2');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 5.2'
    let difAnio = new Date().getFullYear() - anio;
    console.log(`El libro ${nombre} es antiguo: ${difAnio >= 10}`);
}