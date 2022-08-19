// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6fSoSN5Hi3o4r6cQxDnBJEbC6OU1SbkI",
  authDomain: "weather-rafli.firebaseapp.com",
  projectId: "weather-rafli",
  storageBucket: "weather-rafli.appspot.com",
  messagingSenderId: "572348579716",
  appId: "1:572348579716:web:d6c4f46b6f9f22fb1f27d1",
  measurementId: "G-GCP2C0Y7VL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
