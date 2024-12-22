document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Modo Oscuro";
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.padding = "10px 15px";
  toggleButton.style.backgroundColor = "#333";
  toggleButton.style.color = "#fff";
  toggleButton.style.borderStyle = "outset";
  toggleButton.style.borderWidth = "5px";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.zIndex = "1000";

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");

    // Cambiar texto del botón
    toggleButton.textContent = isDarkMode ? "Modo Claro" : "Modo Oscuro";

    // Cambiar estilos del botón según el modo
    toggleButton.style.backgroundColor = isDarkMode ? "#fff" : "#333";
    toggleButton.style.color = isDarkMode ? "#333" : "#fff";
    toggleButton.style.borderColor = isDarkMode ? "#fff" : "#333";

    const portada = document.getElementById("img-container");
    portada.style.backgroundColor = isDarkMode ? "#fff" : "#333";
  });

  document.body.appendChild(toggleButton);
});
