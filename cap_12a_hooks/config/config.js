// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3fKc7h7QZFRD3dcS-akicZrfXRKC8gsI",
  authDomain: "lista-de-linguagens-7bb87.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-7bb87-default-rtdb.firebaseio.com",
  projectId: "lista-de-linguagens-7bb87",
  storageBucket: "lista-de-linguagens-7bb87.appspot.com",
  messagingSenderId: "344680572384",
  appId: "1:344680572384:web:58fce341c266ed278c7785",
  measurementId: "G-97845GVZWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);