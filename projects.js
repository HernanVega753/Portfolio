document.addEventListener("DOMContentLoaded", () => {
  // Carga al cargar el DOM
  const projects = document.getElementById("projects-container");
  const education = document.getElementById("education-container");
  const skills = document.getElementById("skillsContainer");
  const openProjects = document.getElementById("openProjects");
  const openEducation = document.getElementById("openEducation");
  const openSkills = document.getElementById("openSkills");
  const backButton = document.getElementById("backHome");
  const cvDownload = document.getElementById("downloadCurriculum");
  const main = document.getElementById("homePage");

  openProjects.addEventListener("click", () => {
    // Oculta todo menos el elemento clickado
    projects.classList.remove("hidden");
    education.classList.add("hidden");
    skills.classList.add("hidden");
    main.classList.add("hidden");
  });
  openEducation.addEventListener("click", () => {
    education.classList.remove("hidden");
    projects.classList.add("hidden");
    skills.classList.add("hidden");
    main.classList.add("hidden");
  });
  openSkills.addEventListener("click", () => {
    skills.classList.remove("hidden");
    projects.classList.add("hidden");
    education.classList.add("hidden");
    main.classList.add("hidden");
    contacto.classList.remove("hidden");
  });

  backButton.addEventListener("click", () => {
    projects.classList.add("hidden");
    education.classList.add("hidden");
    skills.classList.add("hidden");
    main.classList.remove("hidden");
  });
  cvDownload.addEventListener("click", () => {
    // utiliza la ruta dentro del programa y crea un "a" temporal para descargar
    const pdfPath = "assets/CurriculumVega.pdf";
    const tempLink = document.createElement("a");
    tempLink.href = pdfPath;
    tempLink.download = "Hernan_Vega_CV.pdf"; // Creamos la descarga
    tempLink.click();

    // Eliminamos el enlace temporal (opcional)
    tempLink.remove();
  });
});
