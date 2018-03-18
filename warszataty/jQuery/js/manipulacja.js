$(function () {
    // pobieranie textu
    var textParagrafu = $("#paragraf").text();
    console.log(textParagrafu);

    // ustawienie tekstu
    $("#paragraf").text("Nowy tekst ustawionny metoda text()");
    
    //dodawanie html
    $(".paragrafnext").html("<strong>Tutaj nowa treść HTML</strong>");

    //dodawanie tresc na koncu selektora
    $(".paragrafnext").append("<br>Nowa treść na końcu selektora");
    
    //dodawanie tresci za selektorem
    $(".paragrafnext").after("<h6>Nowy element za selektorem</h6>");
    
//    //usuwanie elementu wraz z zawratoscia
    $(".paragrafnext").remove();
    
    // uduwanie tylko zwartosc elementu
    $("div").empty();
    
    //dodawanie pojedynczego stylu css
//     $("div").css("background-color", "red");
//    
    //dodawanie wielu styli css
    $("div").css({
    width: "600px",
    height: "120px",
    backgroundColor: "lime"
    });
    
    //dodawanie klasy
    $("h1").addClass("nowa_klasa");
    
    //dodawanie atrybutow
    $("h1").attr("title", "Główny tytuł ustawionny za pomocą jQuery");
    
});

















