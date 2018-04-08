window.onscroll = function zmianaTlaNawigacji(){
    if(window.pageYOffset == 0){
        $("#nawigacja").css("background-color", "rgba(59, 59, 59, 0.00)");
    }else{
    $("#nawigacja").css("background-color", "rgba(59, 59, 59, 0.69)");
    }
}