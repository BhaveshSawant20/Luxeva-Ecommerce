// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8Y0dS0WIvGAuDrX0xIidoCPsibXUJYjg",
  authDomain: "luxeva-8a978.firebaseapp.com",
  projectId: "luxeva-8a978",
  storageBucket: "luxeva-8a978.appspot.com",
  messagingSenderId: "580488411818",
  appId: "1:580488411818:web:91a15f265b893f8d406ed3",
  measurementId: "G-45JZ6QFHHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
