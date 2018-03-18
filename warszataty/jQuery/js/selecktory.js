$(function(){
   //wybieranie po tagu HtML
    var wszystkieParagrafy = $("p");
    console.log(wszystkieParagrafy);
    
    //Wybieranie kilku selektorow
    var mojeSelektory = $("h1, h2, .paragraf");
    console.log(mojeSelektory);
    
    //wybieranie po id
    var titleH1 = $("#first");
    console.log(titleH1);
    
    var pClass = $("div .paragraf");
    console.log(pClass);
});