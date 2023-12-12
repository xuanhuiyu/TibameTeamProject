$(document).ready(function() {

    $("#headerContainer").load("./header.html");

    $("#footerContainer").load("./footer.html");
});

$('.add_address').click(function() {
    $('.completed_').css('display', 'block');
    var countdownElement = $(".countdown");
    var seconds = 3;
    updateCountdown();
    var countdownInterval = setInterval(function() {
        seconds -= 1;
        updateCountdown();
        if (seconds === 0) {
            clearInterval(countdownInterval);
            window.location.href = './my_address1.html';
        }
    }, 1000);

    function updateCountdown() {
        countdownElement.text(seconds);
    }
});



