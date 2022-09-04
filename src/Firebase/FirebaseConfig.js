// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDDJoK-ZVwiUFKjGf8FamyxTP7Kicj_VQ",
  authDomain: "instagramwebapp-4205b.firebaseapp.com",
  projectId: "instagramwebapp-4205b",
  storageBucket: "instagramwebapp-4205b.appspot.com",
  messagingSenderId: "763878184008",
  appId: "1:763878184008:web:3944e9eddfd67964d0747d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);