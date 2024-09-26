// Testing Firebase
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseapp, auth, googleProvider, db } from '../authFirebase/firebase';
import {
  collection, addDoc, getDocs, setDoc, doc, updateDoc,
  arrayUnion, arrayRemove, increment, deleteDoc, deleteField
} from "firebase/firestore";
const checkUser = async (data) => {
  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
const getUser = (data) => {
  const docRef = doc(db, "cities", "SF");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
onclickfirebase = async (event) => {
  console.log('can click');
  ////delete the data from firebase 
  const cityRef = doc(db, 'cities', 'LA');

  // Remove the 'capital' field from the document
  // await updateDoc(cityRef, {
  //     capital: deleteField()
  // });
  // To delete a document, use the delete() method:
  // await deleteDoc(doc(db, "cities", "DC"));

  ///////Update thte document
  // const washingtonRef = doc(db, "cities", "LA");

  // Set the "capital" field of the city 'LA'
  // await updateDoc(washingtonRef, {
  //   capital: true
  // });
  // // Atomically add a new region to the "regions" array field.
  // await updateDoc(washingtonRef, {
  //   // regions: arrayUnion("greater_virginia")
  //   regions: arrayRemove("greater_virginia")
  // });


  // // Atomically increment the population of the city by 50.
  // await updateDoc(washingtonRef, {
  //     population: increment(50)
  // });

  ///////// set docIf the document does not exist, it will be created.
  //  If the document does exist, its contents will be overwritten with the newly provided data
  // setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // });
  ///////// Read the data from firestore database
  //type 1
  //     const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  ///type 2 get multiple doc from collection
  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   // console.log(`${doc.id} => ${doc.data()}`);
  //   console.log((doc.data()))
  // });

  //type 3 get multiple doc from collection with where condition
  // const q = query(collection(db, "cities"), where("capital", "==", true));

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  //////******** login with credentials firebase */

  // let promise = new Promise(function (resolve, reject) {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, 'abhishek.s@gmail.com', 'abhishek123')
  //     .then(async(userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log(user);
  ///// save the data in to database firestore
  //       const docRef = await addDoc(collection(db, "users"), {
  //         email: "abhishek.s@gmail.com",
  //         password: "abhishek123",
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error);
  //       // ..
  //     });

  // });
  // var googleProvider = new fireAuth.auth.GoogleAuthProvider();
  // fireAuth.auth().signInWithPopup(googleProvider).then(res=>{
  //   console.log(res);
  // }).catch(error => {
  //   console.log('error')
  // })
  // eventListener for login
  // const onSocialClick = async (event) => {
  //     Check whether it is google or github name


  //////******** login with google */
  // const {
  //   target: { name },
  // } = event;

  // signInWithPopup(auth, googleProvider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   // const credential = GoogleAuthProvider.credentialFromResult(result);
  //   // const token = credential.accessToken;
  //   // The signed-in user info.
  //   // const user = result.user;
  //   // ...
  //   console.log(result);
  // }).catch((error) => {
  //   // Handle Errors here.
  //   // const errorCode = error.code;
  //   // const errorMessage = error.message;
  //   // The email of the user's account used.
  //   // const email = error.email;
  //   // The AuthCredential type that was used.
  //   // const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   console.log(error);

  // });
  //   }


}


{/* <Button onClick={this.onclickfirebase}>firebase auth click</Button>
          <Button onClick={this.onLogOutClick}>firebase auth click</Button> */}

onclickfirebase = async (event) => {
  console.log('can click');

  ////***delete the data from firebase 
  // const cityRef = doc(db, 'cities', 'LA');

  // Remove the 'capital' field from the document
  // await updateDoc(cityRef, {
  //     capital: deleteField()
  // });
  // To delete a document, use the delete() method:
  // await deleteDoc(doc(db, "cities", "DC"));

  ////**///Update thte document
  // const washingtonRef = doc(db, "cities", "LA");

  //** */ Set the "capital" field of the city 'LA'
  // await updateDoc(washingtonRef, {
  //   capital: true
  // });
  // //*** */ Atomically add a new region to the "regions" array field.
  // await updateDoc(washingtonRef, {
  //   // regions: arrayUnion("greater_virginia")
  //   regions: arrayRemove("greater_virginia")
  // });


  // //** */ Atomically increment the population of the city by 50.
  // await updateDoc(washingtonRef, {
  //     population: increment(50)
  // });

  /////////*** */ set docIf the document does not exist, it will be created.
  //  If the document does exist, its contents will be overwritten with the newly provided data
  // setDoc(doc(db, "cities", "LA"), {
  //   name: "Los Angeles",
  //   state: "CA",
  //   country: "USA"
  // });
  /////////** */ Read the data from firestore database
  //type 1
  //     const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }
  ///type 2 get multiple doc from collection
  // const querySnapshot = await getDocs(collection(db, "users"));
  // querySnapshot.forEach((doc) => {
  //   // console.log(`${doc.id} => ${doc.data()}`);
  //   console.log((doc.data()))
  // });

  //type 3 get multiple doc from collection with where condition
  // const q = query(collection(db, "cities"), where("capital", "==", true));

  // const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  //////******** login with credentials firebase */

  // let promise = new Promise(function (resolve, reject) {
  //   const auth = getAuth();
  //   createUserWithEmailAndPassword(auth, 'abhishek.s@gmail.com', 'abhishek123')
  //     .then(async(userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log(user);
  ///// save the data in to database firestore
  //       const docRef = await addDoc(collection(db, "users"), {
  //         email: "abhishek.s@gmail.com",
  //         password: "abhishek123",
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(error);
  //       // ..
  //     });

  // });


  //////******** login with google */
  // const {
  //   target: { name },
  // } = event;

  // signInWithPopup(auth, googleProvider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // ...
  //   console.log(token);
  // }).catch((error) => {
  //   // Handle Errors here.
  //   // const errorCode = error.code;
  //   // const errorMessage = error.message;
  //   // The email of the user's account used.
  //   // const email = error.email;
  //   // The AuthCredential type that was used.
  //   // const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  //   console.log(error);

  // });
  // }


}
  //   Log out user
//   onLogOutClick = () => {
//     // auth.signOut();
//     signOut(auth)
//       .then(() => {
//         console.log('logged out');
//         // navigate('/');
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// }

export {getUser,checkUser};