
$('.revised_').click(function(){
    $('.change_page').hide()
    $('.mask1').show()
})

// $('.second_bt').click(function(){
//     // $('.forgot_page').css('display','none')
//     window.history.back()
// })


$('.revised_').click(function() {
    var countdownElement = $(".second_5");
    var seconds = 5;
    updateCountdown();
    var countdownInterval = setInterval(function() {
        seconds-=1;
        updateCountdown();
        if (seconds === 0) {
            clearInterval(countdownInterval); 
            window.location.href = './login.html';
        }
    }, 1000);
    
    function updateCountdown() {
        countdownElement.text(seconds);
    }
});



$('.bi').click(function(){
    $('.mask_change').css('display','none')
})

$('.mask_change').click(function(){
    $(this).removeAttr('style')
})

$('.change_page').click(function(e){
    e.stopPropagation()
})

