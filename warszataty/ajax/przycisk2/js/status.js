//function pobierzDane(event){
//    event.preventDefault();
//   $.getJSON(  "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",   function (data) {      
//   $("#paragraf").html("User Id: "+data.userId+"<br> User Name: "+data.userName+"<br> User URL: "+data.userURL);
//   } 
//); 
//};

function pobierzDane(event){
    event.preventDefault();
   $.getJSON(  "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",   function (data) {      
   $('body').append("<p>userId: " + data.userId + "</p>");
    $('body').append("<p>userName: " + data.userName + "</p>");
    $('body').append("<p>userURL: " + data.userURL + "</p>");
   } 
); 
};