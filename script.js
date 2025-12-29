"use strict";

const addEventOnElement = function (elements, evetType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(evetType, callback);
  }
};

/*******NAVBAR toggle **********/
const navbar = document.querySelector("[data-navbar");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn");
const overlay = document.querySelector("[data-overlay");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

const parallaxElments = document.querySelector("[data-parallax]");

window.addEventListener("mousemove", (event) => {
  for (let i = 0, len = parallaxElments.length; i < len; i++) {
    const movementX =
      (event.clientX / window.innerWidth) *
      Number(parallaxElments[i].dataset.parallaxSpeed);
    const movementY =
      (event.clientY / window.innerHeight) *
      Number(parallaxElments[i].dataset.parallaxSpeed);

    parallaxElments[i].animate(
      {
        transform: 'translate(${movementX}px, ${movementY}px',
      },
      { duration: 500, fill: "forwards" }
    );
  }
});
