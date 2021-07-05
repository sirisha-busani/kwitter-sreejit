//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("RoomName")
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
//
UserID = localStorage.getItem("User");
LikesCount = 0;
getData();
function Send() {
      Messages = document.getElementById("MessageInput").value;
      firebase.database().ref("/Messages/").child(room_name).push({
            UserName: UserID,
            Message: Messages,
            Likes: LikesCount

      })
}