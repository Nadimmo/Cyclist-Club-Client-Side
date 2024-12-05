// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJMcpGP6Y-0Gl-CdoLOIulbOpHYHL4kHM",
  authDomain: "cylist-club.firebaseapp.com",
  projectId: "cylist-club",
  storageBucket: "cylist-club.firebasestorage.app",
  messagingSenderId: "515683694402",
  appId: "1:515683694402:web:af8ef737972922b4c6badb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app