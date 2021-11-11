import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
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
  var email = document.getElementById("email_field").value;
  var password = document.getElementById("password_field").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      window.alert("Success : " + user);
      // ...
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("error").innerHTML = error.message

  });
}