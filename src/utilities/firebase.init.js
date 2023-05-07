import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId
// };
const firebaseConfig = {
  apiKey: "AIzaSyALIW90pMt1NmPllTMB_7x5vFxO50m2Ouw",
  authDomain: "finalwarehouse-4650b.firebaseapp.com",
  projectId: "finalwarehouse-4650b",
  storageBucket: "finalwarehouse-4650b.appspot.com",
  messagingSenderId: "874245518757",
  appId: "1:874245518757:web:0140b37f424642b0b4e44c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;