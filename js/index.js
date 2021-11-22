const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("rotate");
  menu.classList.toggle("show-menu");
});

//x = 400;
//alert(x / 16);
