
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA9yh0gxGIs097nx9hbDM5fz17GTTT7fgY",
    authDomain: "kwitter-cb131.firebaseapp.com",
    databaseURL: "https://kwitter-cb131-default-rtdb.firebaseio.com",
    projectId: "kwitter-cb131",
    storageBucket: "kwitter-cb131.appspot.com",
    messagingSenderId: "740333232312",
    appId: "1:740333232312:web:b4139e8e2a4350c9b0544d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    row = "<div class ='Room_names' id="+Room_names+" onclick = ToRoomName(this.id)>"  + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      //End code
      });});}
 getData();

function getName(){
var getName1 = localStorage.getItem("User");
document.getElementById("welcome").innerHTML = "Welcome : " + getName1;
}

function logout(){
localStorage.removeItem("User");
window.location = "index.html";
}


function addRoom(){
room_name = document.getElementById("addRoomINPUT").value;
firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  })
  localStorage.setItem("RoomName", room_name);
  window.location = "kwitter_page.html"
}

function ToRoomName(AROOMNAME){
    localStorage.setItem("RoomName", AROOMNAME);
    window.location = "kwitter_page.html"
  }