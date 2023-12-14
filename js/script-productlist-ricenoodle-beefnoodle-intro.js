$(document).ready(function () {
  let quantity = 1;
  const quantityDisplay = $('.acc ._1');
  const socialIcons = $('.social-icons');

  $('.plus').click(function () {
    quantity++;
    updateQuantityDisplay();
  });

  $('.minus').click(function () {
    if (quantity > 1) {
      quantity--;
      updateQuantityDisplay();
    }
  });

  function updateQuantityDisplay() {
    quantityDisplay.text(quantity);
  }

  $('.btn-zoom-out').click(function () {
    console.log("Button clicked!");
    $('.mask').css('display', 'block');
  });

  $('.close').click(function () {
    $('.mask').hide();
  });

  $('.mask').click(function (e) {
    if (e.target.className === 'mask') {
      $(this).removeAttr('style');
    }
  });

  $('.popup').click(function (e) {
    e.stopPropagation();
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

  $('.share-default').click(function (e) {
    e.preventDefault();
    e.stopPropagation(); 
    socialIcons.toggle();
  });

  $(document).on('click', function (event) {
    if (!$(event.target).closest('.btn-share').length) {
      socialIcons.hide();
    }
  });

  // Load header and footer
  $('.header-frame').load('header.html');
  $("#footer-frame").load("./footer.html");

  // Handle favorite links
  var favoriteLinks = document.querySelectorAll('.favorite-link_big');

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
