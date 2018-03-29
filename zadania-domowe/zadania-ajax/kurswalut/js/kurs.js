var aktualnaCenna = Number($("#kupno").html());   //zapisuje do zmiennej aktualny stan kursu ktory wyswietla sie na stronie

function pobierzKurs(event){
    event.preventDefault();
   $.getJSON(  "https://blockchain.info/pl/ticker",   function (data) {      

       var tablica = data.PLN;
       var kursKupno = tablica.buy;
       var kursSprzedaz = tablica.sell;
       var kursKupno2 = kursKupno.toFixed(2);
       var kursSprzedaz2 = kursSprzedaz.toFixed(2);
       $("#kupno").html(kursKupno2);
       $("#sprzedaz").html(kursSprzedaz2);
       
   //Sprawdzam jak kurs walut sie zmienil czy wzrosl czy zmalal o ile został poraz pierwszy nacisniety button, wyswietli kurs "bez zmian"
    if(aktualnaCenna == 0){
        $("#kursbezzmian").html("Klikni ponownie aby sprawdzić czy kurs rośnie czy maleje");
    }else if(kursKupno2 > aktualnaCenna){
       $("#kupnoStrzalka").html(" <i class='fas fa-arrow-up'></i>");
        $("#sprzedazStrzalka").html(" <i class='fas fa-arrow-up'></i>");
        $("#kursbezzmian").html(" ");
        
       }else if(kursKupno2 < aktualnaCenna) {
             $("#kupnoStrzalka").html(" <i class='fas fa-arrow-down'></i>");
             $("#sprzedazStrzalka").html(" <i class='fas fa-arrow-down'></i>");
             $("#kursbezzmian").html(" ");
             }else{
                 $("#kursbezzmian").html(" <strong>Bez Zmian! Klikni później</strong>");
                
             };
    aktualnaCenna = Number($("#kupno").html());  
   })          
   }; 