import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYYFRqz0v_Tv_036ubZh0Uc3QEdG510dc",
    authDomain: "clone-a09cb.firebaseapp.com",
    projectId: "clone-a09cb",
    storageBucket: "clone-a09cb.appspot.com",
    messagingSenderId: "580652336457",
    appId: "1:580652336457:web:b4b764b33eb6a1eae10698",
    measurementId: "G-M7CX43LCVE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };