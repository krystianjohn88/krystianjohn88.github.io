$(document).ready(function () {
    function pobierzKursBitcoin(url) {
            var buyArrow = $('#buy-arrow');
            var sellArrow = $('#sell-arrow');


        $.getJSON(url, function (data) {
            

            var currentBuyPrice = parseFloat($('#buy').html());
            var currentSellPrice = parseFloat($('#sell').html());
            

            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);
            
            if(currentBuyPrice > parseFloat(data.PLN.buy)){
                buyArrow.css('color', 'red').removeAttr('class').addClass('fas fa-arrow-down');
            } else if(currentBuyPrice < parseFloat(data.PLN.buy)){
                buyArrow.css('color', 'green').removeAttr('class').addClass('fas fa-arrow-up');
            }else{
                buyArrow.css('color', 'black').removeAttr('class').addClass('fas fa-minus-square');
            }
            console.log(data.PLN);

        })
    }
    pobierzKursBitcoin("https://blockchain.info/pl/ticker");
    $('.control-button').on('click', function(){
        pobierzKursBitcoin("https://blockchain.info/pl/ticker");
    });
});
