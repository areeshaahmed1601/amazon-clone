import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAkdCyE9sJOSTdxxGu0OVXnKVb4ng6cBXI",
    authDomain: "clone-13cf6.firebaseapp.com",
    projectId: "clone-13cf6",
    storageBucket: "clone-13cf6.appspot.com",
    messagingSenderId: "771183814404",
    appId: "1:771183814404:web:d45332ac87c6d1f33c1251",
    measurementId: "G-RDGM3XSS5H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
 