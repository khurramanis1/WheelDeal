// Firebase Imports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2hh7DHP_ea0Ml_DN1w9PLuuPSoLVwytQ",
  authDomain: "wheeldeal-7e7f4.firebaseapp.com",
  projectId: "wheeldeal-7e7f4",
  storageBucket: "wheeldeal-7e7f4.firebasestorage.app",
  messagingSenderId: "822111738380",
  appId: "1:822111738380:web:6896a196987fb7e9406c29",
  measurementId: "G-XXL9ZHVPNT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);