document.addEventListener('DOMContentLoaded', () => {
    const h2Elements = document.querySelectorAll('h2');
    const contactoLinks = document.querySelectorAll('#contacto a'); // Todos los elementos <a> dentro de contacto
    let delay = 0;

    // Animación para los elementos H2
    h2Elements.forEach((element, index) => {
        element.style.transition = 'opacity 4s ease-in-out, transform 3s ease-in-out';
        element.style.opacity = '0';
        element.style.transform = 'translateX(-50px)'; // Aparece desde la izquierda
 
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }, delay);

        delay += 400; // Incrementa el retardo para que los elementos H2 aparezcan uno tras otro
    });

    // Animación para los enlaces de contacto
 // Retardo adicional antes de los enlaces
    contactoLinks.forEach((element, index) => {
        element.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)'; // Aparece desde abajo
 
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, delay);

        delay += 600; // Ajuste para el retardo entre enlaces
    });
    const button = document.getElementById('btnMas');
    const contenedor = document.getElementById('columnSobreMi');

    button.addEventListener('click', () => {
    if (contenedor.style.height === '90px' || contenedor.style.height === '') {
        contenedor.style.height = '380px'; // Expande a 380px
    } else {
        contenedor.style.height = '90px'; // Colapsa a 90px
    }
    });

    const buttonProyectosIzquierda = document.getElementById('flechaIzquierda');
    const buttonProyectosDerecha = document.getElementById('flechaDerecha');

    // Definir correctamente el array de elementos
    const proyectosArray = [
    document.getElementById('SistemaEstudiantes'),
    document.getElementById('TiendaLibros'),
    document.getElementById('Firuland'),
    document.getElementById('Credenciales')
    ];

    // Seleccionar el primer elemento del array
    let currentIndex = 0;
    let imagenPresente = proyectosArray[currentIndex];

    // Establecer el estilo display en "block" para el primer elemento
    imagenPresente.style.display = "block";

    buttonProyectosDerecha.addEventListener('click', () => {
    // Ocultar el proyecto actual
    proyectosArray[currentIndex].style.display = "none";
    
    // Incrementar el índice
    currentIndex = (currentIndex + 1) % proyectosArray.length;

    // Mostrar el siguiente proyecto
    proyectosArray[currentIndex].style.display = "block";
    });

    buttonProyectosIzquierda.addEventListener('click', () => {
    // Ocultar el proyecto actual
    proyectosArray[currentIndex].style.display = "none";
    
    // Decrementar el índice y comprobar límites
    currentIndex = (currentIndex - 1 + proyectosArray.length) % proyectosArray.length;

    // Mostrar el proyecto anterior
    proyectosArray[currentIndex].style.display = "block";
    });
})
