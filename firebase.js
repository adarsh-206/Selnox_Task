// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlUybs4zd5LTygtlbwEX7aJSVlwlUMnuU",
    authDomain: "selnox-559c5.firebaseapp.com",
    projectId: "selnox-559c5",
    storageBucket: "selnox-559c5.appspot.com",
    messagingSenderId: "626250047861",
    appId: "1:626250047861:web:ea72271a170b495a5ff33c",
    measurementId: "G-5WMD1F4S44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);