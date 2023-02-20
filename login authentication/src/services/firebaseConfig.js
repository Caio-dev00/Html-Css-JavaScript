
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoW7zcJFvJcXoXxdkOINVHJeNGEBrkn4Y",
  authDomain: "react-auth-23acd.firebaseapp.com",
  projectId: "react-auth-23acd",
  storageBucket: "react-auth-23acd.appspot.com",
  messagingSenderId: "855031603741",
  appId: "1:855031603741:web:3ecb9b3d40c633ab261cf4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);