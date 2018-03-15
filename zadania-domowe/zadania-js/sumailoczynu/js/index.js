var array = [1,2,3,4,5,6];

function sumaTablicy(arr){
    var suma = 0;
    for(var i=0; i<array.length; i++){
    suma += array[i];       
    }
console.log("suma: " + suma);
}

function iloczynTablicy(arr){
    var iloczyn = 1;
    for(var i=0; i<array.length; i++){
    iloczyn *= array[i];
    }
 console.log("iloczyn: " + iloczyn);
}

sumaTablicy(array);
iloczynTablicy(array);



