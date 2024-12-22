// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJAq0iYmAV93Q3efgUbpCSanqZrL0O5B4",
  authDomain: "lootforecast-6473b.firebaseapp.com",
  projectId: "lootforecast-6473b",
  storageBucket: "lootforecast-6473b.firebasestorage.app",
  messagingSenderId: "484172478041",
  appId: "1:484172478041:web:b6d6ef4790c56b6e25a348",
  measurementId: "G-YRRMMZJ0TL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
