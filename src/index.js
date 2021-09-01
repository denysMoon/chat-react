import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBnb2hlnyumV1-KoYJsOLd2h9O4p-pgJD4",
  authDomain: "react-chat-1a1ad.firebaseapp.com",
  projectId: "react-chat-1a1ad",
  storageBucket: "react-chat-1a1ad.appspot.com",
  messagingSenderId: "59427711658",
  appId: "1:59427711658:web:2820bd7b4d0e21c756fed3",
  measurementId: "G-HWCVG5L1QZ"
});

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

const nukk = 42


ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      firebase,
      auth,
      firestore,
      nukk
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
