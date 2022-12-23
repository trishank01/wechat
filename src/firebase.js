// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAqmaVpE62GA44eUkU5KtYCXdoN-YcEt0",
  authDomain: "wechat-33dd2.firebaseapp.com",
  projectId: "wechat-33dd2",
  storageBucket: "wechat-33dd2.appspot.com",
  messagingSenderId: "931709337577",
  appId: "1:931709337577:web:f1424c7a00936377931578"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);

