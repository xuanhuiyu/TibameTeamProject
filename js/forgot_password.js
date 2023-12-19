
var verified_bt = document.querySelector('.verified_bt');
verified_bt.addEventListener('click',function(){
    window.location.href = './change_password.html'; // 在这里指定您想要跳转的 URL
})

$('.cancel_').click(function(){
    // $('.forgot_page').css('display','none')
    window.history.back()
})

// 秒數倒數
// $('.main_bt').click(function() {
//     var countdownElement = $(".second_5");
//     var seconds = 5;
//     updateCountdown();
//     var countdownInterval = setInterval(function() {
//         seconds-=1;
//         updateCountdown();
//         if (seconds === 0) {
//             clearInterval(countdownInterval); 
//             window.location.href = './login.html';
//         }
//     }, 1000);
    
//     function updateCountdown() {
//         countdownElement.text(seconds);
//     }
// });


 // 按下按鈕可以打開小視窗

// 按下x可以關閉小視窗
$('.bi').click(function(){
    $('.mask_forgot').css('display','none')
})
 // 按下外面空白處可以關閉小視窗
$('.mask_forgot').click(function(){
    $(this).removeAttr('style')
})

$('.forgot_page').click(function(e){
    e.stopPropagation()
})

