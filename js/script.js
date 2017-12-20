var joueur = 1;
function button(numero) {
  var td = document.getElementById('cellule'+numero);
  if (td.className == "player1" || td.className == "player2") {
    alert("C'est déjà joué!");
  } else {
    var player = "";
    if (joueur%2 == 1) {
    player = 1;
  } else {
    player = 2;
  }
  td.className = "player"+player;
  joueur++;
  }
}
