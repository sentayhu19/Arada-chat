import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"
import "firebase/compat/auth"
import "firebase/compat/database";
import "firebase/compat/storage";
import { getAuth } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyArR_9gb_yRi44Q_UTOfpZwRJfJ1gN4FGc",
  authDomain: "arada-chat-app.firebaseapp.com",
  projectId: "arada-chat-app",
  storageBucket: "arada-chat-app.appspot.com",
  messagingSenderId: "377056786689",
  appId: "1:377056786689:web:54ff19492c49148c804300",
  measurementId: "G-SVGBXTWWE6"
};

const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);
const auth = getAuth(app);
export {firebase, auth};





