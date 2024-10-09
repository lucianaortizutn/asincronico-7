export function disabledInput() {
    console.log('Ejercicio 8.2')
    
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 8.2'

    const app = document.getElementById('app');

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.placeholder = 'Ingresa algo';
    inputText.id = 'campoTexto';

    const disableButton = document.createElement('button');
    disableButton.textContent = 'Deshabilitar Input';
    disableButton.onclick = function() {
    inputText.disabled = true;
    };

    const enableButton = document.createElement('button');
    enableButton.textContent = 'Habilitar Input';
    enableButton.onclick = function() {
    inputText.disabled = false; 
    };

    app.appendChild(inputText);
    app.appendChild(disableButton);
    app.appendChild(enableButton);
}