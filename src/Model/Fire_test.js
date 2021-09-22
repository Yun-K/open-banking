// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnu8sS8JjCTcJ8mgpn--eVhuQmJXRJXYY",
    authDomain: "open-banking-76572.firebaseapp.com",
    projectId: "open-banking-76572",
    storageBucket: "open-banking-76572.appspot.com",
    messagingSenderId: "66763043886",
    appId: "1:66763043886:web:5fbbbb442dce0fb6abdbbf",
    measurementId: "G-7X34YFBKH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);