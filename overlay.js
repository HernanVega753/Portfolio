document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const openOverlayBtn = document.getElementById("openOverlay");
  const closeOverlayBtn = document.getElementById("closeOverlay");

  openOverlayBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
  });

  closeOverlayBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });
});
