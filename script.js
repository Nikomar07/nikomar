const formulaire = document.getElementById("contactForm");

if (formulaire) {
    formulaire.addEventListener("submit", function() {

        const bouton = formulaire.querySelector(
            "button[type='submit']"
        );

        if (bouton) {
            bouton.textContent = "Envoi en cours...";
            bouton.disabled = true;
        }

    });
}

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
}