// Contenu HTML du header
const headerHTML = `
<header id="header">
    <nav class="navbar">
        <a href="#" class="nav-logo">DEMBELE.</a>
        
        <ul class="nav-menu">
            <li class="nav-item">
                <a href="home.html" class="nav-link">Home</a>
                <div class="circle"></div>
            </li>
            <li class="nav-item">
                <a href="portfolio.html" class="nav-link">Portfolio</a>
                <div class="circle"></div>
            </li>
            <li class="nav-item">
                <a href="about.html" class="nav-link">About</a>
                <div class="circle"></div>
            </li>
            <li class="nav-item">
                <a href="contact.html" class="nav-link">Contact</a>
                <div class="circle"></div>
            </li>
        </ul>
        <div class="nav-button">
            <button class="btn">Mon CV <i class="uil uil-file-alt"></i></button>
        </div>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>
`;

// Injecter le header dans l'élément avec l'ID "header-container"
document.addEventListener('DOMContentLoaded', function() {
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
    
    // Ajouter les écouteurs d'événements après l'injection du header
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const wrapper = document.querySelector('.wrapper');
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      wrapper.classList.toggle("hidden");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      wrapper.classList.toggle("hidden");
    }));

  } else {
    console.error("L'élément 'header-container' n'a pas été trouvé dans le DOM.");
  }
});


// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING
window.onscroll = function() {
    headerShadow();
}

function headerShadow() {
    const navHeader = document.querySelector('.navbar');

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0, 0.1)";
    }
    else {
        navHeader.style.boxShadow = "none";
    }
}

document.addEventListener("DOMContentLoaded", function() {
  // Effet de saisie pour le texte en bas
  var typingEffects1 = new Typed(".typedText2", {
      strings: ["Blog !", ""],
      loop: true,
      typeSpeed: 100,
      backSpeed: 89,
      backDelay: 2000
  });

  // Effet de saisie pour le texte principal
  var typingEffects = new Typed(".typedText", {
      strings: ["Développeur", "Développeur Web et Mobile"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 89,
      backDelay: 2000
  });
});

////SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

//// HOME
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

//// HEADINGS
sr.reveal('.top-header',{})


//// ABOUT INFO & CONTACT
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.about-info',{delay: 100})
sr.reveal('.contact-info',{delay: 100})

//// ABOUT SKILLS AND FORM BOX
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.skills-box',{delay: 100})
sr.reveal('.form-control',{delay: 100})

//// PROJECTS HOME BOX
srRight.reveal('.project-card',{interval: 200})
srRight.reveal('.card-box',{interval: 200})

//// PROJECTS PORTFOLIO BOX
srRight.reveal('.project-card1',{interval: 200})
srRight.reveal('.card-box1',{interval: 200})

// //// CHANGE ACTIVE LINK
// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//     const scrollY = window.scrollY;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight, 
//             sectionTop = current.offsetTop - 50,
//             sectionId = current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
//         }
//         else {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
//         }
//     })
// }

// window.addEventListener('scroll', scrollActive);



/////////////////////////// Données JSON ///////////////  DATA JSON ///////////////////////////////////

// Initialiser ScrollReveal

// Exemple de données de projets
const projects = [
  {
      "id": 1,
      "image": "assets/image/important_flutter.jfif",
      "category": "News",
      "title": "Bienvenue sur un blog dédié à l'univers de la technologie,",
      "description": "Hello"
  },
  {
      "id": 2,
      "image": "assets/image/become_dev.jfif",
      "category": "Programming",
      "title": "Devenir un développeur front-end,",
      "description": "Dans l'univers dynamique et en constante évolution de la technologie"
  },
  {
      "id": 3,
      "image": "assets/image/audace.jfif",
      "category": "Programming",
      "title": "Le parcours d'un développeur audace,",
      "description": "Un développeur audace est une personne qui a acquis en compétence en,"
  }
];

// Sélectionner le conteneur des projets
const projectContainer = document.getElementById('project-container');

// Boucle pour générer les cartes de projets
projects.forEach((project, index) => {
  const card = `
    <div class="card-box" data-sr-id="${index}">
      <img src="${project.image}" alt="Project Image" class="project-image">
      <span>${project.category}</span>
      <p>${project.description}</p>
      <h4>${project.title}</h4>
      <button class="full-width-btn">Voir plus</button>
    </div>
  `;

  // Utiliser insertAdjacentHTML pour ajouter du HTML sans remplacer le contenu existant
  projectContainer.insertAdjacentHTML('beforeend', card);
});

  