//function pobierzDane(event){
//    event.preventDefault();
//    
//   $.getJSON(  "https://jsonplaceholder.typicode.com/users",   function (data) {  
//       var tablicaZdanymi = [];
//       tablicaZdanymi = data;
//         tablicaZdanymi.forEach( function(index, element){
//             $("paragraf").HTML = (index);
////             var conName = element.name;
////             $(this).innerHTML = conName;
//            
//   console.log(element, index);
//            
//   } 
//                              
//); 
//});
//}


window.onscroll = function pobierzDane(event){
    event.preventDefault();
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight)
    pobieranie("GET", "https://jsonplaceholder.typicode.com/users", function(jsonObj){
        for(var i=0; i<jsonObj.length; i++){
        var tablica = jsonObj[i];
        var pUserId = document.createElement('p');
        var pUserName = document.createElement('p');
        var pUserUserName = document.createElement('p');
        
        var pUserI = document.createTextNode("User Id: " +tablica.id);
        var pUserN = document.createTextNode("User Name: " +tablica.name);
        var pUserU = document.createTextNode("User URL: " +tablica.username);
        
        
        pUserId.appendChild(pUserI);
        pUserName.appendChild(pUserN);
        pUserUserName.appendChild(pUserU);
        document.body.appendChild(pUserId);
        document.body.appendChild(pUserName);
        document.body.appendChild(pUserU);
        }
    })
    
};

//function pobierzDane(event){
//    event.preventDefault();
//    pobieranie("GET", "https://jsonplaceholder.typicode.com/users", function(jsonObj){
//        console.log(jsonObj[0]);
//        for(var i=0; i<jsonObj.length; i++){
//        var tablica = jsonObj[i];
//        var pUserId = document.createElement('p');
//        var pUserName = document.createElement('p');
//        var pUserUserName = document.createElement('p');
//        
//        var pUserI = document.createTextNode("User Id: " +tablica.id);
//        var pUserN = document.createTextNode("User Name: " +tablica.name);
//        var pUserU = document.createTextNode("User URL: " +tablica.username);
//        
//        
//        pUserId.appendChild(pUserI);
//        pUserName.appendChild(pUserN);
//        pUserUserName.appendChild(pUserU);
//        document.body.appendChild(pUserId);
//        document.body.appendChild(pUserName);
//        document.body.appendChild(pUserU);
//        }
//    })
//    
//}







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