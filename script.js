//  Varible
const openMenuBtn = document.querySelector(".openMenuBtn");
const closeMenuBtn = document.querySelector(".closeMenuBtn");
const mobileMenu = document.querySelector(".mobileMenu");

openMenuBtn.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(0px)";
});
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(256px)";
});
