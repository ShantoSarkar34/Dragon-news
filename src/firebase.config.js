// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIcLsm7vyTBjgrQ-ZUJEaZuTLDUivoC2E",
  authDomain: "simple-auth-check.firebaseapp.com",
  projectId: "simple-auth-check",
  storageBucket: "simple-auth-check.firebasestorage.app",
  messagingSenderId: "103749212748",
  appId: "1:103749212748:web:86dd8c21680aaa5b9972e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);