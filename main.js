function login() {
   var username = document.getElementById("user_name").value;
   localStorage.setItem("user_name", username);
   window.location = "chat_app.html";
}


