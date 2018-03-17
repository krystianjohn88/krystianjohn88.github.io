// pobieranie istniejacy wezel o id output
var istniejacyWezel = document.getElementById("output");

//sprawdzam czy udalo sie go pobrac
//console.log(istniejacyWezel);

// tworze nowy element html
var newElement = document.createElement("p");

// tworze trescia do paragrafu
var newElementContent = document.createTextNode("Tutaj tworze tresc paragrafu, o!");

// wstawiam nowo utworzony tekst do nowo utworzeonego paragrafu
newElement.appendChild(newElementContent);

//dodaje do paragrafu atrybut class='textpar'
newElement.setAttribute('class', 'textpar');



//console.log(newElement);

//wstawiam nasz przygotowany paragraf do div#output
istniejacyWezel.appendChild(newElement);

// usuwanie elementow z dokumentu
istniejacyWezel.parentElement.removeChild(istniejacyWezel);
//document.getElementById("parFirst").removeChild(istniejacyWezel);

// insertBefore
var link = document.getElementsByClassName("superlink")[0];
var br = document.createElement("br");
link.parentElement.insertBefore(br, link.nextElementSibling);

//usuniecie atrybutu
link.removeAttribute('class');
