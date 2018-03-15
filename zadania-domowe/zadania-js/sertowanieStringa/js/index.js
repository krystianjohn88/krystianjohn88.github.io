function sortString(napis) {
    var splitString = napis.split("");
    var sortArray = splitString.sort();
    var joinArray = sortArray.join("");
    return joinArray;
}
 
var posortowanyNapis = sortString("Akademia108");

console.log(posortowanyNapis);