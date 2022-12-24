// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbHUCC-efY5hdS4SYk2JDUmXtyIL0WC4k",
    authDomain: "travel-guru-62-5.firebaseapp.com",
    projectId: "travel-guru-62-5",
    storageBucket: "travel-guru-62-5.appspot.com",
    messagingSenderId: "86513530699",
    appId: "1:86513530699:web:4eb19962cce85cff159ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;