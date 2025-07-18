document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector("#hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburger.onclick = () => {
    navbarNav.classList.toggle("active");
  };
});

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
