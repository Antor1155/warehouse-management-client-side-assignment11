// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGfwNbBQJAdAyFKe7GMV9YNVqv5LEJ06g",
  authDomain: "warehouse-734e0.firebaseapp.com",
  projectId: "warehouse-734e0",
  storageBucket: "warehouse-734e0.appspot.com",
  messagingSenderId: "868647163423",
  appId: "1:868647163423:web:2711b09c93470cd669272a",
  measurementId: "G-1KJPNF8KNJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);