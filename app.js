// déclaration du bouton
btnReturn = document.getElementById("btn-return");

// montrer le bouton si on scrolle de 100 px
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 180 || document.documentElement.scrollTop > 180){
        btnReturn.style.display = "block";
    }else{
        btnReturn.style.display = "none";
    }
}
// fonction goToTop
function goToTop(){
    // fct scrollIntoView() => faire défiler la page pour afficher l'élément auquel elle est appellée.
    // ici: nous l'appellons sur le body afin que la page défile vers le haut.
    document.body.scrollIntoView({
        behavior : "smooth",
    });
}
// appel goToTop() au clic du bouton de retour en haut

btnReturn.addEventListener("click", goToTop);
