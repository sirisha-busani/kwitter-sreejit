var firebaseConfig = {
  apiKey: "AIzaSyCUfK3StGMiEseWj5BIqs_m5s3A26yJzVM",
  authDomain: "kwitter-f25ce.firebaseapp.com",
  databaseURL: "https://kwitter-f25ce-default-rtdb.firebaseio.com",
  projectId: "kwitter-f25ce",
  storageBucket: "kwitter-f25ce.appspot.com",
  messagingSenderId: "53672605686",
  appId: "1:53672605686:web:6b42b1d617b26d457cf9d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login(){
var User_username = document.getElementById("usernameloginINPUT").value;
var User_passcode = document.getElementById("")
}

function signup(){
/*var UserName = document.getElementById("sign_upINPUT").value;
localStorage.setItem("User", UserName);*/

 user_name  = document.getElementById("sign_upINPUT").value;
  Passcode1 = document.getElementById("passcodeINPUT").value;
  console.log(user_name + Passcode1)
  localStorage.setItem("User", user_name);

  firebase.database().ref("/").child(user_name).update({
    purpose : "test"
    })



window.alert("You have successfully signed up to Kwitter you will be redirected to the Social page");
window.location = "kwitter_room.html";
}

function change(){
window.location = "login.html";
}