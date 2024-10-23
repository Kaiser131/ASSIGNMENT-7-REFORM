// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCx7pR8hDqEhWxYEtp8OifzgcWc4LyOAtg",
    authDomain: "assignment-7-reform.firebaseapp.com",
    projectId: "assignment-7-reform",
    storageBucket: "assignment-7-reform.appspot.com",
    messagingSenderId: "75279071638",
    appId: "1:75279071638:web:54122ad30b234959e205b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default const auth = getAuth(app);