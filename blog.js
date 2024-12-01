// Articles fictifs pour démonstration
const articles = [
    {
      title: "Panca Piana: Come Eseguirla al Meglio",
      image: "Images/blog3.jpg",
      content: "La panca piana è un esercizio fondamentale per costruire un torace forte.Viene praticata sia dai principianti che dai professionisti. Tuttavia, per evitare infortuni e massimizzare i risultati, è fondamentale padroneggiare la tecnica corretta.",
      link: "article1.html"
    },
    {
      title: "Riuscire nella Tua Presa di Massa",
      image: "Images/article2.jpg",
      content: "La fase di presa di massa è cruciale per chiunque voglia aumentare il proprio volume muscolare. È un processo che richiede un equilibrio tra allenamento efficace, alimentazione bilanciata e un recupero di qualità. Ma come puoi ottimizzare questi elementi?",
      link: "article2.html"
    },
    {
      title: "Ottimizza i Risultati con le Proteine",
      image: "Images/article3.jpg",
      content: "Le proteine forniscono gli amminoacidi essenziali per riparare le fibre muscolari danneggiate durante l'allenamento. Inoltre, aiutano nella costruzione di nuovi tessuti muscolari, aumentando la forza e il volume dei muscoli.",
      link: "article3.html"
    },
    {
      title: "Metabolismo Basale: Cos'è e Come Calcolarlo",
      image: "Images/article4.jpg",
      content: "Le proteine forniscono gli amminoacidi essenziali per riparare le fibre muscolari danneggiate durante l'allenamento. Inoltre, aiutano nella costruzione di nuovi tessuti muscolari, aumentando la forza e il volume dei muscoli.",
      link: "article4.html"
    },
    {
      title: "Il Digiuno Intermittente per Perdere Peso",
      image: "Images/digiuno-cover.jpg",
      content: "Il digiuno intermittente è un modello alimentare che alterna periodi di digiuno a periodi in cui si può mangiare. Non è una dieta tradizionale, ma una strategia per ottimizzare l'energia del corpo e favorire la perdita di peso, basandosi su ritmi naturali.",
      link: "article5.html"
    }
  ];
  
  // Récupérer les éléments DOM
  const searchBar = document.getElementById("searchBar");
  const articlesContainer = document.getElementById("articles");
  
  // Fonction pour afficher les articles
  function displayArticles(filteredArticles) {
    articlesContainer.innerHTML = ""; // Réinitialiser le contenu
    filteredArticles.forEach(article => {
      const articleDiv = document.createElement("div");
      articleDiv.className = "rounded-xl w-[350px] lg:w-[550px] flex h-[250px] bg-yellow-50 mt-20 hover:scale-105 animation-filter";
  
      articleDiv.innerHTML = `
          <div class="w-[350px] rounded-l-xl h-[250px]  bg-yellow-50 flex justify-center items-center">
            <img class="object-cover w-[170px] lg:w-[280px] h-[230px] object-center rounded-xl" src="${article.image}" alt="${article.title}">
          </div>
          <div class="w-[300px] h-[250px] rounded-r-xl bg-yellow-50 px-1 py-5 lg:px-5 lg:py-5">
            <div class=" h-[60px]">
              <h2 class="text-[15px] lg:text-lg font-semibold">${article.title}</h2>
            </div>
            <div class=" h-[110px] flex justify-center items-center">
              <p class="text-[14px] lg:text-base">${article.content.substring(0, 60)}...</p>
            </div>
            <button class="relative overflow-hidden bg-black text-white py-2 px-6 rounded-md font-semibold group">
                <a href="${article.link}" target="_blank" class="relative z-10">LEGGI</a>
                <span class="absolute inset-0 bg-gradient-to-t from-black via-black to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
            </button>
          </div>
      `;
  
      articlesContainer.appendChild(articleDiv);
    });
  }
  
  // Afficher tous les articles au début
  displayArticles(articles);
  
  // Ajouter l'événement de recherche
  searchBar.addEventListener("input", () => {
    const query = searchBar.value.toLowerCase().trim();
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(query)
    );
    displayArticles(filteredArticles);
  });
  