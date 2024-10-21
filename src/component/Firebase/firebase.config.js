// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYwL3kCRhgj2jcuZ5gEOQ-62lOmjB2zgM",
  authDomain: "coffee-house-c9a21.firebaseapp.com",
  projectId: "coffee-house-c9a21",
  storageBucket: "coffee-house-c9a21.appspot.com",
  messagingSenderId: "540659583993",
  appId: "1:540659583993:web:369db4f787bdf2f0238b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;