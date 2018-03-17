// pobranie elementu po id - tylko jeden element
// parametr w gerElementById bez #
var parFirst = document.getElementById("parFirst");
console.log(parFirst);

// pobranie elementu po klasie - kolekcja elementow
// paramet w getElementByClassName bez .
var elementLink = document.getElementsByClassName("link")
console.log(elementLink);

// Pobranie elementow po tagu 
var elementTag = document.getElementsByTagName("p");
console.log(elementTag);

// pobranie wszystkiech elementow po selektorze .superlink - tutaj niezbedne jest podanie selektora klasy, jesli pobeiramy klasy lub id jesli pobieramy po id
var elementSuperLink = document.querySelectorAll(".superlink");
console.log(elementSuperLink);

// pobieranie pojedycznego elementu po selektorze id
var parSecond = document.querySelector("#parSecond");
console.log(parSecond);

var mojeLinki = document.querySelectorAll(".link");

console.log(mojeLinki[1]);

for(var i = 0; i<mojeLinki.length; i++){
    console.log("To mój link nr: " + (i + 1));
    console.log(mojeLinki[i]);
    console.log("-------------------------------")
}

//petla forEach dziala na kolekcji pobranej za pomoca metodyt document.querySelectorAll()
mojeLinki.forEach(function(element,index){
    console.log(element);
});


