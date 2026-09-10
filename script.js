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