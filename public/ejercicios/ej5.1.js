let persona = {
    nombre: 'Luciana Ortiz',
    edad: 24,
    ciudad: 'Guaymallén'
}

export function cambiarCiudad(ciudadNueva) {
    console.log('Ejercicio 5.1');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 5.1'
    console.log(`Antes del cambio: \n Persona: ${persona.nombre}, edad: ${persona.edad}, ciudad: ${persona.ciudad}`);
    persona.ciudad = ciudadNueva;
    console.log(`Después del cambio: \n Persona: ${persona.nombre}, edad: ${persona.edad}, ciudad: ${persona.ciudad}`);
}