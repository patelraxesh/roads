
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDolc7WJrnZKQzAavK9p-rckIJTcvHJg1Y",
    authDomain: "si-np-gaf-roads-sandbox.firebaseapp.com",
    projectId: "si-np-gaf-roads-sandbox",
    storageBucket: "si-np-gaf-roads-sandbox.appspot.com",
    messagingSenderId: "865761812205",
    appId: "1:865761812205:web:0a67b6011170b6ceb776e4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);