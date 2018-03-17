var parFirst = document.getElementById("parFirst");

// pobieram rodzica dla elementu #parFirst za pomoca wlasciwosci parentElement
console.log(parFirst.parentElement);

//childNodes pobiera wszystkie wezly w tym takze iale znaki miedzy elementami jako "text" oraz komentarze

console.log(parFirst.childNodes);

// children pobiera tylko te wezly ktore sa elementami html
console.log(parFirst.children);

//pobieram pierwsze dziecko elementu #parFirst
var pierwszeDziecko = parFirst.children[0];
// pobiera nastepny wezel dla pierwszeDziecko, ktory jest elementem w relacji rodzenstwa
console.log(pierwszeDziecko.nextElementSibling);

// pobiera nastepny wezel dla pierwszeDziecko niezaleznie czy jest elementem html, text czy komentarzem
console.log(pierwszeDziecko.nextSibling);

//lastChild pobiera ostatnie dziecko elementu nie zaleznie czy jest elementem html, textem czy komentarzem
var ostatnieDziecko = parFirst.lastChild;
// lastElementChild pobiera ostatnie dziecko ktore jest elementem
var ostatnieDziecko = parFirst.lastElementChild;
console.log(ostatnieDziecko);
console.log(ostatnieDziecko.previousElementSibling );