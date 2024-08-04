// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB16T9jUEcwF83AmCoBS-XZtnKKFM7bwv4",
  authDomain: "inventory-pro-5e358.firebaseapp.com",
  projectId: "inventory-pro-5e358",
  storageBucket: "inventory-pro-5e358.appspot.com",
  messagingSenderId: "162418152943",
  appId: "1:162418152943:web:a5693e57178b0a3ebf521a",
  measurementId: "G-W2ECZHNLMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };