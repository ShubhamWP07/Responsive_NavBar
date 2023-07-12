"use strict";

const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".mobileMenu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navmenu.classList.toggle("active");
});
