//function oblicz(){
//    var wplata = document.getElementById("wplata").value;
//    var iloscLat = document.getElementById("ilosc-lat").value;
//    var okreKapitalizacji = document.getElementById("okres-kapitalizacji").value;
//    var oprocentowanie = document.getElementById("oprocentowanie").value/100;
//    var podatek = document.getElementById("podatek").checked;
//    
//    var oprocentowanieOpodatkowane = 0;
//    function obliczZysk(wplata, iloscLat, okreKapitalizacji, oprocentowanieOpodatkowane, podatek){
//        
//        var kapital = wplata*(1+(oprocentowanieOpodatkowane/okreKapitalizacji)^(iloscLat*okreKapitalizacji));
//        if(podatek == true){
//            oprocentowanieOpodatkowane = oprocentowanie*0.19;}
//            else{
//             oprocentowanieOpodatkowane = oprocentowanie;
//            }
////        var kapital = wplata*Math.pow(1+(oprocentowanieOpodatkowane/okreKapitalizacji))
//       return kapital;     
//    };
//    debugger;
//    var wynik = obliczZysk(wplata, iloscLat, okreKapitalizacji, oprocentowanieOpodatkowane, podatek);
//    document.getElementById("wynik").innerHTML = wynik;
//    
//};
//function oblicz(){
//    
//    var wplata = parseInt(document.getElementById("wplata").value);
//    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
//    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
//    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
//    var podatek = document.getElementById("podatek").checked;
//    
//    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
//    
//    document.getElementById("wynik").innerHTML = wynik;
//};
//
//function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
//    debugger;
//    var kapital;
//    var oprocentowanieOpodatkowane;
//    if(podatek){
//        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
//        }else{
//            oprocentowanieOpodatkowane = oprocentowanie;
//        }
//    kapital = wplata * Math.pow((1 + (oprocentowanieOpadatkowane/okresKapitalizacji)), iloscLat*okresKapitalizacji);
//    
//    return kapital.toFixed(2);
//};



function oblicz(){
    
    var wplata =parseInt (document.getElementById("wplata").value);
    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
    var okresKapitalizacji =parseInt (document.getElementById("okres-kapitalizacji").value);
    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value)/100;
    var podatek = document.getElementById("podatek").checked;
    
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.getElementById("wynik").innerHTML =wynik;
}


function obliczZysk (wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek){
    var kapital = 0;
    var oprocentowanieOpodatkowane = 0;
//    oprocentowanieOpodatkowane=podatek ? oprocentowanie*0.81: oprocentowanie;
    if(podatek){
        oprocentowanieOpodatkowane = oprocentowanie *0.81;
    }else{
        oprocentowanieOpodatkowane = oprocentowanie;
    }
    kapital = wplata * Math.pow((1 +(oprocentowanieOpodatkowane/okresKapitalizacji)), iloscLat * okresKapitalizacji);
            
        return kapital.toFixed(2);
    
}





