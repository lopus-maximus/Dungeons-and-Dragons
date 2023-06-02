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
  
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('name', name);
    const room_name = document.getElementById('roomNameInput').value;
    localStorage.setItem('room_name', room_name);
    if (name.trim() !== '' && room_name.trim() !== '') {
      // Redirect to the chat page or start the chat
      window.location.href = 'index.html';
    }
  });
  
  