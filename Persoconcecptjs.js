
    const projects = [
      {id:1, title:"TP1", tags:["TP"], short:"TP1", image:"head.webp", details:"Détails du projet 1 : stack, défis, résultats." ,src:"test/testTp1.html",href:"test/testTp1.html"},
      {id:2, title:"TP2", tags:["TP"], short:"TP2", image:"head.webp", details:"Détails du projet 2 : perf, SEO.", src:"Tp2.html",href:"Tp2.html"},
      {id:3, title:"TP3", tags:["TP"], short:"formulaire", image:"head.webp", details:"Détails du projet 3 : brand book, livrables.", src:"Formulaire/formulaireTp3.html",href:"Formulaire/formulaireTp3.html"},
      {id:4, title:"TP4", tags:["TP"], short:"Liste", image:"head.webp", details:"Détails du projet 4 : UX/UI, backend.", src:"liste d'ordinateurTP4.html",href:"liste d'ordinateurTP4.html"},
      {id:5, title:"TP5", tags:["TP"], short:"1st css", image:"head.webp", details:"Détails du projet 5 : contenu, SEO.", src:"style.css/styleTP5.html",href:"style.css/styleTP5.html"},
      {id:6, title:"TP6", tags:["TP"], short:"2nd css", image:"head.webp", details:"Détails du projet 6 : data viz, interactivité.", src:"column.html",href:"column.html"},
      
      {id:7, title:"mission", tags:["mission"], short:"Formulaire mission", image:"sweet fm.jpg", details:"Détails du projet 6 : data viz, interactivité.", src:"Formulaire/Formulaired'inscriptionTP6.html",href:"Formulaire/Formulaired'inscriptionTP6.html"},
      {id:8, title:"TP8", tags:["Vue.js","D3.js,","TP"], short:"Formulaire", image:"sweet fm.jpg", details:"Détails du projet 6 : data viz, interactivité.", src:"Formulaire/formulairesolo.html",href:"Formulaire/formulairesolo.html"},
      {id:11, title:"TP9", tags:["TP","Calculatrice.js"], short:"Calculatrice.js", image:"sweet fm.jpg", details:"Détails du projet 6 : data viz, interactivité.", src:"calculatrice TP9/train.html",href:"calculatrice TP9/train.html"},
      {id:9, title:"TP10", tags:["TP"], short:"logiciel de virtualisation", image:"NOIR onduler.jpg", details:"Détails du projet 6 : data viz, interactivité.", src:"logiciel de virtualisation TP10/Logiciel de virtualisation-3.pdf",href:"logiciel de virtualisation TP10/Logiciel de virtualisation-3.pdf"},
    {id:10, title:"TP11", tags:["TP"], short:"Début", image:"NOIR onduler.jpg", details:"Détails du projet 6 : data viz, interactivité.", src:"TP12/tp11.html",href:"TP12/tp11.html"},
    {id:11, title:"TP12", tags:["TP"], short:"Début", image:"NOIR onduler.jpg", details:"Détails du projet 6 : data viz, interactivité.", src:"TP12/tp12.html",href:"TP12/tp11.html"},
    
    
    ];



    const navBar = document.getElementById('topNav');
    const tagsContainer = document.getElementById('tags');
    const projectsContainer = document.getElementById('projects');
    const searchInput = document.getElementById('search');
    const modal = document.getElementById('modal');
    const modalLink = document.getElementById('modal-link');
    const year = document.getElementById('year');
    

    let activeTag = 'Tous';

    const tags = ['Tous', ...new Set(projects.flatMap(p => p.tags))];

    function renderTags() {
      tagsContainer.innerHTML = '';
      tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        if (tag === activeTag) btn.classList.add('active');
        btn.onclick = () => { activeTag = tag; renderTags(); renderProjects(); };
        tagsContainer.appendChild(btn);
      });
    }

    function renderProjects() {
      const query = searchInput.value.toLowerCase();
      projectsContainer.innerHTML = '';
      const filtered = projects.filter(p => {
        const matchesTag = activeTag === 'Tous' || p.tags.includes(activeTag);
        const matchesQuery = (p.title + p.short + p.tags.join(' ')).toLowerCase().includes(query);
        return matchesTag && matchesQuery;
      });
      if (filtered.length === 0) {
        projectsContainer.innerHTML = '<p>Aucun projet trouvé.</p>';
      } else {
        filtered.forEach(p => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `<img src="${p.image}" alt="${p.title}"><div class="content"><h3>${p.title}</h3><p>${p.short}</p></div>`;
          card.onclick = () => openModal(p);
          projectsContainer.appendChild(card);
        });
      }
    } 
function openModal(project) {
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-tags').textContent = project.tags.join(' • ');
  document.getElementById('modal-img').src = project.image;
  document.getElementById('modal-img').alt = project.title;
  document.getElementById('modal-details').textContent = project.details;
  document.getElementById('modal-link').href = project.src;
  modal.classList.add('active'); // Affiche la modale
}



// Ajouter un écouteur d'événement pour fermer le menu en cliquant à l'extérieur
document.addEventListener('click', function(event) {
    const navbar = document.getElementById('topNav');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (!navbar.contains(event.target) && !navbarToggler.contains(event.target)) {
        closeNavbar();
    }
});
function closeModal() {
  modal.classList.remove('active'); // Cache la modale proprement
}

// Fonction pour ouvrir le menu hamburger
function openNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.getElementById('Menu');
    navbarToggler.click(); // Simule un clic pour ouvrir le menu
}

// Fonction pour fermer le menu hamburger
function closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarMenu = document.getElementById('Menu');
    
    if (navbarMenu.classList.contains('show')) {
        navbarToggler.click(); // Simule un clic pour fermer le menu
    }
}

    searchInput.addEventListener('input', renderProjects);
    year.textContent = new Date().getFullYear();

    renderTags();
    renderProjects();
  