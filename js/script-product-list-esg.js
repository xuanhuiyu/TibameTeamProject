
$(function() {
    $(document).ready(function() {
      $('.header-frame').load('header.html');
      $("#footer-frame").load("./footer.html");
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
  