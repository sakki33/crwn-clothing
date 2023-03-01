import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyA49QZysK0nHpjYLntFjZCktm2AMFG7mqM",
  authDomain: "crwn-db-8d643.firebaseapp.com",
  databaseURL: "https://crwn-db.firebaseio.com",
  projectId: "crwn-db-8d643",
  storageBucket: "crwn-db-8d643.appspot.com",
  messagingSenderId: "145270959931",
  appId: "1:145270959931:web:c5417245462143f8a6111e",
  measurementId: "G-03F66LHJRE" 
};
    
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;