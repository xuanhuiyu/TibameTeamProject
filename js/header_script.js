$(function(){

    $('.menu_list').click(function(){
      $('.menu_mask').css({'display':'block',});
    })
    $('.close').click(function(){
      $('.menu_mask').removeAttr('style');
    })
    $('.menu_mask').click(function(){
      $(this).removeAttr('style');
    })
    $('.menu_popup').click(function(e){
      e.stopPropagation();
    })
  
})