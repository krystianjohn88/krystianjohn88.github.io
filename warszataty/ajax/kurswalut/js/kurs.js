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
       
       
       
    if(29205 > akutalnaCenna){
       $("#kupnoStrzalka").html("<i class='fas fa-arrow-up' style='color: green';;></i>");
        $("#sprzedazStrzalka").html("<i class='fas fa-arrow-up' style='color: green';></i>");
       }else if(kursKupno < akutalnaCenna) {
             $("#kupnoStrzalka").html("<i class='fas fa-arrow-down' style='color: red';></i>");
            $("#sprzedazStrzalka").html("<i class='fas fa-arrow-down' style='color: red';></i>");
             }else{
                 $("#kupnoStrzalka").html("<i class='fas fa-arrows-alt-v'></i>");
                 $("#sprzedazStrzalka").html("<i class='fas fa-arrows-alt-v'></i>");
             };
       
   }) 
    var akutalnaCenna = Number($("#kupno").html());
       console.log(akutalnaCenna);
             
   }; 
