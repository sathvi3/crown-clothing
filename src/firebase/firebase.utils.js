import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLpv1UH-AFpIp4L9yMNW8VegOmmihVsHc",
  authDomain: "crown-clothing-db-5b09e.firebaseapp.com",
  projectId: "crown-clothing-db-5b09e",
  storageBucket: "crown-clothing-db-5b09e.appspot.com",
  messagingSenderId: "310486988004",
  appId: "1:310486988004:web:713259939a565b4a6d68f1",
  measurementId: "G-Y18XQGLLZP",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
