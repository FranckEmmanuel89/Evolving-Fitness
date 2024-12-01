const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
  loader.style.opacity = "0"; // Transition pour masquer le loader
  setTimeout(() => loader.style.display = "none", 500); // Supprime complètement après 500ms
})


  
