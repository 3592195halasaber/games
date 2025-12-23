import getGames from "./data.js";
getGames();
let categories = document.querySelectorAll(".nav-cat");
categories.forEach((category) => {
  let navCat = category.getAttribute("category");
  category.addEventListener("click", () => {
    getGames(navCat);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-item .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });
      link.classList.add("active");
    });
  });
});
const loadingIndicator = document.getElementById("loadingIndicator");
