import { initializeApp } from "firebase/app";
import { getFunctions } from "firebase/functions";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyBR_dzxR9WG-qZb-QdLOkWrisR01kh-rX0",
  authDomain: "process-clerk-2ee8e.firebaseapp.com",
  projectId: "process-clerk-2ee8e",
  storageBucket: "process-clerk-2ee8e.appspot.com",
  messagingSenderId: "1037083054097",
  appId: "1:1037083054097:web:dbfc72904b9a30e356a1b0",
  measurementId: "G-554BNZV8XW",
  databaseURL: "https://process-clerk-2ee8e-default-rtdb.firebaseio.com/",
};

// Initialize Firebase app
export const firebaseapp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set persistence
export const auth = getAuth(firebaseapp);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Session persistence set to 'local'.");
  })
  .catch((error) => {
    console.error("Failed to set persistence:", error);
  });

// Initialize Firebase Cloud Functions
export const functions = getFunctions(firebaseapp);
