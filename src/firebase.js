import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqZbCE5EDAGHEe8HVxleZOxQKD_iGB6BA",
  authDomain: "didascalias-server.firebaseapp.com",
  projectId: "didascalias-server",
  storageBucket: "didascalias-server.firebasestorage.app",
  messagingSenderId: "696209392647",
  appId: "1:696209392647:web:a676a95aec2f9557ff16a2",
  measurementId: "G-WR8KHWLBQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar os serviços que você vai usar
export const auth = getAuth(app);
export const db = getFirestore(app);