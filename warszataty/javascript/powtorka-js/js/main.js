$(document).ready(function () {
    
    function silnia(n){
//        if(n ==0){
//            return 1;
//        }
//        var wynik = n * silnia(n-1);
//        return wynik;
        
        var wynik = 1;
        for(var i=1; i<=n; ++i){
            wynik *= i;
        }
        return wynik;
    }
    
    var divBlock = $("#block");
    var paragraf = $("#paragraf");
    console.log(silnia(3));
});
