document.addEventListener("DOMContentLoaded", () => {
  const nombreContainer = document.querySelector(".nombre");
  const imgHernan = document.getElementById("imgHernan");
  const text = "HERNÁN PABLO VEGA";

  // Crear spans para cada letra
  text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter === " " ? "\u00A0" : letter; // Añadir espacio si es un espacio
    span.style.animationDelay = `${index * 0.1}s`;
    nombreContainer.appendChild(span);
  });
});
