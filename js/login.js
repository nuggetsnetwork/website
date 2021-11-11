import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup,FacebookAuthProvider,GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ErckrTXfy_QmdoUasw28H4ib38qhh_o",
  authDomain: "nuggetsnetwork-2021.firebaseapp.com",
  databaseURL: "https://nuggetsnetwork-2021-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nuggetsnetwork-2021",
  storageBucket: "nuggetsnetwork-2021.appspot.com",
  messagingSenderId: "782216336589",
  appId: "1:782216336589:web:fd24eb6e6b831032014584",
  measurementId: "G-N53KN5RYZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.email;
    document.getElementById('loginbtn').style.display='none'
    document.getElementById('subsbtn').style.display='none'
    document.getElementById('welcome').style.color = "white";
    document.getElementById('welcome').innerHTML = "Welcome: "+user.email
    document.getElementById('welcome').style.display='block'
    document.getElementById('logoutbtn').style.display='block'
    console.log("User Logged In.")
    console.log(uid)
    // ...
  } else {
    // User is signed out
    // ...
    console.log("No User Logged In.")
  }
});

window.login = function login(){
    var email = document.getElementById("luser").value;
    var password = document.getElementById("password").value;
    console.log(email)
    const auth = getAuth();
    document.getElementById('id01').style.display='block'
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        document.getElementById('id01').style.display='none'
        document.getElementById('loginbtn').style.display='none'
        document.getElementById('subsbtn').style.display='none'
        document.getElementById('welcome').style.color = "white";
        document.getElementById('welcome').innerHTML = "Welcome: "+user.email
        document.getElementById('welcome').style.display='block'
        console.log(user)  
        // window.alert("Success : " + user);
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // document.getElementById('id01').style.display='block'
        document.getElementById("error").innerHTML = error.message
        document.getElementById('error').style.color = "red";
        console.log(error.message)
        
    });
}

window.signup = function signup(){
    var userEmail = document.getElementById("email").value;
    var userPass = document.getElementById("reg-password").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        document.getElementById("reg-error").innerHTML = "Account SignUp Successful"
        document.getElementById('reg-error').style.color = "green";
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        document.getElementById("reg-error").innerHTML = error.message
        document.getElementById('reg-error').style.color = "red";
        // ..
    });
}

window.logout = function logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    document.getElementById('loginbtn').style.display='block'
    document.getElementById('subsbtn').style.display='block'
    document.getElementById('welcome').style.display='none'
    document.getElementById('logoutbtn').style.display='none'


    })
    .catch((error) => {
    // An error happened.
    });
}

const fbprovider = new FacebookAuthProvider();
const gprovider = new GoogleAuthProvider();

window.FbLogin = function FbLogin(){
  const auth = getAuth();
  signInWithPopup(auth, fbprovider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
}

window.GoogleLogin = function GoogleLogin(){
  const auth = getAuth();
  signInWithPopup(auth, gprovider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}