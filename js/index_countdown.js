function updateCountdown() {
    // 當前ㄉ時間
    const now = new Date().getTime();
  
    // 截止的時間
    const deadline = new Date("Jan 5, 2024 15:37:25").getTime();

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
