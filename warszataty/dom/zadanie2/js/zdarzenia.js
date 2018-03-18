function pobierzImie(event){
    var zmiennaInput = document.getElementsByTagName("input");
    var imie = zmiennaInput[0].value;
    var nazwisko = zmiennaInput[1].value;
    event.preventDefault();
    console.log("imie: " + imie + " nazwisko: " + nazwisko);
};