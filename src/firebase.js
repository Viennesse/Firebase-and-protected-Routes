import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBD3VuctE3i-h5047oN7udVbgSXn1eWyUM",
  authDomain: "test-authentification-961e9.firebaseapp.com",
  projectId: "test-authentification-961e9",
  storageBucket: "test-authentification-961e9.appspot.com",
  messagingSenderId: "1083806825841",
  appId: "1:1083806825841:web:82ce095f55bb2bda310ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

