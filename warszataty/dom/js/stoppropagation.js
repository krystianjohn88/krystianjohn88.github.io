var div = document.getElementById("parFirst");
var par = document.getElementById('par2');

div.addEventListener("click", function(e){
    console.log("Klikneto w diva");
});

par.addEventListener("click", function(e){
    e.stopPropagation();
    console.log("Klikneto w paragraf");
});