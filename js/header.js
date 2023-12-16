$(function(){
    // 第一層選單
    $('.menu_list').click(function(){
        $('.menu_mask').addClass('open');
        $('.menu_popup').addClass('open');
    });

    $('.close').click(function(){
        $('.menu_mask').removeClass('open');
        $('.menu_popup').removeClass('open');
    });

    $('.menu_mask').click(function(){
        $(this).removeClass('open');
        $('.menu_popup').removeClass('open');
        $('.sel_list').removeClass('open');
    });
    $('.sel_list a').click(function(){
        $('.menu_mask').removeClass('open');
        $('.menu_popup').removeClass('open');
    })

    // $('.menu_popup').click(function(e){
    //     e.stopPropagation();
    // });


    // 第二層選單
    $('.member_mb_list').click(function(){
        $('.sel_list').addClass('open');
        // $('.menu_popup').css('display', 'block');
        // $('.menu_popup').removeClass('open');
    });



    // 返回按鈕
    $('.closemember').click(function(){
        // $('menu_popup').css('display', 'block');
        $('.sel_list').removeClass('open');
        // $('.menu_popup').addClass('open');

        // $('.sel_list').css('display', 'none');
        // console.log('.bk_bt');
        // window.history.back()
    });


    // $('.sel_list_mask').click(function(){
    //     $(this).removeAttr('style');
    // });
    
    // $('.sel_list').click(function(e){
    //     e.stopPropagation();
    // });
});

// 登入

 $(function(){
    $('.login_bt').click(function(){
        $('.mask_login').css('display','block')
        $('.menu_mask').css('display','none')
        $('.menu_popup').css('display','none')
    })
    $('.register_bt').click(function(){
        $('.mask_register').css('display','block')
        $('.menu_mask').css('display','none')
        $('.menu_popup').css('display','none')
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
    window.location.href = './product-index.html'; 
})

var second_ = document.querySelector('.second_bt');
second_.addEventListener('click',function(){
    console.log(second_);
    $('.login_page').css('display','none')
    $('.mask_register').css('display','block')
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



$('.bi').click(function(){
    $('.mask_change').css('display','none')
})

$('.mask_change').click(function(){
    $(this).removeAttr('style')
})

$('.change_page').click(function(e){
    e.stopPropagation()
})

$('.revised_').click(function(){
    $('.change_page').hide()
    $('.notice1').show()
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
            $('.login_page').css('display','block'); 
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
            $('.login_page').css('display','block'); 
        }
    }, 1000);
    
    function updateCountdown() {
        countdownElement.text(seconds);
    }
});

var cancel_1 = document.querySelector('.cancel_1');
cancel_1.addEventListener('click',function(){
    $('.register_page').css('display','none')
    $('.mask_register').css('display','none')
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