// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDU0pLRuRknY940BkydkX1mNSleDZJI5vY",
  authDomain: "realestate-839d3.firebaseapp.com",
  projectId: "realestate-839d3",
  storageBucket: "realestate-839d3.appspot.com",
  messagingSenderId: "785293481085",
  appId: "1:785293481085:web:5267be1e0d02dd072d8d14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
