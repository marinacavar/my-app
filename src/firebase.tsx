// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsngUiQMOcwajBv-dmM_xdd9oYg0bv1Qc",
  authDomain: "my-app-d1806.firebaseapp.com",
  projectId: "my-app-d1806",
  storageBucket: "my-app-d1806.firebasestorage.app",
  messagingSenderId: "1079083867881",
  appId: "1:1079083867881:web:d263697661d01b8f9f9a78",
  measurementId: "G-0DVLJSMSRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
