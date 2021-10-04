firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      var isEmailVerified = user.emailVerified;
      if (isEmailVerified){
        var email_id = user.email;
        document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
      }
        else {
          document.getElementById("user_div").style.display = "none";
          document.getElementById("login_div").style.display = "block";
          document.getElementById("error").innerHTML = "Email verification pending!";
        }
      
      

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
  // .then((userCredential) => {
  //   // Signed in 
  //   var user = userCredential.user;
  //   // ...
  //   // var user = firebase.auth().currentUser;
  // })
  
  
  .catch(function(error) {
    // Handle Errors here.
    
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error").innerHTML = error.message
    //window.alert("Error : " + errorMessage);

    // ...
  });
}

  function signup(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
    verifyEmail()
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("error").innerHTML = error.message
    // ..
  });

  }

  function forgotPass(){
    var userEmail = document.getElementById("email_field").value;
    firebase.auth().sendPasswordResetEmail(userEmail)
  .then(() => {
    alert("Password reset email sent!")
    // ..
  })
  .catch((error) => {
    document.getElementById("error").innerHTML = error.message
  });
  }

  function verifyEmail(){
    firebase.auth().currentUser.sendEmailVerification()
    .then(() => {
      document.getElementById("error").innerHTML = "Verification email sent. click on verify link and login"
    });

  }
  

function logout(){
  firebase.auth().signOut();
}
