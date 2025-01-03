document.addEventListener("DOMContentLoaded", () => {
  const programadorFullstack = document.getElementById("programadorFullstack");
  const contactoLinks = document.querySelectorAll("#contacto a"); // Todos los elementos <a> dentro de contacto
  let delay = 0;

  delay += 3000;

  // Animación para los enlaces de contacto
  // Retardo adicional antes de los enlaces
  contactoLinks.forEach((element, index) => {
    element.style.transition =
      "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)"; // Aparece desde abajo

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, delay);

    delay += 600; // Ajuste para el retardo entre enlaces
  });

  const buttonProyectosIzquierda = document.getElementById("flechaIzquierda");
  const buttonProyectosDerecha = document.getElementById("flechaDerecha");

  // Definir correctamente el array de elementos
  const proyectosArray = [
    document.getElementById("EcommerceByteBusters"),
    document.getElementById("EcommerceSuchGreatFood"),
    document.getElementById("SistemaEstudiantes"),
    document.getElementById("TiendaLibros"),
    document.getElementById("Firuland"),
    document.getElementById("Credenciales"),
  ];
  const proyectosArrayP = [
    document.getElementById("Pconstructora"),
    document.getElementById("Prestaurant"),
    document.getElementById("PSistemaEstudiantes"),
    document.getElementById("PTiendaLibros"),
    document.getElementById("PFiruland"),
    document.getElementById("PCredenciales"),
  ];

  // Seleccionar el primer elemento del array
  let currentIndex = 0;
  let currentIndexP = 0;
  let imagenPresente = proyectosArray[currentIndex];
  let parrafoPresente = proyectosArrayP[currentIndexP];

  // Establecer el estilo display en "block" para el primer elemento
  imagenPresente.style.display = "block";
  parrafoPresente.style.display = "block";

  buttonProyectosDerecha.addEventListener("click", () => {
    // Ocultar el proyecto actual
    proyectosArray[currentIndex].style.display = "none";
    proyectosArrayP[currentIndexP].style.display = "none";

    // Incrementar el índice
    currentIndex = (currentIndex + 1) % proyectosArray.length;
    currentIndexP = (currentIndexP + 1) % proyectosArray.length;

    // Mostrar el siguiente proyecto
    proyectosArray[currentIndex].style.display = "block";
    proyectosArrayP[currentIndexP].style.display = "block";
  });

  buttonProyectosIzquierda.addEventListener("click", () => {
    // Ocultar el proyecto actual
    proyectosArray[currentIndex].style.display = "none";
    proyectosArrayP[currentIndexP].style.display = "none";

    // Decrementar el índice y comprobar límites
    currentIndex =
      (currentIndex - 1 + proyectosArray.length) % proyectosArray.length;
    currentIndexP =
      (currentIndexP - 1 + proyectosArrayP.length) % proyectosArrayP.length;

    // Mostrar el proyecto anterior
    proyectosArray[currentIndex].style.display = "block";
    proyectosArrayP[currentIndexP].style.display = "block";
  });
});
