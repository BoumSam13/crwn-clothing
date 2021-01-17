import firebase from 'firebase/app';
import 'firebase/firestore' ;            // Database
import 'firebase/auth';                 // Authorization

const config = {
    apiKey: "AIzaSyApD0DTXG_q4_wUeEhYJAv9L-pNYQa3NxA",
    authDomain: "crwn-clothing-60d6c.firebaseapp.com",
    projectId: "crwn-clothing-60d6c",
    storageBucket: "crwn-clothing-60d6c.appspot.com",
    messagingSenderId: "691302600251",
    appId: "1:691302600251:web:6b086af650de1e28f6d61e",
    measurementId: "G-Z1PG60EYVS"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;