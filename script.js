// Récupérer les éléments HTML pertinents
let nbFacesMessage = document.getElementById("nbFacesMessage");
let nbDes = document.getElementById("nbDes");
const resultat = document.getElementById("resultat");

let nombreDeDes = 0;
let nombreDeFaces = 0;

// Fonction pour ajouter un dé
function ajouterDes(faces) {
nombreDeDes++;
nombreDeFaces = faces;
nbFacesMessage.textContent = "Vous avez choisi "+ nombreDeDes +" dé à " + faces + " faces.";
nbDes.textContent = nombreDeDes;
}

// Fonction pour lancer les dés
function lancerDes() {
// Récupérer le nombre de dés et le nombre de faces
let nbDes = parseInt(document.getElementById("nbDes").textContent);
let nbFaces = nombreDeFaces;

// Vider le contenu de la div résultat avant de lancer les dés
resultat.innerHTML = "";

// Lancer les dés et afficher les résultats
let resultatTotal = 0;
for (let i = 1; i <= nbDes; i++) {
let resultatDe = Math.floor(Math.random() * nbFaces) + 1;
resultatTotal += resultatDe;
let p = document.createElement("p");
p.textContent = "Dé " + i + " : " + resultatDe;
resultat.appendChild(p);
}
// Afficher le résultat total
let pTotal = document.createElement("p");
pTotal.textContent = "Le résultat est : " + resultatTotal;
resultat.appendChild(pTotal);
}

// Vider le contenu de la div après avant de lancer les dés

// Ré initialiser les dés.
function resetDes() {
nombreDeDes = 0;
nombreDeFaces = 0;
let nbFaces = nombreDeFaces;
nbFacesMessage.textContent = "Vous avez choisi "+ nombreDeDes +" dé à " + nombreDeFaces + " faces.";
resultat.innerHTML = "";
nbDes.innerHtml ="";
}

