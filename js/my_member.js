$(document).ready(function() {

    $("#headerContainer").load("./header.html");

    $("#footerContainer").load("./footer.html");
});

$('.bt1').click(function(){
    window.location.href = './login.html'; 
})

$('.bt3').click(function(){
    window.location.href = './intro.html'; 
})

$('.bt2').click(function(){
    window.location.href = './history.html'; 
})

