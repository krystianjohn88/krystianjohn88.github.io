var btn = $("button");

btn.on("click", function(){
    $("div").animate(
        {left: "100px", height: "100px", width: "100px"},
        3000,function(){
            //zmiana koloru niestety nie działa proszę o podpowiedz
    $("div").animate(
        {backgroundColor: "blue"},
        5000,function(){
                
    $("div").html("<h2>Animacja zakończona</h2>");  
              }
          
          
          );  
        });
    
});
