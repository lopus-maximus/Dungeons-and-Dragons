// Character chat
const characterChatlog = document.getElementById('character-chatlog');
const characterMessageInput = document.getElementById('character-message');
const characterSendButton = document.getElementById('character-send');

characterSendButton.addEventListener('click', () => {
  const message = characterMessageInput.value;
  if (message.trim() !== '') {
    displayMessage('character', message);
    characterMessageInput.value = '';
  }
});

function displayMessage(sender, message) {
  const chatlog = sender === 'character' ? characterChatlog : dmChatlog;
  const newMessage = document.createElement('p');
  newMessage.textContent = `${sender}: ${message}`;
  chatlog.appendChild(newMessage);
  chatlog.scrollTop = chatlog.scrollHeight;
}

// Dungeon Master chat
const dmChatlog = document.getElementById('dm-chatlog');
const dmMessageInput = document.getElementById('dm-message');
const dmSendButton = document.getElementById('dm-send');

dmSendButton.addEventListener('click', () => {
  const message = dmMessageInput.value;
  if (message.trim() !== '') {
    displayMessage('Dungeon Master', message);
    dmMessageInput.value = '';
  }
});
