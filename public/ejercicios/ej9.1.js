export function saveMail() {
    console.log('Ejercicio 9.1')
    
    const ejercicio = document.getElementById('ejercicio')
    ejercicio.textContent  = 'Ejercicio 9.1'

    const app = document.getElementById('app');

    const form = document.createElement('form');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Correo Electrónico';
    emailInput.id = 'email';

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Guardar Correo';

    const displayDiv = document.createElement('div');
    displayDiv.id = 'correoAlmacenado';

    const deleteButton = document.createElement('button');
    deleteButton.click
    deleteButton.textContent = 'Eliminar Correo Guardado';
    deleteButton.style.display = 'none';

    form.appendChild(emailInput);
    form.appendChild(submitButton);
    app.appendChild(form);
    app.appendChild(displayDiv);
    app.appendChild(deleteButton);

    function mostrarCorreoAlmacenado() {
        const correoGuardado = localStorage.getItem('correo');
        if (correoGuardado) {
            displayDiv.textContent = `Correo guardado: ${correoGuardado}`;
            deleteButton.style.display = 'block';
        } else {
            displayDiv.textContent = '';
            deleteButton.style.display = 'none';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = emailInput.value;
        if (email) {
            console.log('si');
            localStorage.setItem('correo', email);
            mostrarCorreoAlmacenado();
        }
    });

    deleteButton.addEventListener('click', function() {
        localStorage.removeItem('correo');
        mostrarCorreoAlmacenado();
    });

    mostrarCorreoAlmacenado();
}