export function convertirCelsiusAFahrenheit(tempC) {
    console.log('Ejercicio 4.2');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 4.2'
    let tempF = tempC * 1.8 + 32
    console.log(`${tempC}°C son equivalentes a ${tempF}°F`);
}