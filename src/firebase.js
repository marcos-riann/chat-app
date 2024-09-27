// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmV_k6ea9TRFp5VeKQlgUiMNnLMgnAcgc",
  authDomain: "chat-app-fa96b.firebaseapp.com",
  projectId: "chat-app-fa96b",
  storageBucket: "chat-app-fa96b.appspot.com",
  messagingSenderId: "393078276559",
  appId: "1:393078276559:web:07fad1c509183f0c9112ba"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth e firestore
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore };
