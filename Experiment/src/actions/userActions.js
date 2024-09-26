import React from 'react'
// Testing Firebase
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseapp, auth, googleProvider, db } from '../authFirebase/firebase';
import {
    collection, addDoc, getDoc, setDoc, doc, updateDoc,
    arrayUnion, arrayRemove, increment, deleteDoc, deleteField
} from "firebase/firestore";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/userConstants';
import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';

import { history } from '../store'
export const login = ({ email, password }) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    console.log(email);
    const docRef = doc(db, "users", email);
    try {
        const docSnap = await getDoc(docRef);
        const data = docSnap.data();
        if (docSnap.exists()) {
            if (password === data['password']) {
                console.log("Document data:", docSnap.data());
                await dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
                localStorage.setItem('userInfo', JSON.stringify(data));
            } else {
                console.log("password is not matching");
                localStorage.setItem('loginErr', JSON.stringify({ message: 'Data exist. please input correct password.' }));

                await dispatch({ type: USER_LOGIN_FAIL, payload: { message: 'Data exist. please input correct password.' } });
            }
        } else {
            localStorage.setItem('loginErr', JSON.stringify({ message: 'User does not exist. Please register & login again.' }));
            console.log("No such document!");
            await dispatch({ type: USER_LOGIN_FAIL, payload: { message: 'User does not exist. Please register & login again.' } });
        }
    } catch (error) {
        localStorage.setItem('loginErr', JSON.stringify({ message: 'Network issue. Please try again later.' }));
        await dispatch({ type: USER_LOGIN_FAIL, payload: { message: 'Network issue. Please try again later.' } });
    }
}
export const loginWithGoogle = (props) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    //////******** login with google */
    signInWithPopup(auth, googleProvider)
        .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = await GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user.email);
            const data = {
                email: user['email'],
                password: user.uid,
                uid: user.uid,
                accessToken: user.accessToken,
                displayName: user.displayName,
                isLoggedInWithGoogle: 'Yes'
            }
            console.log(data);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
            await setDoc(doc(db, "googleUsers", user['email']), data);
            localStorage.setItem('userInfo', JSON.stringify(data));
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            dispatch({ type: USER_LOGIN_FAIL, payload: { message: 'AuthCredential type Error. Please try again later.' } });
        });
}
export const logout = () => async (dispatch) => {
    signOut(auth).then(resp => {
        localStorage.removeItem('userInfo');
        dispatch({ type: USER_LOGOUT });
    }).catch(error => {
        console.log('error');
    })

}
export const register = ({ email, password }) => async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user);
            /// save the data in to database firestore
            await setDoc(doc(db, "users", email), {
                email: email,
                password: password,
                uid: user.uid,
                accessToken: user.accessToken,
                displayName: user.displayName,
                isLoggedInWithGoogle: 'No'
            });
            await dispatch({ type: USER_REGISTER_SUCCESS, payload: { uid: user.uid, accessToken: user.accessToken, email: user.email, displayName: user.displayName } });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            dispatch({ type: USER_REGISTER_FAIL, payload: { message: 'Please signup with another account. User may exist already.' } });
        });
}
/////// Reset password change password forgot password
export const isUserExists = async (email) => {
    const docRef = doc(db, "users", email);
    return await getDoc(docRef);
}
export const resetPassword = async ({ email, password }, data) => {
    data['password'] = password;
    return await setDoc(doc(db, "users", email), data);
}

