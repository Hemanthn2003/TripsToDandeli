/* eslint-env browser */
/* global ScrollReveal */
/* global setInterval */

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

// ✅ Image slideshow fix
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var slides = document.querySelectorAll(".slideshow img");
  var current = 0;

  if (slides.length === 0) {
    console.warn("No slideshow images found.");
    return;
  }

  slides[current].classList.add("active");

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 2000);
});


document.addEventListener("DOMContentLoaded", function () {
  console.log("✅ Slideshow JS Loaded");

  var slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach(function (slideshow) {
    var images = slideshow.querySelectorAll("img");
    var current = 0;

    if (images.length === 0) {
      console.warn("⚠️ No images found in .slideshow");
      return;
    }

    images[current].classList.add("active");
    console.log("🎬 Showing first image:", images[current].src);

    setInterval(function () {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
      console.log("➡️ Now showing:", images[current].src);
    }, 2000);
  });
});


const slider = document.querySelector(".testimonial-slider");
const track = document.getElementById("testimonialTrack");
const cards = document.querySelectorAll(".testimonial-card");

let index = 0;

function slideTestimonials() {
  index++;
  if (index >= cards.length) index = 0;

  const width = slider.offsetWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

setInterval(slideTestimonials, 3000);