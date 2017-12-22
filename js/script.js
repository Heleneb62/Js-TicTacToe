/* Creation des objets joueur 1 et 2 en attribuant class et numéro */
var joueur1 = {
  class : "player1",
  numero : '1'
};
var joueur2 = {
  class : "player2",
  numero : '2'
};
/*Fonction du bouton fermer */
function fermer() {
  if (document.getElementById("partiegagnante").style.visibility = "visible") {
    document.getElementById("partiegagnante").style.visibility = "hidden";
  }
}
/* Creation d'un objet table de jeu */
var zoneDeJeu = {
  td1 : null,
  td2 : null,
  td3 : null,
  td4 : null,
  td5 : null,
  td6 : null,
  td7 : null,
  td8 : null,
  td9 : null
};

/* Creation d'une variable qui indique le joueur qui doit jouer */
var joueurActuel = null;
/* Creation de la variable nombreTours qui indique le nombre de tours joués */
var nombreTours = 1;
/* Creation de la variable victoire */
var victoire = false;
/* Creation fonction permettant l'affichage des informations */
function affichageInformations(joueur) {
if (victoire == false && nombreTours <= 9) {
  var prochainJoueur = document.getElementById('toursuivant');
  prochainJoueur.innerHTML = "Au joueur "+joueur.numero;
  var tourActuel = document.getElementById('nbrtours');
  tourActuel.innerHTML = "Tour "+nombreTours;
} else if (victoire == false && nombreTours > 9) {
  var prochainJoueur = document.getElementById('toursuivant');
  prochainJoueur.innerHTML = "Partie terminée!";
  var tourActuel = document.getElementById('nbrtours');
  tourActuel.innerHTML = "Match nul!";
} else {
  var prochainJoueur = document.getElementById('toursuivant');
  prochainJoueur.innerHTML = "Partie terminée!";
  var tourActuel = document.getElementById('nbrtours');
  tourActuel.innerHTML = "Le joueur "+joueurActuel.numero+" a gagné!";
}
}
/* Creation de la fonction initialisation pour remettre les compteurs à zero */
function initialisation() {
 joueurActuel = joueur1;
 affichageInformations(joueurActuel);
}

/* Creation d'une fonction indiquant le début de la partie */
function lancement() {
  initialisation();
}
/* Creation de la fonction pour vérifier s'il y a victoire */
function verif(joueur) {
 var maCombinaison = joueur.numero+joueur.numero+joueur.numero;
 var combis = {
     comb1 : zoneDeJeu.td1+zoneDeJeu.td2+zoneDeJeu.td3 ,
     comb2 : zoneDeJeu.td4+zoneDeJeu.td5+zoneDeJeu.td6 ,
     comb3 :  zoneDeJeu.td7+zoneDeJeu.td8+zoneDeJeu.td9,
     comb4 :  zoneDeJeu.td1+zoneDeJeu.td4+zoneDeJeu.td7,
     comb5 :  zoneDeJeu.td2+zoneDeJeu.td5+zoneDeJeu.td8,
     comb6 :  zoneDeJeu.td3+zoneDeJeu.td6+zoneDeJeu.td9,
     comb7 :  zoneDeJeu.td1+zoneDeJeu.td5+zoneDeJeu.td9,
     comb8 :  zoneDeJeu.td7+zoneDeJeu.td5+zoneDeJeu.td3 };
console.log(combis);

for(var i in combis){
  if(combis[i] === maCombinaison){
    victoire = true;
    break;
  }
}
}

/* Creation fonction button qui s'active au clic des cellules */
function button(numero) {
  var td = document.getElementById("cellule"+numero);

  if (td.className != joueur1.class && td.className != joueur2.class && victoire == false) {
    console.log("Le joueur " + joueurActuel.numero + ' joue la case '+numero+ ' pour le tour '+nombreTours);
    var index ="td"+numero;
    zoneDeJeu[index] = joueurActuel.numero;
    td.className = joueurActuel.class;
    verif(joueurActuel);
    nombreTours++;

    if(victoire == false) {
      if(nombreTours > 9) {
        alert('Match nul');
      }
      if (joueurActuel.numero == '1') {
        joueurActuel = joueur2;
      } else {
        joueurActuel = joueur1;
      }
    } else {
      document.getElementById("partiegagnante").style.visibility = "visible";
      document.getElementById("partiegagnante").innerHTML = 'Le joueur '+joueurActuel.numero+' a gagné! <br> <img style="height: 200px; width: 200px;" src="img/win.jpg"/> <br> <button onclick="fermer()">FERMER</button>';
      alert("Le joueur "+joueurActuel.numero+" a gagné!");
    }

    affichageInformations(joueurActuel);

  } else if (victoire == true) {
    alert("La partie est terminée! Le joueur "+joueurActuel.numero+" a gagné!");

  } else if (nombreTours > 9) {
    alert("La partie est terminée! Match nul!");

  } else {
    var index ="td"+numero;
    var caseJouee = zoneDeJeu[index];
    alert("La case "+numero+" est déjà jouée par le joueur "+caseJouee);

  }

}
