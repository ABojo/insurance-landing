const mobileNav = document.querySelector(".mobile-nav");
const mobileNavToggle = document.querySelector(".mobile-nav__toggle");

function toggleMobileNav() {
  mobileNav.classList.toggle("mobile-nav--open");
}

mobileNavToggle.addEventListener("click", toggleMobileNav);
