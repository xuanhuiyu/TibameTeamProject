$(document).ready(function() {

    $("#headerContainer").load("./header.html");

 
    $("#footerContainer").load("./footer.html");
});

$('.add_info').click(function(){
    $('.completed_').css('display','block')
})

$('.completed_').click(function(){
    $(this).removeAttr('style')
})

$('.completed_area').click(function(e){
    e.stopPropagation()
})
