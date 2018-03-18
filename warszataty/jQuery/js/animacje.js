var btn = $("#animate");

btn.on("click", function(){
    
//    $("h1").hide(4000).show("fast");
//    $("h1").fadeOut(3000).fadeIn("slow");
//    $("h1").slideUp(600).slideDown(300);
    $("h1").animate(
        {"left": "300px", "top": "300px"},
        4000,
        function(){
            alert("Koniec animacji");
        }
    );
});
