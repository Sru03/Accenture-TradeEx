// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD22i4oft2ddhuuJ_ylNcRbGQShRvpSASg",
  authDomain: "accenture-trade-ez.firebaseapp.com",
  projectId: "accenture-trade-ez",
  storageBucket: "accenture-trade-ez.appspot.com",
  messagingSenderId: "128982444394",
  appId: "1:128982444394:web:d1f2ca90b1046c1d391d13",
  measurementId: "G-ZY86HKGM52"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);