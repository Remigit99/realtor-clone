

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJID,
    storageBucket: import.meta.env.VITE_FIREBASE_STOREBUCKECT,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MSGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()