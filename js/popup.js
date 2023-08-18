// Afficher la pop-up lors du chargement de la page
window.onload = function() {
    var modal = document.getElementById("popUP");
    modal.style.display = "block";
  };
  
  // Fermer la pop-up lors du clic sur le bouton de fermeture
  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    var modal = document.getElementById("popUP");
    modal.style.display = "none";
  };