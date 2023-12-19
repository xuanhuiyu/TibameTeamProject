$(document).ready(function () {

    $('.header-frame').load('header.html');
    $("#footer-frame").load("./footer.html");


    var favoriteLinks = document.querySelectorAll('.favorite-link');

    favoriteLinks.forEach(function (favoriteLink) {
        var heartIcon = favoriteLink.querySelector('i');

        favoriteLink.addEventListener('click', function (event) {
            event.preventDefault();

            favoriteLink.classList.toggle('active');

            if (favoriteLink.classList.contains('active')) {
                heartIcon.className = 'fas fa-heart';
            } else {
                heartIcon.className = 'far fa-heart';
            }
        });
    });


    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');

    let chatWindowVisible = false;

    chatIcon.addEventListener('click', function () {
        if (!chatWindowVisible) {
            chatWindow.style.display = 'block';
            chatWindowVisible = true;
        } else {
            chatWindow.style.display = 'none';
            chatWindowVisible = false;
        }
    });

    chatClose.addEventListener('click', function () {
        chatWindow.style.display = 'none';
        chatWindowVisible = false;
    });

    function updateCountdown() {
        const now = new Date().getTime();
        const deadline = new Date('2023-12-23T23:00:00').getTime();
        const timeLeft = deadline - now;

        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('hour1').innerText = Math.floor(hours / 10);
        document.getElementById('hour2').innerText = hours % 10;
        document.getElementById('minute1').innerText = Math.floor(minutes / 10);
        document.getElementById('minute2').innerText = minutes % 10;
        document.getElementById('second1').innerText = Math.floor(seconds / 10);
        document.getElementById('second2').innerText = seconds % 10;
    }

    updateCountdown();

    setInterval(updateCountdown, 1000);
    // 
    $(document).ready(function () {
        var container = document.getElementById('notification-container-fav');
        var clickCount = 0;
    
        $('.favorite-link').click(function () {
            clickCount++;
            if (clickCount % 2 === 1) {
                createNotification(container, '【即饗】已加入收藏清單');
            }
        });
    });
    
    function createNotification(container, message) {
        var notificationContainer = document.createElement('div');
        notificationContainer.className = 'notification-container';
    
        var notification = document.createElement('div');
        notification.className = 'notification-custom';
    
        var icon = document.createElement('div');
        icon.className = 'check-icon';
        icon.innerHTML = '<span class="material-symbols-outlined">done</span>';

        var text = document.createElement('div');
        text.innerHTML = message;
    
        notification.appendChild(icon);
        notification.appendChild(text);

        notificationContainer.appendChild(notification);

        container.appendChild(notificationContainer);

        setTimeout(function () {
            notificationContainer.style.opacity = '0';
            setTimeout(function () {
                container.removeChild(notificationContainer);
            }, 200); 
        }, 2000); 
    }
});
