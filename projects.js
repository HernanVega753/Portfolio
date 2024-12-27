document.addEventListener("DOMContentLoaded", () => {
  const projects = document.getElementById("projects-container");
  const education = document.getElementById("education-container");
  const skills = document.getElementById("skillsContainer");
  const openProjects = document.getElementById("openProjects");
  const openEducation = document.getElementById("openEducation");
  const openSkills = document.getElementById("openSkills");
  const backButton = document.getElementById("backHome");

  const main = document.getElementById("homePage");

  openProjects.addEventListener("click", () => {
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
});
