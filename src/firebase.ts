import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const currentHost = typeof window !== "undefined" ? window.location.hostname : "localhost";
const authDomain =
  import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
  (currentHost === "localhost" ? "localhost" : "phishield-ce68b.firebaseapp.com");

const firebaseConfig = {
  apiKey: "AIzaSyBZmSiZYXinZ-f213HlMWce260e3VhexCA",
  authDomain,
  projectId: "phishield-ce68b",
  storageBucket: "phishield-ce68b.firebasestorage.app",
  messagingSenderId: "410393127985",
  appId: "1:410393127985:web:8ee139b37d93e28429f910",
  measurementId: "G-875D87VVEF",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
