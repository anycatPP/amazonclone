import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiJEB6v7LJM_agRx7Uf7ROhy6f1MoSJPs",
  authDomain: "challenge-ccaf3.firebaseapp.com",
  projectId: "challenge-ccaf3",
  storageBucket: "challenge-ccaf3.appspot.com",
  messagingSenderId: "250287597107",
  appId: "1:250287597107:web:8aad54fe180a5a46932546",
  measurementId: "G-3TR89N0B1M",
};

const db = firebase.firestore();

export { db };
