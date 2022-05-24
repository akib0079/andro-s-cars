import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBoUQ6WcSsD0ejeVMUywlWXfYjBft_iPmc",
    authDomain: "andro-car.firebaseapp.com",
    projectId: "andro-car",
    storageBucket: "andro-car.appspot.com",
    messagingSenderId: "193991478391",
    appId: "1:193991478391:web:47b7f760a7fb41d4734a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;