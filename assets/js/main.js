const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});
