// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeHTujU_-yTjOFGui_17DgroURSCu8oj0",
  authDomain: "netflix-gpt-b09b4.firebaseapp.com",
  projectId: "netflix-gpt-b09b4",
  storageBucket: "netflix-gpt-b09b4.firebasestorage.app",
  messagingSenderId: "498631723535",
  appId: "1:498631723535:web:161f81fb340584618af17a",
  measurementId: "G-N1GFCSMP4J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
