var jsonPracownicy = 
                    {
                        "pracownicy":[
                            {"firstName": "Krystian", "lastName": "Dziopa"}, 
                            {"firstName": "Anna", "lastName": "Szapiel"},
                            {"firstName": "Piotr", "lastName": "Żmuda"}
                        ]
                    }
console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function(element, index ) {
    console.log( index + " Imię: " + element.firstName + "Nazwisko: " + element.lastName);
});