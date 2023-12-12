$(document).ready(function() {
    $("#headerContainer").load("./header.html");
    $("#footerContainer").load("./footer.html");
    
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    
    let chatWindowVisible = false;
    
    chatIcon.addEventListener('click', function() {
        if (!chatWindowVisible) {
            chatWindow.style.display = 'block';
            chatWindowVisible = true;
        } else {
            chatWindow.style.display = 'none';
            chatWindowVisible = false;
        }
    });
    
    chatClose.addEventListener('click', function() {
        chatWindow.style.display = 'none';
        chatWindowVisible = false;
    });
  
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
    
  });
    function updateCountdown() {
      // 當前ㄉ時間
      const now = new Date().getTime();
    
      // 截止的時間
      const deadline = new Date('2023-12-13T23:00:00').getTime();
  
      // 計算剩餘時間
      const timeLeft = deadline - now;  
      // 剩餘時間轉成時分秒
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
    