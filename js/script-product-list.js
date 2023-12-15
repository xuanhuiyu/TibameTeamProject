$(function() {
  // 
  $('.header-frame').load('header.html');
  $("#footer-frame").load("./footer.html");

  //
  var favoriteLinks = document.querySelectorAll('.favorite-link');
  var shareButtons = document.querySelectorAll('.share-default');

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

  // 
  let adIndex = 0;
  function showAds() {
    const adContainer = document.querySelector('.ad-pic');
    const ads = document.querySelectorAll('.ad-pic img');

    ads[adIndex].style.opacity = 0;

    adIndex++;

    if (adIndex >= ads.length) {
      adIndex = 0;
    }

    ads[adIndex].style.opacity = 1;

    setTimeout(showAds, 2000);
  }

  showAds();

  const closeBtn = document.querySelector('.close');
  const adContainer = document.querySelector('.ad');

  closeBtn.addEventListener('click', function () {
    adContainer.style.display = 'none';
  });


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


  $('.share-default').click(function() {
    socialIcons.toggle();
  });

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

  // 
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
  const myElement = document.querySelector('#myElement');
  if (myElement) {
      myElement.addEventListener('click', function() {

      });
  }
  // 

  
  
});
