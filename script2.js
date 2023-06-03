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
  var database1 = firebase.database()

  function generateRoomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let roomId = '';
    
    while (roomId.length < 10) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      
      roomId += randomCharacter;
    }
    
    return roomId;
  }
  const room_code = generateRoomId();
  console.log(room_code)
  document.getElementById('room_code').innerHTML = `${room_code}`;
  const firebase_room_code="/codes";

  function sendCode(room_code) {
    console.log("bla")  
    var chatRef = database1.ref(firebase_room_code);
    
      // Push a new message object with sender and message properties
      chatRef.push({
        room_code
      });
  }
  sendCode(room_code);
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('name', name);
    if (name.trim() !== '' ) {
      // Redirect to the chat page or start the chat
      window.location.href = 'index.html';
    }
  });
  
  
  
