import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2gdF6EHZPXAHbi-hcDzx2q8WyR9wfIhA",
    authDomain: "emailer-5bb23.firebaseapp.com",
    projectId: "emailer-5bb23",
    storageBucket: "emailer-5bb23.appspot.com",
    messagingSenderId: "652073221308",
    appId: "1:652073221308:web:1bf411404d78ca75d2e4b9",
    measurementId: "G-0WNR1CBVQJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export {auth, provider , facebookProvider};

export default db;