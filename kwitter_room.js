var firebaseConfig = {
      apiKey: "AIzaSyB9qPg-9eWg3Yg5Yn1gW3QBgaGs9RufRqE",
      authDomain: "kwitter-f6fe4.firebaseapp.com",
      databaseURL: "https://kwitter-f6fe4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6fe4",
      storageBucket: "kwitter-f6fe4.appspot.com",
      messagingSenderId: "11060685880",
      appId: "1:11060685880:web:7eb792f6e275b44e5a0acd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
