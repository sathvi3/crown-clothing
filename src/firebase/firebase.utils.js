import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCYxDhclp_4W2u7jX6NUm8Pd-ZQM8fiK5E",
  authDomain: "crown-clothing-db-3eccb.firebaseapp.com",
  projectId: "crown-clothing-db-3eccb",
  storageBucket: "crown-clothing-db-3eccb.appspot.com",
  messagingSenderId: "797310492416",
  appId: "1:797310492416:web:57efc1d5707404d5651de5",
  measurementId: "G-7Z94L92HPV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
