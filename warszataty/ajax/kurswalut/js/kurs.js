var aktualnaCenna = Number($("#kupno").html());
function staraCena(cena){
    cena = aktualnaCenna;
}
staraCena(aktualnaCenna);

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
       
   
    if(kursKupno2 > aktualnaCenna){
       $("#kupnoStrzalka").html(" <i class='fas fa-arrow-up' style='color: green';></i>");
        $("#sprzedazStrzalka").html(" <i class='fas fa-arrow-up' style='color: green';></i>");
        
       }else if(kursKupno2 < aktualnaCenna) {
             $("#kupnoStrzalka").html(" <i class='fas fa-arrow-down' style='color: red';></i>");
             $("#sprzedazStrzalka").html(" <i class='fas fa-arrow-down' style='color: red';></i>");
           
             }else{
                 $("#kupnoStrzalka").html(" <strong>Bez Zmian</strong>");
                 $("#sprzedazStrzalka").html(" <strong>Bez Zmian</strong>");
             };
    aktualnaCenna = Number($("#kupno").html());   
   }) 
    
             
   }; 

