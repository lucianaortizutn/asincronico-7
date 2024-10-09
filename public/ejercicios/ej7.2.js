export function alerta() {
    console.log('Ejercicio 7.2')
    const app = document.getElementById('app')
    
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 7.2'

    const form = document.createElement('form')

    const inputText = document.createElement('input')
    inputText.type = 'text'
    inputText.placeholder = 'Ingresa un texto'
    inputText.id = 'campoTexto'

    const button = document.createElement('button')
    button.type = 'button'
    button.textContent = 'Mostrar valor'

    button.onclick = function() {
        const valorIngresado = document.getElementById('campoTexto').value
        alert(`El valor ingresado es: ${valorIngresado}`)
    }

    form.appendChild(inputText)
    form.appendChild(button)

    app.appendChild(form)
}