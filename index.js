 
$(document).ready(function () {
  $(".slider-img").on("click", function (e) {
    e.stopPropagation(); // Empêche la propagation de l'événement au document

    // Désactive temporairement AOS
    $(this).removeAttr("data-aos");

    // Vérifie si l'image cliquée est déjà active
    if ($(this).hasClass("active")) {
      // Si l'élément est déjà actif, effectue la transition
      $(this).transition({
        duration: 700,
        easing: "ease",
        complete: function () {
          // Réactive AOS après la transition
          $(this).attr("data-aos", "fade-right");
        }
      });
      $(this).removeClass("active");
    } else {
      // Supprime la classe active des autres images
      $(".slider-img.active").each(function () {
        $(this).removeClass("active").transition({
          duration: 700,
          easing: "ease",
          complete: function () {
            $(this).attr("data-aos", "fade-right");
          }
        });
      });

      // Applique la classe active à l'image sélectionnée
      $(this).addClass("active").transition({
        duration: 700,
        easing: "ease",
        complete: function () {
          // Réactive AOS après la transition
          $(this).attr("data-aos", "fade-right");
        }
      });
    }
  });

  // Supprimer la classe active si on clique en dehors
  $(document).on("click", function () {
    $(".slider-img.active").each(function () {
      $(this).removeClass("active").transition({
        duration: 700,
        easing: "ease",
        complete: function () {
          $(this).attr("data-aos", "fade-right");
        }
      });
    });
  });
});



// calcolo IMC
const formRisult = document.getElementById('form-risult');
const risultato = document.getElementById('risultato');

function imc(peso, altezza) {
  return (peso)/(altezza/100)**2
};

formRisult.addEventListener('submit', (event) => {
  event.preventDefault();

  const peso = parseFloat(document.getElementById('peso').value.trim());
  const altezza = parseFloat(document.getElementById('altezza').value.trim());
 

  if (peso > 0 && altezza > 0) {
    const imcValue = imc(peso, altezza).toFixed(1);
    if (imcValue < 18.5) {
      risultato.innerHTML = `<p class='text-center align-middle p-2 underline'>IMC : <span class=" text-red-600 font-bold">${imcValue}</span> Sei in sottopeso</p>`
    } else if (imcValue >= 18.5 && imcValue <= 24.9) {
      risultato.innerHTML = `<p class='text-center align-middle p-2 underline'>IMC : <span class=" text-red-600 font-bold">${imcValue}</span> Hai un peso normale</p>`
    } else if (imcValue >= 25 && imcValue <= 29.9) {
      risultato.innerHTML = `<p class='text-center align-middle p-2 underline'>IMC : <span class=" text-red-600 font-bold">${imcValue}</span> sei in sovrappeso</p>`
    } else if (imcValue >= 30 && imcValue <= 34.9) {
      risultato.innerHTML = `<p class='text-center align-middle p-2 underline'>IMC : <span class=" text-red-600 font-bold">${imcValue}</span> sei in obesità moderata (Classe 1)</p>`
    } else if (imcValue >= 35 && imcValue <= 39.9) {
      risultato.innerHTML = `<p class='text-center align-middle p-2 underline'>IMC : <span class=" text-red-600 font-bold">${imcValue}</span> sei in Obesità severa (Classe 2)</p>`
    } else if (imcValue >= 40) {
      risultato.innerHTML = `<p class='text-center align-middle p-2 underline'>IMC : <span class=" text-red-600 font-bold">${imcValue}</span> sei in Obesità morbosa (Classe 3)</p>`
    }
  } 
  formRisult.reset()
})

  // Sélectionne toutes les vidéos avec la classe "video-hover"
  const videos = document.querySelectorAll('.video-hover');

  // Ajoute des événements pour chaque vidéo
  videos.forEach(video => {
    video.addEventListener('mouseover', () => {
      video.play(); // Lecture au survol
    });

    video.addEventListener('mouseleave', () => {
      video.pause(); // Pause lorsqu'on quitte
    //  video.currentTime = 0; // Remet à zéro
    });
  });
  