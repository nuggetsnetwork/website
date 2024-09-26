// import firebase from 'firebase';
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD3oQUchm78MjKX0DxHAy3CMIx0dOKhjj4",
//     authDomain: "nuggate-32d22.firebaseapp.com",
//     projectId: "nuggate-32d22",
//     storageBucket: "nuggate-32d22.appspot.com",
//     messagingSenderId: "485933399738",
//     appId: "1:485933399738:web:d84af6bcfe794b0cde4c83"
//   };
//  const fireAuth =  firebase.initializeApp(firebaseConfig)
//  export default fireAuth;
// // const db = firebaseApp.firestore();
// // export const auth = firebaseApp.auth();
// // export default db
// // export const auth = firebaseApp.auth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig =  {
  apiKey: "AIzaSyD3oQUchm78MjKX0DxHAy3CMIx0dOKhjj4",
  authDomain: "nuggate-32d22.firebaseapp.com",
  projectId: "nuggate-32d22",
  storageBucket: "nuggate-32d22.appspot.com",
  messagingSenderId: "485933399738",
  appId: "1:485933399738:web:d84af6bcfe794b0cde4c83"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(firebaseapp);
export const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);