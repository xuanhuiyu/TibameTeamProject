
$(function(){

    // 運送方式
    $('.Delivery').click(function(){
        // $(this).parent().siblings().children('ul').animate({maxHeight:0},500);
        $('.cartMask').css({'display':'block',});
    })
    
    $('.cartPopclose').click(function(){
        $('.cartMask').removeAttr('style');
    })

    $('.Addressbtn').click(function(){
        $('.cartMask').removeAttr('style');
        $('.Delivery').next().animate({maxHeight:450},100);
        $('.addDelivery').text('NT$ 200');
        $('.addDelAmout').text('NT$ 987');
    })

    $('.cartMask').click(function(){
        $(this).removeAttr('style');
    })

    $('.cartAddresspop').click(function(e){
        e.stopPropagation();
    })
        

    // 商品明細
    $( ".cartDetail" ).on( "click", function() {
        $('#cartRightlist').slideToggle( "normal" );
      });


    // 付款方式
    $('.cartCredit1').click(function(){
        if($(this).next().hasClass('open')){
            $(this).next().animate({maxHeight:0});
            $(this).next().removeClass('open') 
        }else{
            $(this).next().animate({maxHeight:450},100); 
            $(this).next().addClass('open');
            $(this).next().removeClass('open');
            $('#cartCreditcard2').animate({maxHeight:0});
        }
    })

    $('.cartCredit2').click(function(){
        $('#cartCreditcard1').animate({maxHeight:0});
        $(this).next().animate({maxHeight:450},100); 
    })
    
    $('.cartCredit3').click(function(){
        $('#cartCreditcard1').animate({maxHeight:0});
        $('#cartCreditcard2').animate({maxHeight:0});
    })

    $('.cartCredit4').click(function(){
        $('#cartCreditcard1').animate({maxHeight:0});
        $('#cartCreditcard2').animate({maxHeight:0});
    })

    // 發票類型
    $('.cartInvoice1').click(function(){
        if($(this).next().hasClass('open')){
            $(this).next().animate({maxHeight:0});
            $(this).next().removeClass('open') 
        }else{
            $(this).next().animate({maxHeight:450},100); 
            $(this).next().addClass('open');
            $(this).next().removeClass('open');
            $('#cartInvoice2').animate({maxHeight:0});
        }
    })

    $('.cartInvoice2').click(function(){
        $('#cartInvoice1').animate({maxHeight:0});
        $(this).next().animate({maxHeight:450},100); 
    })
    
    $('#cartInvoice3').click(function(){
        $('.cartInvoice').animate({maxHeight:0});
        // $('.cartInvoice').animate({maxHeight:0});
    })


})







