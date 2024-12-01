//MENU HAMBURGER LOGIC

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.querySelectorAll("#mobile-menu a");

// Fonction pour ouvrir et fermer le menu
const toggleMenu = () => {
  mobileMenu.classList.toggle("translate-x-full");  // Cache à droite
  mobileMenu.classList.toggle("translate-x-0");     // Affiche vers la gauche
  hamburgerIcon.classList.toggle("hidden");         // Gère icône hamburger
  closeIcon.classList.toggle("hidden");             // Gère icône fermeture
};

// Ouvrir/fermer le menu lors du clic sur le bouton hamburger
menuButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Empêche la propagation pour que le clic sur le bouton n'active pas la fermeture
  toggleMenu();
});

// Fermer le menu lorsqu'on clique sur un lien
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      mobileMenu.classList.add("translate-x-full");  // Cache à droite
      mobileMenu.classList.remove("translate-x-0");  // Cache le menu
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }, 800); // Délai de 800ms
  });
});

// Fermer le menu si on clique en dehors
document.addEventListener("click", (event) => {
  const isClickInsideMenu = mobileMenu.contains(event.target);
  const isClickOnButton = menuButton.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    if (!mobileMenu.classList.contains("translate-x-full")) {
      // Fermer le menu seulement si ouvert
      mobileMenu.classList.add("translate-x-full");
      mobileMenu.classList.remove("translate-x-0");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }
});

let lastScrollTop = 0;
const navBar = document.querySelector('.nav-bar-menu');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Appliquer l'effet uniquement après 70px
    if (scrollTop > 70) {
        if (scrollTop > lastScrollTop) {
            // Scroll vers le bas
            navBar.classList.add('hidden');
        } else {
            // Scroll vers le haut
            navBar.classList.remove('hidden');
        }
    } else {
        // Toujours afficher la navbar si la position de défilement est inférieure à 70px
        navBar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

const toTopButton = document.getElementById("toTopButton");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 1000) {
    if (currentScrollY > lastScrollY) {
      toTopButton.classList.remove("hidden1");
      toTopButton.classList.add("block1");
    } else {
      toTopButton.classList.remove("block1");
      toTopButton.classList.add("hidden1");
    }
  } else {
    toTopButton.classList.remove("block1");
    toTopButton.classList.add("hidden1");
  }

  lastScrollY = currentScrollY;
});

toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



