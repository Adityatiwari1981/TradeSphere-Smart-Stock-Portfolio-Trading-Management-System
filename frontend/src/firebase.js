import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXyOhyO8JlKymXQzt-u4J8Q0aaruMdTBA",
  authDomain: "tradesphere-33459.firebaseapp.com",
  projectId: "tradesphere-33459",
  storageBucket: "tradesphere-33459.firebasestorage.app",
  messagingSenderId: "936809281888",
  appId: "1:936809281888:web:8805e6346bebe2a68c0605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ IMPORTANT
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();