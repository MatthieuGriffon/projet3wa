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

//CARROUSEL//

$(document).ready(function () {
    function detect_active() {
      // get active
      var get_active = $("#dp-slider .dp_item:first-child").data("class");
      $("#dp-dots li").removeClass("active");
      $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
    }
    $("#dp-next").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
      detect_active();
    });
  
    $("#dp-prev").click(function () {
      var total = $(".dp_item").length;
      $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  
    $("#dp-dots li").click(function () {
      $("#dp-dots li").removeClass("active");
      $(this).addClass("active");
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
    });
  
    $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
      var get_slide = $(this).attr("data-class");
      console.log(get_slide);
      $("#dp-slider .dp_item[data-class=" + get_slide + "]")
        .hide()
        .prependTo("#dp-slider")
        .fadeIn();
      $.each($(".dp_item"), function (index, dp_item) {
        $(dp_item).attr("data-position", index + 1);
      });
  
      detect_active();
    });
  });
  


