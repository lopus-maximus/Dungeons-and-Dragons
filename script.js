var firebaseConfig = {
  apiKey: "AIzaSyA9Vck7cFV_ikY9Y4JdeXI8UeeMDlRu9O4",
  authDomain: "chat-bd92c.firebaseapp.com",
  databaseURL: "https://chat-bd92c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-bd92c",
  storageBucket: "chat-bd92c.appspot.com",
  messagingSenderId: "643550416535",
  appId: "1:643550416535:web:4e63a38947a9bd58f563d2",
  measurementId: "G-4STWW43WQY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()


// Character chat
const name = localStorage.getItem('name');

const characterChatlog = document.getElementById('character-chatlog');
const characterMessageInput = document.getElementById('character-message');
const characterSendButton = document.getElementById('character-send');

characterSendButton.addEventListener('click', () => {
  const message = characterMessageInput.value;
  if (message.trim() !== '') {
    sendMessage(name, message); // Pass the name as the sender
    characterMessageInput.value = '';
  }
});

function sendMessage(sender, message) {
  // Create a new message element
  // const messageElement = document.createElement('div');
  // messageElement.textContent = `${sender}: ${message}`;

  // // Append the message element to the chat log
  // characterChatlog.appendChild(messageElement);
  var chatRef = database.ref("chat");
  
    // Push a new message object with sender and message properties
    chatRef.push({
      sender: sender,
      message: message
    });

}

// Listen for new messages in the database
database.ref('chat').on('child_added', function(snapshot) {
  const message = snapshot.val();
  const sender = message.sender;
  const text = message.message;
  displayMessage(sender, text);
});

function displayMessage(sender, message) {
  const chatlog = characterChatlog;
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
