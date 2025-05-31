document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("modo-btn");
  
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  