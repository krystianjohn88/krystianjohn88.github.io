class Ksiazka {
    constructor(tytul, autor, przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }
    opiszKsiazke() {
        
        var CzyPrzeczytana;
        if(this.przeczytana === true){
            CzyPrzeczytana = "przeczytana";
        }else{
            CzyPrzeczytana = "nie przeczytana";
        };
        return "Książka ma tytuł "+ this.tytul +" autorem jest "+ this.autor +" i została "+ CzyPrzeczytana;
    }
}

var widzmin = new Ksiazka('Wiedzmin','Sapkowski', true);

var harryPotter = new Ksiazka('Harry Potter', 'Rowling', false);

var wladcaPierscieni = new Ksiazka('Władca Pierścieni', 'Tolkien', false);

var globalna = [widzmin, harryPotter, wladcaPierscieni];

function iloscPrzeczytanych(tablica){
    var ilePrzeczytanych = 0;
    for(var i=0; i < tablica.length; i++){
        console.log(tablica[i].opiszKsiazke());
        if(tablica[i].przeczytana === true){
            ++ilePrzeczytanych;
        } 
    }
    console.log("Przeczytanych: "+ ilePrzeczytanych);
}; 
iloscPrzeczytanych(globalna);