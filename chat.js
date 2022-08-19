// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCQlwCfwaDXYm_M74QA8uTM7VFWVcd9y-4",
    authDomain: "lets-chat-37612.firebaseapp.com",
    databaseURL: "https://lets-chat-37612-default-rtdb.firebaseio.com",
    projectId: "lets-chat-37612",
    storageBucket: "lets-chat-37612.appspot.com",
    messagingSenderId: "497151866216",
    appId: "1:497151866216:web:68900a96a0d9236e3b92dd"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



