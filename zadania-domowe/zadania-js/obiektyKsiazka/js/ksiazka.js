class Ksiazka {
    construtor(tytul, autor, przeczytana){
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    };
    opiszKsiazke(){
        console.log("Książka ma tytuł "+this.tytul+" autorem jest "+this.autor+" i została "+this.przeczytana);
    };
    
};

var proba = new Ksiazka("takta", "takatk", "dsds");
var widzmin = {tytul: 'Wiedzmin',
               autor: 'Sapkowski',
               przeczytana: true};

var harryPotter = {tytul: 'Harry Potter',
                   autor: 'Rowling',
                   przeczytana: false};

var wladcaPierscieni = {tytul: 'Władca Pierścieni',
                        autor: 'Tolkien',
                        przeczytana: false};

var globalna = [widzmin+harryPotter+wladcaPierscieni];
console.log(globalna);

proba.opiszKsiazke();
