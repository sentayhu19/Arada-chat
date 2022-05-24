// Import the functions you need from the SDKs you need
import "firebase/storage";
import "firebase/database";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: APIKEY_FIREBASE,
  authDomain: "arada-chat-app.firebaseapp.com",
  projectId: "arada-chat-app",
  storageBucket: "arada-chat-app.appspot.com",
  messagingSenderId: "377056786689",
  appId: "1:377056786689:web:54ff19492c49148c804300",
  measurementId: "G-SVGBXTWWE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseapp;





