$(function() {
    $(document).ready(function() {
      $('.header-frame').load('header.html');
      $("#footerContainer").load("./footer.html");
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
  
  
      // ad-carousel.js
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
    
    document.addEventListener('DOMContentLoaded', function () {
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
      
    });
    
  
  
    
  