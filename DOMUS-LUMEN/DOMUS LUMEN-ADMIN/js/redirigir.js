// Esperar a que el DOM termine de cargar
document.addEventListener("DOMContentLoaded", function () {
    // Obtener el botón de "Iniciar Sesión" por su ID
    const loginBtn = document.getElementById("loginBtn");
  
    // Agregar un evento click al botón
    loginBtn.addEventListener("click", function () {
      // Después de 4 segundos, redirigir a la página de carga
      setTimeout(function () {
        window.location.href = "pantalla_carga.html";
      }, 2500);
    });
  });
  