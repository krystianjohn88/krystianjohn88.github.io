function pobierzDane(event){
    event.preventDefault();
    pobieranie("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/ akademia108.pl", function(jsonObj){
        
//        var dane1 = jsonObj.userID;
//        document.getElementById('paragraf').innerHTML = jsonObj.userId;
        var paragraf = document.getElementById("paragraf");
            var dane1 = jsonObj.userId;    
            var dane2 = jsonObj.userName;
            var dane3 = jsonObj.userURL;
            var newElementContent = document.createTextNode("user id "+dane1+" user name: "+dane2+"user URL: " +dane3);
        paragraf.appendChild(newElementContent);
//        console.log(jsonObj.userId);
    })
}
function pobieranie(method, url, callback){
  
    var httpRequest = new XMLHttpRequest();
    
    httpRequest.open(method, url);
    
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == 4){
            if(httpRequest.status == 200){
                var returnData = httpRequest.responseText;
                var jsonObj = JSON.parse(returnData);
                callback(jsonObj);
                
                httpRequest = null;
            }
            
            
        }
    }
    
    httpRequest.send();
};