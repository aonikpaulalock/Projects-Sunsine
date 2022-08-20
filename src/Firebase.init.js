// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyABAXlF88aCVQBltgPQOz6ScnAykxRxgG4",
  authDomain: "sunsine-projects.firebaseapp.com",
  projectId: "sunsine-projects",
  storageBucket: "sunsine-projects.appspot.com",
  messagingSenderId: "1016982131485",
  appId: "1:1016982131485:web:11f85a44a454ec287687f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;