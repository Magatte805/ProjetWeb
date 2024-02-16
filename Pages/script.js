window.onload = () => {
    const cityInput = document.getElementById('citySearch');
    const cityResults = document.getElementById('cityResults');

    cityInput.addEventListener('input', async () => {
        const query = cityInput.value.trim();
        if (query.length === 0) {
            cityResults.innerHTML = '';
            return;
        }

        try {
            // Effectuer une requête GET à l'URL '/search' avec le texte de recherche
            const response = await fetch(`/search?query=${query}`);
            const cities = await response.json();

            // Afficher les résultats de la recherche dans la liste cityResults
            cityResults.innerHTML = '';
            cities.forEach(city => {
                const span = document.createElement('span');
                span.textContent = city;
                cityResults.appendChild(span);
                const br = document.createElement('br');
                cityResults.appendChild(br);
            });
        } catch (error) {
            console.error('Error searching cities:', error);
            // Gérer les erreurs de recherche de villes
        }
    });
};


// Fonction pour animer le texte progressivement
function animateText(text, targetElement, delay) {
    const words = text.split(' '); // Sépare le texte en mots
    let index = 0;

    function displayWords() {
        if (index < words.length) {
            targetElement.textContent += words[index] + ' '; // Ajoute le mot au texte affiché
            index++;
            setTimeout(displayWords, delay); // Appelle la fonction de nouveau après le délai spécifié
        }
    }

    displayWords(); // Démarre l'animation
}

// Appel de la fonction d'animation au chargement de la page
window.onload = function() {
    const welcomeText = "L'application vous permet de rechercher des villes de France et de voir pour chaque ville les entreprises qui proposent de l'alternance.";
    const targetElement = document.querySelector('.welcome-container p'); // Sélectionne l'élément p dans la classe welcome-container
    animateText(welcomeText, targetElement, 200); // 100 ms de délai entre chaque mot
};


    