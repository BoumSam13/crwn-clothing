import firebase from 'firebase/app';
import 'firebase/firestore' ;            // Database
import 'firebase/auth';                 // Authorization

const config = {
  apiKey: "AIzaSyBZyQ_ON-7DzQZGu6wOgx-PGdGjF3Cx0rA",
  authDomain: "crwn-clothing-16a29.firebaseapp.com",
  projectId: "crwn-clothing-16a29",
  storageBucket: "crwn-clothing-16a29.appspot.com",
  messagingSenderId: "397521646883",
  appId: "1:397521646883:web:001c95f541438a3fd10896",
  measurementId: "G-GMQG6RDSQX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;