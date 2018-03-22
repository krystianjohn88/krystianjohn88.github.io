
$(document).ready(function(){
    $('#count-sum').on("click", function(){
        var suma = 0;
        $('.salary').each( function(){
            suma += parseInt($(this).text());
        });
        $('#sum').html(suma);
    });
});