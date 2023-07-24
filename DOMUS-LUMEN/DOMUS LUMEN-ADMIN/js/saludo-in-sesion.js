      // Obtener el formulario y el botón de inicio de sesión
      const form = document.querySelector('.form');
      const submitButton = document.querySelector('.submit');
    
      // Agregar un evento de escucha al enviar el formulario
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario
  
    
        // Mostrar el saludo con el nombre del usuario
        const saludo = document.createElement('p');
        saludo.textContent = `Hola, Bienvenido de nuevo.`;
        form.appendChild(saludo);
    
        // Aplicar animación de desvanecimiento
        saludo.style.opacity = 0;
        let opacity = 0;
    
        const fadeEffect = setInterval(() => {
          if (opacity < 1) {
            opacity += 0.01; // Ajusta la velocidad de desvanecimiento disminuyendo el incremento
            saludo.style.opacity = opacity;
          } else {
            clearInterval(fadeEffect);
            setTimeout(() => {
              let fadeOutInterval = setInterval(() => {
                if (opacity > 0) {
                  opacity -= 0.01; // Ajusta la velocidad de desvanecimiento disminuyendo el decremento
                  saludo.style.opacity = opacity;
                } else {
                  clearInterval(fadeOutInterval);
                  saludo.remove();
                }
              }, 10); // Intervalo más corto para una animación más suave
            }, 2500); // Ocultar el saludo después de 4 segundos (4000 milisegundos)
          }
        }, 10); // Intervalo más corto para una animación más suave
      });