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
    delay += 500; // Retardo adicional antes de los enlaces
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
}); 
