// Operatory arytmetyczne

var liczba1 = 10;
var liczba2 = 5;

// dodawanie

var wynik = liczba1 + liczba2;
console.log(wynik);

// odejmowanie

wynik = liczba1 - liczba2;
console.log(wynik);

wynik = liczba1 * liczba2;
console.log(wynik);

wynik = liczba1 / liczba2;
console.log(wynik);

wynik = liczba1 % liczba2;
console.log(wynik);

// inkrementacja

liczba2++;
liczba2--;
console.log(liczba2);

//operatory przypisania

var liczba3 = 200;
var liczba4 = 100;
var liczba5 = 15;
var liczba6 = 40;
var liczba7 = 7;

liczba3 += 200; // liczba3 = liczba3 + 200
console.log(liczba3);
liczba4 -= 50; // liczba4 = liczba4 - 50
console.log(liczba4);
liczba5 *= 2; // liczba5 = liczba5 *2
console.log(liczba5);
liczba6 /= 2; // liczba6 = liczba6 /2
console.log(liczba6);
liczba7 %= 2; // liczba7 = liczba7 %2
console.log(liczba7);

//operatory porownania

var liczba8 = 42;
var liczba9 = 10;

if(liczba8 == liczba9){
    console.log("Warunek spelniony, czyli true");
} else {
    console.log("Warunek nie spelniony, czyli false");
}

if(liczba8 != liczba9){
    console.log("Warunek spelniony, czyli true");
} else {
    console.log("Warunek nie spelniony, czyli false");
}

var liczba10 = 20;
var liczba11 = 4;
var czyWiosna = "Tak";

if(liczba10 < liczba11 && czyWiosna == "Tak") {
    console.log("Warunek spelniony");
} else {
    console.log("Warunek nie spelniony");
}

if(liczba10 < liczba11 || czyWiosna == "Tak") {
    console.log("Warunek spelniony");
} else {
    console.log("Warunek nie spelniony");
}

if( !czyWiosna) {
    console.log("Warunek spelniony");
} else {
    console.log("Warunek nie spelniony");
}










