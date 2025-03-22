import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBG5VfGWmCX-BgO9RHDtaq9EyWJO9uIHhI",
    authDomain: "sharks-7a95a.firebaseapp.com",
    projectId: "sharks-7a95a",
    storageBucket: "sharks-7a95a.firebasestorage.app",
    messagingSenderId: "904160066038",
    appId: "1:904160066038:web:964a312c219b975f1f6fd7",
    measurementId: "G-6797YHQ6RT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
