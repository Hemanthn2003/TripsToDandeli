document.addEventListener("DOMContentLoaded", () => {
  // Fade-in animation
  const elements = document.querySelectorAll(".hero-content, .policy-content");
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 300);
  });

  // Hamburger toggle
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
