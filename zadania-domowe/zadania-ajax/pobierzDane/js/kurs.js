function pobierzDane(event){
    event.preventDefault();
   $.getJSON(  "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",   function (data) { 
       //Sprawdzam co znajduje sie w bazie danych ajax
       console.log(data);
       //Tworze zmienne z przypisanymi danymi z bazy ajax
       var imie = data.imie;
       var nazwisko = data.nazwisko;
       var zawod = data.zawod;
       var firma = data.firma;
       
       //Tworze nowy tag 'div' i nadaje mu id append powoduje dodanie na koncu elementu body "Niestety cały czas tworzy sie pusty div o id daneprogramisty
       
      /* $('body').append("<div id='dane-programisty'></div>");
       $('#dane-programisty').html('Dane programisty<br> Imie: ' +imie+ '<br>Nazwisko: '+nazwisko+'<br>Zawód: '+zawod+'<br>Firma: '+firma);*/
       
       
       //Dodałem do html section gdzie moge nadpisywac zawartosc dzieki czemu nie tworza mi sie puste div o tym samym id
       $('section').html("<div id='dane-programisty'></div>");
       $('#dane-programisty').html('Dane programisty<br> Imie: ' +imie+ '<br>Nazwisko: '+nazwisko+'<br>Zawód: '+zawod+'<br>Firma: '+firma);

   }) 
    
             
   }; 

