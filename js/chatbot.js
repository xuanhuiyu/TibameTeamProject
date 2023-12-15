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
