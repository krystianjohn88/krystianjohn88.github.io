/*var zmiennaGlobalna = "Tak! Jestem zmienna globalną i jestem widoczna w funkcjach";

function wyswietlZmienna() {
    console.log(zmiennaGlobalna);
    var zmiennaLokalna = "Tak! Zmienna lokalna to ja. Przestrzeń globalna mnie nie zobaczy";
}

wyswietlZmienna();
console.log(zmiennaLokalna);*/

var zmienna = "Zmienna globalna";

function pokazZmienna() {
    var zmienna = "Zmienna lokalna";
    console.log(zmienna);
}
pokazZmienna();
console.log(zmienna);