// pobieram innerHTML - pobieranie
var parFirst = document.getElementById("parFirst");
console.log(parFirst.innerHTML);
console.log(parFirst.outerHTML);

// inner HTML - przypisanie wartosci

var mainHeader = document.querySelector("h1");
mainHeader.innerHTML = "<span>Nowa zawartosc h1 wstawiona w span</span>";

// zmiana styli
mainHeader.style.color="red";

//przypisanie klasy
mainHeader.className = "headingtext";

//pobieranie klas elementu
console.log(mainHeader.className);

//classList
mainHeader.classList.add("nowa-klasa");

// classList usuwanie klasy
mainHeader.classList.remove("headingtext");