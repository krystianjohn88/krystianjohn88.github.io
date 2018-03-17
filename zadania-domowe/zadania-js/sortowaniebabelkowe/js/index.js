var tabela =  [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

function sortowanieBabelkowe(ciag){
    var zmianna;
    var tymczasowaWartosc;
    do{
        zmianna = false;
        for(var i=0; i<ciag.length-1; i++){
            if(ciag[i+1] < ciag[i]){
                tymczasowaWartosc = ciag[i];
                ciag[i] = ciag[i+1];
                ciag[i+1] = tymczasowaWartosc;
                zmianna = true;
            }
        }
    } while (zmianna);
    return ciag;
}

var tabelaPosortowana = sortowanieBabelkowe(tabela);
console.log(tabelaPosortowana);