//metoda find wyszukuje potomkow selektora. W ponizszym przykladzie
//poszuka paragrafow znajdujachy sie w div
//metoda find moze wyszukiwac po tagu, klasie, id, atrybucie

$("div").find("p").css({fontSize: "60px", color: "deeppink"});

//metoda each jako parametr przyjmuje funkcje zwrotna, ktora zostanie wykonanana kazdym znalezionym elemencie
$('p').each( function(index, element){
    console.log(index, element); 
    $(this).addClass("new_class").css({fontSize: "40px", backgroundColor: "yellow"});
});