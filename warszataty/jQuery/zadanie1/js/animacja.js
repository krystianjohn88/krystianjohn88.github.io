$(function(){
    var slideShow = $(".slideshow");
    var slideCount = $(".single-slide").length;
    console.log(slideCount);
    var slideWidthe = 100/slideCount;
    var slideIndex = 0;
    
    // ustawiam szerokosc .slide-show
    slideShow.css({width: slideCount + "00%"});
    
    
    slideShow.find(".single-slide").each( function(int){
        $(this).css({
            width: slideWidthe + "%",
            marginLeft: int * slideWidthe + "%"
        });
    });
    
    
   $('.prev-slide, .next-slide').on("click", function(event){
      event.preventDefault();
      console.log('dziala');
       function slide(slideIndex-1, slideIndex+1){
        
       
       };
       slide(newSlideIdex);
   });
       
    
});
