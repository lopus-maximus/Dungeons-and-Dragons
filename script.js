var firebaseConfig1 = {
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
firebase.initializeApp(firebaseConfig1);
var database1 = firebase.database()


// Character chat
const name = localStorage.getItem('name');
const room_name = localStorage.getItem('room_name');
const firebase_room_name="/room/"+room_name;
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
  
  var chatRef = database1.ref(firebase_room_name);
  
    // Push a new message object with sender and message properties
    chatRef.push({
      sender: sender,
      message: message
    });

}

// Listen for new messages in the database
database1.ref(firebase_room_name).on('child_added', function(snapshot) {
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

function clearEmptyDatabase1() {
  database1.ref("chat").once('value', (snapshot) => {
    if (snapshot.exists()) {
      database1.ref("chat").remove()
        .then(() => {
        })
        .catch((error) => {
          console.error('Failed to clear the database:', error);
        });
    }
  });
}

setInterval(clearEmptyDatabase1, 15*60*1000);


var firebaseConfig2 = {
  apiKey: "AIzaSyCQpHDBgHyN0dm8i_7lovEJVowDz6aCGks",
  authDomain: "dmaster-262d6.firebaseapp.com",
  databaseURL: "https://dmaster-262d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dmaster-262d6",
  storageBucket: "dmaster-262d6.appspot.com",
  messagingSenderId: "121105910298",
  appId: "1:121105910298:web:4de53dfca2502fc2e3dfa3",
  measurementId: "G-N890LXHNN0"
};

const aha = firebase.initializeApp(firebaseConfig2, "dmaster");
var database2 = aha.database()


// Dungeon Master chat
const name2 = localStorage.getItem('name');
const firebase_room_name2="/room/"+room_name;
const dmChatlog = document.getElementById('dm-chatlog');
const dmMessageInput = document.getElementById('dm-message');
const dmSendButton = document.getElementById('dm-send');

dmSendButton.addEventListener('click', () => {
  const message2 = dmMessageInput.value;
  if (message2.trim() !== '') {
    sendMessage2(name2, message2); // Pass the name as the sender
    dmMessageInput.value = '';
  }
});

function sendMessage2(sender2, message2) {
  
  var chatRef2 = database2.ref(firebase_room_name2);
  
    // Push a new message object with sender and message properties
    chatRef2.push({
      sender: sender2,
      message: message2
    });
  };

  database2.ref(firebase_room_name2).on('child_added', function(snapshot) {
    const message2 = snapshot.val();
    const sender2 = message2.sender;
    const text2 = message2.message;
    displayMessage2(sender2, text2);
  });
  
  function displayMessage2(sender, message) {
    const chatlog2 = dmChatlog;
    const newMessage2 = document.createElement('p');
    newMessage2.textContent = `${sender}: ${message}`;
    chatlog2.appendChild(newMessage2);
    chatlog2.scrollTop = chatlog2.scrollHeight;
  }

  function clearEmptyDatabase() {
    database2.ref("chat").once('value', (snapshot) => {
      if (snapshot.exists()) {
        database2.ref("chat").remove()
          .then(() => {
            console.log('Database cleared.');
          })
          .catch((error) => {
            console.error('Failed to clear the database:', error);
          });
      }
    });
  }
  
  setInterval(clearEmptyDatabase, 15*60*1000);