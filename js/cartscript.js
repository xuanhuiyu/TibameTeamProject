window.onload = function(){

    // input step

    const all_increaseButton = document.querySelectorAll('.plus')
    const all_decreaseButton = document.querySelectorAll('.minus')


    for (let index = 0; index < all_increaseButton.length; index++) {
        const button = all_increaseButton[index];
        const data_id = button.getAttribute('data-id')
        const quantityInput = document.querySelector(`input[data-id="${data_id}"]`)

        button.addEventListener('click',()=>{
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;

          })
    }


    for (let index = 0; index < all_decreaseButton.length; index++) {
        const button = all_decreaseButton[index];
        const data_id = button.getAttribute('data-id')
        const quantityInput = document.querySelector(`input[data-id="${data_id}"]`)

        button.addEventListener('click',()=>{
            console.log('decreaseButton3');
                let currentQuantity = parseInt(quantityInput.value);
            console.log('decreaseButton3');

                if (currentQuantity > 1) {
                    quantityInput.value = currentQuantity - 1;
                }
          })
    }

    // Delet pop

    $(function(){

        $('#cartDelet').click(function(){
          $('.cartMask').css({'display':'block',});
          $('.cartDelet').addClass('open');

        })
        $('.cartPopclose').click(function(){
          $('.cartMask').removeAttr('style');
          $('.cartDelet').removeClass('open');
          $('.cartSave').removeClass('open');
        })

        $('#Cancel1').click(function(){
            $('.cartMask').removeAttr('style');
            $('.cartDelet').removeClass('open');
            $('.cartSave').removeClass('open');
        })

        $('.cartMask').click(function(){
          $(this).removeAttr('style');
          $('.cartDelet').removeClass('open');
          $('.cartSave').removeClass('open');
        })

        $('#Delet').click(function(){
            $('.cartDelet').removeClass('open');
            $('.DeletPod').css({'display':'none',});
            $('.cartSave').addClass('open');
            $('.DeletAum').text('NT$ 875');
        })

        $('#Cancel2').click(function(){
            $('.cartMask').removeAttr('style');
            $('.cartSave').removeClass('open');
        })

        $('#Save').click(function(){
            // $('.cartDelet').removeClass('open');
            $('.cartSave').css({'display':'none',});
            $('.cartNt').addClass('open');
            $('.cartNt').fadeOut(1500);
            $('.cartMask').removeAttr('style');

        })

        $('.cartDelet').click(function(e){
          e.stopPropagation();
        })

        $('.cartSave').click(function(e){
            e.stopPropagation();
        })

        // 加入票券
        $('.cartCoupon').click(function(){
            $('.cartMask2').css({'display':'block',});
        })
        $('.cartPopclose').click(function(){
            $('.cartMask2').removeAttr('style');
        })
        $('.Savebtn1').click(function(){
            $('.cartMask2').removeAttr('style');
            $('.selCoupons').text('NT$ -88');
            $('.totalamout').text('NT$ 787');

        })
        $('.cartMask2').click(function(){
            $(this).removeAttr('style');
        })
        $('.cartCouponspop').click(function(e){
            e.stopPropagation();
        })

    })

    
}