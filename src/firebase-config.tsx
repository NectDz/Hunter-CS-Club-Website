// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCdIOwZ-YazM9MxRUXuK5_JzTljnzhiH4c",
  authDomain: "blog-project-f56a0.firebaseapp.com",
  projectId: "blog-project-f56a0",
  storageBucket: "blog-project-f56a0.appspot.com",
  messagingSenderId: "583680022293",
  appId: "1:583680022293:web:d18b9b8c48f1e928153b1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
