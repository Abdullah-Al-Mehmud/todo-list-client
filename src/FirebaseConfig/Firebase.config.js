// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdB3EephpMD2q4KeefGRbFLgM6E_CzzTU",
  authDomain: "todo-list-b9a1f.firebaseapp.com",
  projectId: "todo-list-b9a1f",
  storageBucket: "todo-list-b9a1f.appspot.com",
  messagingSenderId: "426216559735",
  appId: "1:426216559735:web:d95209603772a79c64a272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
