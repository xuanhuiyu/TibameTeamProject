

var main_bt = document.querySelector('.main_bt');
main_bt.addEventListener('click',function(){
    window.location.href = 'https://www.google.com.tw/?hl=zh_TW'; 
})

var second_bt = document.querySelector('.second_bt');
second_bt.addEventListener('click',function(){
    window.location.href = './Register.html'; 
})


$('document').ready(function(){
    $('.mask_login').css('display','block')
})

$('.bi').click(function(){
    $('.mask_login').css('display','none')
})

$('.mask_login').click(function(){
    $(this).removeAttr('style')
})

$('.login_page').click(function(e){
    e.stopPropagation()
})


$('.forgot_p').click(function(){
    $('.login_page').hide()
    
})

$('.forgot_p').click(function(){
    window.location.href = './forgot_password.html'; 
})