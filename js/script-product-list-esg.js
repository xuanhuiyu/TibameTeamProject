
$(function() {
    $(document).ready(function() {
      $('.header-frame').load('header.html');
      $("#footerContainer").load("./footer.html");
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const chatIcon = document.getElementById('chat-icon');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
  
    chatIcon.addEventListener('click', function() {
      chatWindow.style.display = 'block';
    });
  
    chatClose.addEventListener('click', function() {
      chatWindow.style.display = 'none';
    });
  });
  