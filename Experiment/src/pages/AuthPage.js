import AuthForm, { STATE_LOGIN } from '../components/AuthForm';
import React from 'react';
import { Card, Col, Row, Alert, Button } from 'reactstrap';
import { history } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { login, register, isloggedin, loginWithGoogle } from '../actions/userActions';
import { changePassword } from '../actions/userActions';
//// Testing firebase operations
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseapp, auth, googleProvider, db } from '../authFirebase/firebase';
import {
  collection, addDoc, getDoc, setDoc, doc, updateDoc,
  arrayUnion, arrayRemove, increment, deleteDoc, deleteField
} from "firebase/firestore";

const AuthPage = (props) => {
  const [authState, setAuthState] = useState(props.authState);
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin);
  const userRegister = useSelector((state) => state.userRegister);

  const [errors, setErrors] = useState('');

  useEffect(() => {
    if (userLogin.userInfo) {
      setErrors('');
      props.history.push('/dashboard');
    } else if (userLogin.error) {
      setErrors(userLogin.error.message);
    }
    if (userRegister.loading === false) {
      userRegister.loading = true;
      setAuthState(authState);
      props.history.push('/login');
    }
    if (userRegister.error) {
      setErrors(userRegister.error.message);
    }
    console.log(userRegister)
    // return () => { setErrors(''); userLogin.userInfo = null; userRegister.loading = true; };
  }, [history, userRegister]);

  const handleAuthState = authState => {
    console.log(userRegister);
    setAuthState(authState);
    if (authState === STATE_LOGIN) {
      props.history.push('/login');
    } else {
      props.history.push('/signup');
    }
  };

  const handleLogoClick = () => {
    props.history.push('/');
  };
  const loginWGoogle = async () => {
    dispatch(loginWithGoogle(props));
  }
  const submit = async (isLogin, data) => {
    if (authState === STATE_LOGIN) {
      await dispatch(login(data));
      await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
      console.log(userLogin.userInfo);
      const info = JSON.parse(localStorage.getItem('userInfo'));
      const err = JSON.parse(localStorage.getItem('loginErr'))
      if (info !== null) {
        setErrors('');
        localStorage.removeItem('loginErr');
        props.history.push('/dashboard');
      } else if (err !== null) {
        setErrors(err.message);
      }
      // if (userLogin.userInfo) {
      //   setErrors('');
      //   props.history.push('/dashboard');
      // } else if (userLogin.error) {
      //   setErrors(userLogin.error.message);
      // }
    } else {
      await dispatch(register(data));
    }
  }

  return (
    <Row
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <Col md={6} lg={4}>

        <Card body>
          {errors && <Alert color="danger">
            {errors}
          </Alert>}
          <AuthForm
            authState={authState}
            onChangeAuthState={handleAuthState}
            onLogoClick={handleLogoClick}
            handleSubmit={submit}
          />
          {authState === STATE_LOGIN &&
            <div className="text-center pt-1">
              <h6>or</h6>
              <Button
                size="lg"
                className="bg-gradient-theme-left border-0 pt-1"
                block type="button"
                onClick={loginWGoogle}
              >
                Login with Google
              </Button>
            </div>
          }
        </Card>
      </Col>
    </Row>
  );
}

export default AuthPage;
