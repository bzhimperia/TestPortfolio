//Nombre aléatoire
let nombreAleatoire = Math.floor(Math.random() * 101);
//nombre d'essais
let attempts = 0;

//nombres de vies
let remainingLives = 7;

function checkGuess() {
    //nombre du joueur
    let nombreJoueur = document.getElementById("user-input").value;
    attempts++;

    //si le joueur ne rentre rien dans la case
    if (nombreJoueur === "") {
        alert("Entrez un nombre dans la case");
        return;
    }

    nombreJoueur = Number(nombreJoueur);
    //si le joueur ne rentre pas un nombre
    if (isNaN(nombreJoueur)) {
        alert("Ceci n'est pas un nombre");
        return;
    }
    //si le nombre du joueur est plus petit que le resultat
    if (nombreJoueur < nombreAleatoire) {
        document.getElementById("result").innerHTML = "Le nombre a deviner est plus haut";
        updateLives();
    //si le nombre du joueur est plus petit que le resultat
    } else if (nombreJoueur > nombreAleatoire) {
        document.getElementById("result").innerHTML = "Le nombre a deviner est plus bas";
        updateLives();
    //si le nombre du joueur est correct
    } else {
        document.getElementById("result").innerHTML = `Bravo vous avez trouvé en ${attempts} essais.`;
        document.getElementById("user-input").setAttribute("disabled", "true");
    }
}
//mise a jour des vies
function updateLives() {
    if (remainingLives > 0) {
        document.querySelector(".vie:nth-child(" + (remainingLives+1) + ")").classList.add("erreur");
        remainingLives--;
    } else {
        document.getElementById("result").innerHTML = "Vous avez perdu";
        document.getElementById("user-input").setAttribute("disabled", "true");
    }
}

function restartGame() {
    // Réinitialiser les éléments du jeu (à adapter selon vos besoins)
    document.getElementById("user-input").value = "";
    document.getElementById("result").innerHTML = "";
    attempts = 0;
    
    // Réinitialiser les vies (si nécessaire)
    let vies = document.querySelectorAll(".vie");
    for (let vie of vies) {
        vie.classList.remove("erreur");
    }
    remainingLives = 7;
    // Réinitialiser d'autres états ou variables du jeu selon votre logique
    document.getElementById("user-input").removeAttribute("disabled");
}