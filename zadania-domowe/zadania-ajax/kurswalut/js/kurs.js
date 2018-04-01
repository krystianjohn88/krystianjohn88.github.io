var aktualnaCenna = Number($("#kupno").html());   //zapisuje do zmiennej aktualny stan kursu ktory wyswietla sie na stronie
var iloscKlikniec = 0;
var sprawdzKtoryText;

function pobierzKurs(event){
    event.preventDefault();
   $.getJSON(  "https://blockchain.info/pl/ticker",   function (data) {  
    
      //------------Waluta wybor poczatek----------------
       console.log(Object.getOwnPropertyNames(data)[0]);
       var sprawdzWybor = $('select').val();
       var podpisWaluty;
      
       if(sprawdzWybor === 'PLN'){
           tablica = data.PLN;
           podpisWaluty = "BTC/PLN";
       }else if(sprawdzWybor === 'EUR'){
           tablica = data.EUR;
           podpisWaluty = "BTC/EUR";
       }else{
           tablica = data.USD;
           podpisWaluty =  "BTC/USD";
       }
       
       var jakaWal = $("#walutakupno").html()
       //------------Waluta wybor koniec----------------

       var tablica;
       var kursKupno = tablica.buy;
       var kursSprzedaz = tablica.sell;
       var kursKupno2 = kursKupno.toFixed(2);
       var kursSprzedaz2 = kursSprzedaz.toFixed(2);
       $("#kupno").html(kursKupno2);
       $("#sprzedaz").html(kursSprzedaz2);
       
   //Sprawdzam jak kurs walut sie zmienil czy wzrosl czy zmalal o ile został poraz pierwszy nacisniety button, wyswietli kurs "bez zmian"
    if(aktualnaCenna == 0 || podpisWaluty != jakaWal ){
        $("#kursbezzmian").html("Klikni ponownie aby sprawdzić czy kurs rośnie czy maleje");
        $("#kupnoStrzalka").html("");
        $("#sprzedazStrzalka").html("");
        $("#walutakupno").html(podpisWaluty);
        $("#walutaSprzedaz").html(podpisWaluty);
    }else if(kursKupno2 > aktualnaCenna){
       $("#kupnoStrzalka").html(" <i class='fas fa-arrow-up'></i>");
        $("#sprzedazStrzalka").html(" <i class='fas fa-arrow-up'></i>");
        $("#kursbezzmian").html(" ");
        $("#walutakupno").html(podpisWaluty);
        $("#walutaSprzedaz").html(podpisWaluty);
        
       }else if(kursKupno2 < aktualnaCenna) {
             $("#kupnoStrzalka").html(" <i class='fas fa-arrow-down'></i>");
             $("#sprzedazStrzalka").html(" <i class='fas fa-arrow-down'></i>");
             $("#kursbezzmian").html(" ");
             $("#walutakupno").html(podpisWaluty);
             $("#walutaSprzedaz").html(podpisWaluty);
             }else{
                 switch(sprawdzKtoryText){
    case 'pierwszytext':
        $("#kursbezzmian").html(" <strong>Bez Zmian! Klikni później</strong>");
    break;
    case 'drugitext':
        $("#kursbezzmian").html(" <strong>Bez Zmian! Jeszcze chwilę</strong>");
    break;
    default:
        $("#kursbezzmian").html(" <strong>Bez Zmian! Klikni później</strong>");
}            
                $("#walutakupno").html(podpisWaluty);
                $("#walutaSprzedaz").html(podpisWaluty);
                 
                 
             };
    aktualnaCenna = Number($("#kupno").html());  
    
       
   
   })  
    
    function liczenieklikniec(){
        ++iloscKlikniec;
    };
    
    liczenieklikniec();
    if(iloscKlikniec % 2 == 0){
       sprawdzKtoryText = 'pierwszytext';
    }else{
        sprawdzKtoryText = 'drugitext';
    };

 
   }; 


 //------------------------- Waluta poczatek ------------------------
       
       var walutaPLN = 'PLN';
       var walutaUSD = 'USD';
       var walutaEUR = 'EUR';
       var walutaWybrana;
       var tablicaWalut = [walutaPLN,walutaUSD,walutaEUR];
       
       function wyborWaluty(tablica){
           for(var i=0; i<tablica.length; i++){
               walutaWybrana = tablica[i];
               $('#jakaWaluta').append('<option  value='+walutaWybrana+'>'+walutaWybrana+'</option>');
               
           }
           
       };
       
//       wyborWaluty(tablicaWalut);
      
       
       //------------------------Waluta koniec ---------------------------

    
document.addEventListener("DOMContentLoaded", function(event) {
    $.getJSON(  "https://blockchain.info/pl/ticker",   function (data) { 
    
    //-------------------Waluty z bazy danych ajax tworza liste---------------
       
      
        var objectSymbols = Object.values(data)[1].sell;
        console.log(objectSymbols);
        
          var walWyb;
    var tablicaWalut = Object.getOwnPropertyNames(data);
        console.log(tablicaWalut);
    function wszystkieWaluty(tablica){
        for(n=0; n<tablica.length; n++){
            walWyb = tablica[n];
            $('#jakaWaluta').append('<option  value='+walWyb+'>'+walWyb+'</option>');
             var proba = walWyb;
           
            
//            console.log(proba);
    }
    }
    wszystkieWaluty(tablicaWalut);
    //--------Koniec funkcji Pobierz kurs ----------------   
    
    });
    console.log("DOM został wczytany");
    console.log("Tutaj dopiero wyłapujemy elementy");

});

