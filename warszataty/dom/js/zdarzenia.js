/*var paragraf = document.getElementById('par2');

//sposob 1
function obsluzZdarzenie(event) {
//    console.log('click');
console.log(event.type);    
}

// wywowyłanie funkcji bez nawiasów na koncu
paragraf.onclick = obsluzZdarzenie;

// sposob 2
paragraf.onclick = function() {
    console.log("Do obsługi zdarzenia przypisania funkcji anonimowa");
}*/

//// sposob 3
//var counter = 0;
//paragraf.addEventListener("mouseenter", function(event){
//    counter++;
//    console.log( event.type);
//    console.log("Zdarzenie wywołane " + counter + " razy");
//});

//var title = document.getElementById("main-header");
//
//title.addEventListener("mouseenter", function(){
//   title.style.fontSize="70px"; 
//    title.style.color="red";
//});
//
//title.addEventListener("mouseleave", function(){
//    title.style.fontSize ="initial";
//    title.style.color="initial";
//});


/*function bodyColor(event){
    console.log(event);
    document.body.style.backgroundColor = "red";
};

var title = document.getElementById("main-header");

title.addEventListener("click", bodyColor);*/

// usuwanie obslugi zdarzen
/*title.removeEventListener("click", bodyColor);*/

//document.querySelector('.link1').addEventListener('click', function(e){
//    e.preventDefault();
//    console.log("Kliknalem link klasy .link1");
//})








