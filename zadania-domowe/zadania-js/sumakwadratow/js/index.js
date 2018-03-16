var array = [0,1,2,3,4,5,];

function sumaKwadtratowTablicy(arr){
        var kwadrat = 0;
    for(var i=0; i<arr.length; i++){
        kwadrat += Math.pow(i,2); 
    }
    return kwadrat;
}

console.log("Suma kwadratów tablicy: " + sumaKwadtratowTablicy(array));
