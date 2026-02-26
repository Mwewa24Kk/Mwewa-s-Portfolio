import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-firestore.js";

// Replace these values with your Firebase Web App config from Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyB1CIC2WtoaFyp1wWUFmGwQ8KTYXo8ZnX4",
  authDomain: "kdpt-49ce6.firebaseapp.com",
  projectId: "kdpt-49ce6",
  storageBucket: "kdpt-49ce6.firebasestorage.app",
  messagingSenderId: "37324636923",
  appId: "1:37324636923:web:ddbeb12e4dd7a80005a65e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
