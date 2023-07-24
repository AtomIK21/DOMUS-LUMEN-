// Obtener el elemento del título
const titleLogo = document.getElementById("title-logo");

// Función para pintar las dos últimas letras de verde después de la animación
titleLogo.addEventListener("animationend", () => {
  paintLastLettersGreen();
});

// Función para pintar las dos últimas letras de verde
function paintLastLettersGreen() {
  const titleLogoText = titleLogo.textContent;
  const newText = titleLogoText.slice(0, -2) + `<span class="green-letters">${titleLogoText.slice(-2)}</span>`;
  titleLogo.innerHTML = newText;
}
