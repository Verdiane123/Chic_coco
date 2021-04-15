/*toggle entre l'ajout et la suppression de la class responsive au topnav lorsque l'utilisateur clique sur l'icone*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  
}