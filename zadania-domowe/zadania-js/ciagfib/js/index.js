function ciagFibbonacci(n){
    if (n <= 0) {
        return 0;} else if
        (n == 1) {
        return 1;} else
            {
    return ciagFibbonacci(n - 1) + ciagFibbonacci(n - 2);
            }
}

console.log(ciagFibbonacci(10));

// ---------------- GOSI Przyklad -------------------- //

//function fibOblicz(n){
//    if(n <= 1){
//        return n;
//    }else if(n>1){
//        var a = 1;
//        var b = 1;
//        var c = 0;
//        for(var i=0; i<n-2)
//    }
//}


/// ---------------- Adama Przyklad ------------------ //

function fibonacci(n){
    if(n==1){
        return 0;
    }
    if(n==2){
        return 1;
    }
    
    var fibPrev = 0;
    var fibNext =1;
    var fibCurrent = 0;
    
    for(var i=1; i<n; i++){
        fibCurrent = fibPrev + fibNext;
        fibPrev= fibNext;
        fibNext = fibCurrent;
    }
    
    return fibCurrent;
}

console.log(fibonacci(10));