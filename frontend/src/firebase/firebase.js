// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf0zqKcoMo5ymf2-nvFRoub9xC2Ibei0A",
  authDomain: "motobikes-d3c5b.firebaseapp.com",
  projectId: "motobikes-d3c5b",
  storageBucket: "motobikes-d3c5b.appspot.com",
  messagingSenderId: "956493959067",
  appId: "1:956493959067:web:254050f07b68b1800d9b3e",
  measurementId: "G-9RMF4WFGZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
