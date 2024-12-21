const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener referencias a los campos del formulario
  const emailField = document.getElementById("email_id");
  const messageField = document.getElementById("message");
  const nameField = document.getElementById("from_name");

  // Comprobación de campos vacíos
  if (!nameField.value.trim()) {
    alert("Por favor, ingrese su nombre.");
    nameField.focus();
    return;
  }

  if (!emailField.value.trim()) {
    alert("Por favor, ingrese su correo electrónico.");
    emailField.focus();
    return;
  }

  if (!messageField.value.trim()) {
    alert("Por favor, escriba un mensaje.");
    messageField.focus();
    return;
  }

  // Validar formato de correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailField.value)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    emailField.focus();
    return;
  }

  // Enviar el formulario
  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_sr6jaia";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("¡Mensaje enviado con éxito!");
      this.reset(); // Reinicia el formulario después del envío
    },
    (err) => {
      btn.value = "Send Email";
      alert("Ocurrió un error al enviar el mensaje. Inténtalo nuevamente.");
      console.error("Error:", err); // Log para depuración
    }
  );
});
