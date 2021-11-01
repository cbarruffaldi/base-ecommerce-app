// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMHzp8If4VGY4PJ5O6mOqhPsbxcO9kbP4",
  authDomain: "ecommerce-shop-b7a97.firebaseapp.com",
  projectId: "ecommerce-shop-b7a97",
  storageBucket: "ecommerce-shop-b7a97.appspot.com",
  messagingSenderId: "387053603485",
  appId: "1:387053603485:web:1f5711f0df18a0aaeea274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;