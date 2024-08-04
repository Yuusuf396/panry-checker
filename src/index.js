// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVGzsR9I1aQBG1S3GRJMj53Vld7Ju9JE0",
  authDomain: "pantry-b9932.firebaseapp.com",
  databaseURL: "https://pantry-b9932-default-rtdb.firebaseio.com",
  projectId: "pantry-b9932",
  storageBucket: "pantry-b9932.appspot.com",
  messagingSenderId: "1034504443505",
  appId: "1:1034504443505:web:fd1e093be50036ba2c6dd0",
  measurementId: "G-ME54SM09B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db, collection, addDoc, getDocs ,analytics};
