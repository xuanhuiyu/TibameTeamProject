
// $('button').click(function(){
//     $('.mask_register').css('display','block')
// })

$('.register_completed').click(function(){
    $('.register_page').hide()
    $('.mask1').show()
})


$('.register_completed').click(function() {
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

var second_bt = document.querySelector('.cancel_');
second_bt.addEventListener('click',function(){
    window.history.back(); 
})


$('.bi').click(function(){
    $('.mask_register').css('display','none')
})

 $('.mask_register').click(function(){
    $(this).removeAttr('style')
})

$('.register_page').click(function(e){
    e.stopPropagation()
})