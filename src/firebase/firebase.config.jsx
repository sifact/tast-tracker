// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVRQRUOCDhhJRRe2wc1g75amZN3WLKbyY",
    authDomain: "task-tracker-734d3.firebaseapp.com",
    projectId: "task-tracker-734d3",
    storageBucket: "task-tracker-734d3.appspot.com",
    messagingSenderId: "451643549303",
    appId: "1:451643549303:web:b4cd73b6ced0b33a6f8872",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
