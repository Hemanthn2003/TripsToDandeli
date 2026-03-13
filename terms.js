document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".terms-content, .hero-content");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  fadeEls.forEach(el => observer.observe(el));
});
