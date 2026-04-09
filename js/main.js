// ===== MENU MOBILE =====
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});


// ===== SCROLL REVEAL ANIMATION =====
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===== HEADER SHADOW AU SCROLL =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});


// ===== SMOOTH ACTIVE LINK (option bonus) =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-cyan-400");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("text-cyan-400");
    }
  });
});
