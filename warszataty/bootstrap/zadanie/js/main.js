window.onscroll = function zmianaTlaNawigacji(){
    if(window.pageYOffset == 0){
        $("#nawigacja").css("background-color", "rgba(59, 59, 59, 0.00)");
    }else{
    $("#nawigacja").css("background-color", "rgba(59, 59, 59, 0.69)");
    $("#nawigacja").css("transition-duration", "1s");
    }
}

function przeniesienieDoServices(event){
    event.preventDefault();
//    console.log('dzial');
//    var wysokosc = $('#services').offset().top;
//    window.scrollTo(0,wysokosc);
//    console.log(wysokosc);
    $('html, body').animate(
        {scrollTop: $('#services').offset().top }, 600
   );
   
}

$("a[href^='#']").on('click', function(event){
      event.preventDefault();
    $('html, body').animate(
        {scrollTop: $(this.hash).offset().top }, 600
    )
   })