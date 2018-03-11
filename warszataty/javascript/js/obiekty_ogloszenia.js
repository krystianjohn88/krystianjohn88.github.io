
class Ogloszczenia {
    
    constructor( tytul, tresc, cena, katygoria ) {
        this.tytul = tytul;
        this.tresc = tresc;
        this.cena = cena;
        this.katygoria = katygoria;
    }
         // ---------METODA--------- //
    wyswietl() {
        var ogloszenie = "Tytuł ogłoszenia: " + this.tytul + "\n Treść: " + this.tresc + "\n Cena: " + this.cena + "\n Katygoria: " + this.katygoria;
        
        return ogloszenie;
    }
}

var ogloszenie1 = new Ogloszczenia("Sprzedam Opla", "Niemiec płąkał jak sprzedawał", 500, "motoryzacja");



var ogloszenieDoWyswietlenia = ogloszenie1.wyswietl();
console.log(ogloszenieDoWyswietlenia);
