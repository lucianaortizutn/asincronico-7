export function clgLista() {
    console.log('Ejercicio 8.1')
    
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 8.1'

    const app = document.getElementById('app');

    const lista = document.createElement('ul');

    const elementos = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

    elementos.forEach(function(texto) {
        const li = document.createElement('li');
        li.textContent = texto;

        li.addEventListener('click', function() {
            console.log(texto);
        });

        lista.appendChild(li);
    });

    app.appendChild(lista);
}