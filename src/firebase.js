// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB59p3rQPbtJJzdtl74tTgkejAnhBIPsDk",
  authDomain: "wechat-affa9.firebaseapp.com",
  projectId: "wechat-affa9",
  storageBucket: "wechat-affa9.appspot.com",
  messagingSenderId: "233276180289",
  appId: "1:233276180289:web:1dc8f6f10caca4740383c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);

