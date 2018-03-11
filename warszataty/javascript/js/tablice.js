var imiona = ['Adam', 'Marta', 'Paweł', 'Michał', 'Kasia', 'Sandra'];

/*console.log(imiona[0], imiona[3]);*/
// dodawanie elementow do talbicy - na koncu
imiona[6] = "Mikołaj";
imiona[7] = "Kinga";

imiona.push('Kamil');
imiona.push('Marcin', 'Krystian');

// usuwanie elementow tablicy z konca
imiona.pop();
imiona.pop();

// dodawanie elementow tablicy na poczatku

imiona.unshift('Sebastian');
imiona.unshift('Rafał');

// usuwanie elementow tablicy z poczatku

imiona.shift();

console.log(imiona);

// sprawdzenie dlugosci tablicy
var iloscElementowTablicy = imiona.length;
console.log(iloscElementowTablicy);

// rozbijanie tablicy na ciag tekstowy
var elementyTablicyString = imiona.join(", ");
console.log(elementyTablicyString);

// odwrocenie tablicy

imiona.reverse();
console.log(imiona);

// sortowanie tablicy
imiona.sort();
console.log(imiona);

// sprawdzenie czy wartosc w talbicy istnieje

console.log(imiona.indexOf('Sandra'));































