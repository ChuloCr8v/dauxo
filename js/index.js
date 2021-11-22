const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const header = document.querySelector("header");


/* display mobile menu */
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("rotate");
  menu.classList.toggle("show-menu");
});


/* add shadow to header on scroll */
const headerShadow = () => {
  let prevPos = 100;
  let currentPos = scrollY;

  if (currentPos > prevPos) {
    header.classList.add('header-shadow')
  } else {
    header.classList.remove('header-shadow')
  }
}

window.addEventListener('scroll', headerShadow)