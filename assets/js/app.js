import { auth, db } from './firebase.js';
import { 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { 
    collection,
    addDoc,
    getDocs
} from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

// Authentication Logic
document.getElementById('loginBtn')?.addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error("Login failed:", error.message);
    }
});

// Blog Publishing Logic
document.getElementById('publishBtn')?.addEventListener('click', async () => {
    const content = document.getElementById('blogContent').value;
    
    try {
        await addDoc(collection(db, "blogs"), {
            content: content,
            timestamp: new Date(),
            author: auth.currentUser?.email
        });
    } catch (error) {
        console.error("Publishing failed:", error.message);
    }
});
