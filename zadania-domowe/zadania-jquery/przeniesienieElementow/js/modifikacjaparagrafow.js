$(function() {
  
 $('#up').click( function(){
    $("p:first").before($("p:last"));
  });
  
  
  $("#down").click( function(){
    $("p:last").after($("p:first"));
  });
  
});