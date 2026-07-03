import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZmSiZYXinZ-f213HlMWce260e3VhexCA",
  authDomain: "phishield-ce68b.firebaseapp.com",
  projectId: "phishield-ce68b",
  storageBucket: "phishield-ce68b.firebasestorage.app",
  messagingSenderId: "410393127985",
  appId: "1:410393127985:web:8ee139b37d93e28429f910",
  measurementId: "G-875D87VVEF"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
