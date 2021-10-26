// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACi0OL7jzN29WdWuZWWdBAQd8NI20AfYA",
  authDomain: "info-core-73435.firebaseapp.com",
  projectId: "info-core-73435",
  storageBucket: "info-core-73435.appspot.com",
  messagingSenderId: "1035999929861",
  appId: "1:1035999929861:web:2208969c8ad3657eff5e6c",
  measurementId: "G-4YYTP1ZFYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore()

export {db}