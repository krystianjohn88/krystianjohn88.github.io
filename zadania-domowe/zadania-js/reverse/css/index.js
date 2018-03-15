
function reverseString(napis) {
    var splitString = napis.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
 
var odwroconyNapis = reverseString("Akademia108");

console.log(odwroconyNapis)