export function textoAzul() {
    console.log('Ejercicio 7.1');
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 7.1'
    const app = document.getElementById("app")
    
    const p1 = document.createElement('p');
    p1.textContent = 'Este es el primer párrafo.';

    const p2 = document.createElement('p');
    p2.textContent = 'Este es el segundo párrafo.';
    
    const p3 = document.createElement('p');
    p3.textContent = 'Este es el tercer párrafo.';
    
    const button = document.createElement('button');
    button.textContent = 'Cambiar color a azul';
    
    button.onclick = function() {
      p1.style.color = 'blue';
      p2.style.color = 'blue';
      p3.style.color = 'blue';
    };
    
    app.appendChild(p1);
    app.appendChild(p2);
    app.appendChild(p3);
    app.appendChild(button);
}