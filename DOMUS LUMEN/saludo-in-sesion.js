// Obtener referencias a los elementos del formulario y la barra de navegación
    const aliasInput = document.getElementById('alias');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('pass');
    const navbarLinks = document.querySelectorAll('.navbar a');
    const loginLink = document.querySelector('.login-link');

    // Función para mostrar el saludo animado
    function mostrarSaludo() {
      const alias = aliasInput.value || 'Usuario';
      const saludo = `¡Hola, ${alias}! Bienvenido/a`;

      // Crear un elemento de párrafo
      const mensaje = document.createElement('p');
      mensaje.textContent = saludo;
      mensaje.style.fontSize = '24px';
      mensaje.style.textAlign = 'center';

      // Animación con desvanecimiento
      mensaje.style.opacity = 0;
      document.body.appendChild(mensaje);
      let opacity = 0;
      const fadeEffect = setInterval(() => {
        if (opacity < 1) {
          opacity += 0.1;
          mensaje.style.opacity = opacity;
        } else {
          clearInterval(fadeEffect);
          setTimeout(() => {
            let opacity = 1;
            const fadeOutEffect = setInterval(() => {
              if (opacity > 0) {
                opacity -= 0.1;
                mensaje.style.opacity = opacity;
              } else {
               clearInterval(faddOutEffect);
                setTimeout(() => {
                  document.body.removeChild(mensaje);
                }, 1000);
              }
            }, 100);
          }, 3000); // Ocultar después de 5 segundos (5000 ms)
        }
      }, 100);
    }