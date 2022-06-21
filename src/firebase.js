// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8EsemWz3MJ-E-CXk-H-6HAynJQwnc6jc",
  authDomain: "tiktok-1e59d.firebaseapp.com",
  databaseURL: "https://tiktok-1e59d-default-rtdb.firebaseio.com",
  projectId: "tiktok-1e59d",
  storageBucket: "tiktok-1e59d.appspot.com",
  messagingSenderId: "730563293671",
  appId: "1:730563293671:web:46c9b3c13ed73152c74d42",
  measurementId: "G-9H3KMKSHT0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
