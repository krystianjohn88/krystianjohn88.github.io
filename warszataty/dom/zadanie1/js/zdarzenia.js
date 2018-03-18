//var zmianaparagrafu1 = document.getElementById(paragraf1);
//var zmianaparagrafu2 = document.getElementById(paragraf2);
//
//function ustawTlo(){
//    zmianaparagrafu1.style.backgroundColor = "red";
//    zmianaparagrafu2.style.backgroundColor = "yellow";
//};
//var przyciskniecie = document.getElementById("przycisk");
//przyciskniecie.addEventListener("onclick", ustawTlo );

function ustawTlo(){
    var akapity = document.getElementsByTagName("p");
    akapity[0].style.backgroundColor = "red";
    akapity[1].style.backgroundColor = "yellow";
};
