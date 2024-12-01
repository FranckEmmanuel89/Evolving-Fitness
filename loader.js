const loader = document.querySelector('.loader');
const body = document.body;

// Désactive le scroll au début
body.style.overflow = "hidden";

window.addEventListener('load', () => {
  // Transition pour masquer le loader
  loader.style.opacity = "0"; 

  // Réactive le scroll après avoir caché le loader
  setTimeout(() => {
    loader.style.display = "none";
    body.style.overflow = ""; // Réinitialise le scroll
  }, 500); // Supprime complètement après 500ms
});


  
