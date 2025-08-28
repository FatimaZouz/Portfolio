document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.querySelector(".close");

  const projectDetails = {
    1: {
      description: `
        <h3>Projet Hercule</h3>
        <p>Ce site vitrine a été réalisé dans le cadre de ma formation à l’école O’Clock. L’objectif était de concevoir un site entièrement en HTML/CSS et JavaScript, en respectant les bonnes pratiques d’ergonomie et en veillant à l’adaptabilité sur tous types d’écrans.</p>
        <p>Technologies utilisées : HTML/CSS/JavaScript</p>
      `,
      github: "https://github.com/FatimaZouz/projet-hercule"
    },
    2: {
      description: `
        <h3>Projet O'Coffee</h3>
        <p>Ce projet est une mise en situation pour un commerce fictif de cafés. L’objectif était de concevoir un site entièrement en HTML et CSS, en respectant les bonnes pratiques d’ergonomie et en veillant à l’adaptabilité sur tous types d’écrans.  Une couche dynamique a été ajoutée avec JavaScript pour améliorer la fluidité de navigation. Le back-end a été développé selon une architecture monolithique.</p>
        <p>Technologies utilisées : HTML/CSS, JavaScript, Node.js, Express, EJS, PostgreSQL</p>
      `,
      github: "https://github.com/FatimaZouz/projet-o-coffee"
    },
    3: {
      description: `
        <h3>Projet Pokedex</h3>
        <p>Pokedex est une encyclopédie virtuelle recensant tous les Pokémons du jeu.  Les utilisateurs peuvent créer des équipes, y ajouter des Pokémons, les renommer, les supprimer, etc. Le back-end repose sur une API REST pour gérer les données.</p>
        <p>Technologies utilisées : HTML/CSS, JavaScript, Node.js, Express, PostgreSQL</p>
      `,
      github: "https://github.com/FatimaZouz/projet-pokedex"
    },
    4: {
      description: `
        <h3>Projet SkillSwap</h3>
        <p>SkillSwap est une plateforme collaborative dédiée à l’échange de compétences, tous domaines confondus. Le site intègre un système complet d’authentification, respecte les normes de sécurité essentielles, et propose plusieurs fonctionnalités permettant aux utilisateurs de proposer, rechercher et échanger des savoir-faire.</p>
        <p>Technologies utilisées : React, TailwindCSS, Node.js, Express, PostgreSQL</p>
      `,
      github: "https://github.com/FatimaZouz/projet-skillswap"
    }
  };
  
  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      const id = card.dataset.project;
      if (projectDetails[id]) {
        modalBody.innerHTML = projectDetails[id].description + 
          `<p style="text-align:center; margin-top:1rem;">
            <a href="${projectDetails[id].github}" target="_blank" class="github-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.68 7.68 0 0 1 2-.27c.68.003 1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              Voir le projet sur GitHub
            </a>
          </p>`;
      } else {
        modalBody.innerHTML = "<p>Détails non disponibles.</p>";
      }
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
  
  
});


const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('#nav-links a');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});


 
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
      navLinks.classList.remove('show');
    }
  });







  document.addEventListener("DOMContentLoaded", () => {
    
    const modal = document.getElementById("success-modal");
    const closeModal = document.getElementById("close-success-modal");
    const btnClose = document.getElementById("btn-close-modal");
  
    function showSuccessModal() {
      modal.style.display = "flex";
    }
  
    closeModal.onclick = btnClose.onclick = () => {
      modal.style.display = "none";
    }
  
    window.onclick = (e) => {
      if (e.target === modal) modal.style.display = "none";
    }
  

    emailjs.init("7o_GEw3TL3RizjYyk"); 
  
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); 
  
      
      let combinedName = form.querySelector("[name='first_name']").value + " " +
                         form.querySelector("[name='last_name']").value;
  
      let hidden = document.createElement("input");
      hidden.type = "hidden";
      hidden.name = "from_name";
      hidden.value = combinedName;
      form.appendChild(hidden);
  
      emailjs.sendForm("service_ckrhl9j", "template_aq1hkvu", form)
        .then(() => {
          showSuccessModal(); 
          form.reset();
          hidden.remove();
        })
        .catch((err) => alert("Erreur lors de l'envoi : " + JSON.stringify(err)));
    });
  });
  