import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0f6Sje487cTcHUoJUfg5RD_L2iHzgMgE",
  authDomain: "mern-byshagun.firebaseapp.com",
  databaseURL: "https://mern-byshagun.firebaseio.com",
  projectId: "mern-byshagun",
  storageBucket: "mern-byshagun.appspot.com",
  messagingSenderId: "61278194732",
  appId: "1:61278194732:web:e155a4430900cbe0f25589",
  measurementId: "G-5F2P8803B9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };