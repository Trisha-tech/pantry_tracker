// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn7pt4dGIa2YRJeTyAleMhePWfh0PMQZ0",
  authDomain: "pantry-tracker-393ba.firebaseapp.com",
  projectId: "pantry-tracker-393ba",
  storageBucket: "pantry-tracker-393ba.appspot.com",
  messagingSenderId: "633651046510",
  appId: "1:633651046510:web:c7a48d8bf63b6f3145de7f",
  measurementId: "G-GFE77ZH3M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore=getFirestore(app);

export {firestore};