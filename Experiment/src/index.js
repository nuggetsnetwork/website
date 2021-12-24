import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {firebaseapp, auth} from './authFirebase/firebase'

// confirm access to the Firebase database
// console.log(firebaseapp);
// console.log(auth);

import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App /></Provider>
  </React.Fragment>,
  document.getElementById('root')
);