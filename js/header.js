$(function(){
    // 第一層選單
    $('.menu_list').click(function(){
        $('.menu_mask').css('display', 'block');
    });

    $('.close').click(function(){
        $('.menu_mask').removeAttr('style');
    });

    $('.menu_mask').click(function(){
        $(this).removeAttr('style');
    });

    $('.menu_popup').click(function(e){
        e.stopPropagation();
    });


    // 第二層選單
    $('.member_mb_list').click(function(){
        $('.menu_mask').css('display', 'none')
        $('.sel_list_mask').css('display', 'block');
        
    });

    // 返回按鈕
    $('.bk_bt').click(function(){
        $('menu_popup').css('display', 'block')
        $('.sel_list').css('display', 'none');
        console.log('.bk_bt');
        // window.history.back()
    });


    $('.sel_list_mask').click(function(){
        $(this).removeAttr('style');
    });
    
    $('.sel_list').click(function(e){
        e.stopPropagation();
    });
});

// 登入

 $(function(){
    $('.login_bt').click(function(){
        $('.mask_login').css('display','block')
        $('.menu_mask').css('display','none')
    })

        $('.bi.bi-x').click(function(){
            $('.mask_login').css('display','none')
        })
})

$(function(){
    $('.login_bt').click(function(){
        $('.mask_register').css('display','none')
    })
    $('.mask_register').click(function(){
        $('.mask_login').css('display','none')
    })
})


var main_bt = document.querySelector('.main_bt');
main_bt.addEventListener('click',function(){
    window.location.href = 'https://www.google.com.tw/?hl=zh_TW'; 
})

var second_bt = document.querySelector('.second_bt');
second_bt.addEventListener('click',function(){
    window.location.href = './Register.html'; 
})


$('.mask_login').click(function(){
    $(this).removeAttr('style')
})

$('.login_page').click(function(e){
    e.stopPropagation()
})



$('.cancel_').click(function(){
    window.history.back()
})

$('.forgot_p').click(function(){
    $('.login_page').css('display','none')
    $('.mask_forgot').css('display','block')
})

$('.verified_bt').click(function(){
    $('.mask_forgot').css('display','none')
    $('.mask_change').css('display','block')
})

$('.bi.bi-x').click(function(){
    $('.mask_forgot').css('display','none')
})

$('.mask_forgot').click(function(){
    $(this).removeAttr('style')
})

$('.forgot_page').click(function(e){
    e.stopPropagation()
})

$('.revised_').click(function(){
    $('.change_page').hide()
    $('.notice1').show()
})

$('.bi').click(function(){
    $('.mask_change').css('display','none')
})

$('.mask_change').click(function(){
    $(this).removeAttr('style')
})

$('.change_page').click(function(e){
    e.stopPropagation()
})


$('.revised_').click(function() {
    var countdownElement = $(".second5");
    var seconds = 5;
    updateCountdown();
    var countdownInterval = setInterval(function() {
        seconds-=1;
        updateCountdown();
        if (seconds === 0) {
            clearInterval(countdownInterval); 
            $('.notice1').css('display','none');
            $('.mask_change').css('display','none'); 
            $('.mask_login').css('display','block'); 
        }
    }, 1000);
    
    function updateCountdown() {
        countdownElement.text(seconds);
    }
});

$('.register_completed').click(function(){
    $('.register_page').hide()
    $('.notice2').show()
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
            $('.notice2').css('display','none');
            $('.mask_register').css('display','none'); 
            $('.mask_login').css('display','block'); 
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

$(function(){
    $('.register_bt').click(function(){
        $('.mask_register').css('display','block')
        $('.mask_login').css('display','none')
        $('.menu_mask').css('display','none')
    })
        
        $('.bi.bi-x').click(function(){
            $('.mask_register').css('display','none')
        })
        
})

// $('.mask1').click(function(e){
//     e.stopPropagation()
// })