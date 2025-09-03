document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const successAlert = document.getElementById('success-alert');

    // Función para mostrar mensajes de error
    function showError(input, message) {
        const parent = input.parentElement;
        let errorSpan = parent.querySelector('.error-message');
        
        if (!errorSpan) {
            errorSpan = document.createElement('span');
            errorSpan.className = 'error-message';
            errorSpan.style.color = 'red';
            errorSpan.style.fontSize = '12px';
            errorSpan.style.display = 'block';
            errorSpan.style.marginTop = '5px';
            parent.appendChild(errorSpan);
        }
        errorSpan.textContent = message;
    }

    // Función para limpiar mensajes de error
    function clearError(input) {
        const parent = input.parentElement;
        const errorSpan = parent.querySelector('.error-message');
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    }

    // Función de validación de correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Nueva función para mostrar la alerta de éxito
    function showAlert(element, duration) {
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        let formData = {};

        inputs.forEach(input => {
            clearError(input);

            if (input.value.trim() === '') {
                showError(input, 'Este campo es obligatorio');
                isValid = false;
            }

            if (input.type === 'email' && !isValidEmail(input.value.trim())) {
                showError(input, 'Por favor, ingresa un correo electrónico válido');
                isValid = false;
            }

            formData[input.getAttribute('placeholder')] = input.value.trim();
        });

        const textarea = form.querySelector('textarea');
        if (textarea) {
            formData[textarea.getAttribute('placeholder')] = textarea.value.trim();
        }

        if (isValid) {
            console.log("Formulario válido. Objeto con los datos:");
            console.log(formData);
            
            // Muestra la alerta de éxito
            showAlert(successAlert, 5000); // 5000 milisegundos = 5 segundos
            
            // Opcional: Limpiar el formulario después del envío
            form.reset();
        }
    });
});