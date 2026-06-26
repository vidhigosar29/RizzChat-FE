
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbDfPDPUyTDqhEicic0ndcdch64XFphpo",
  authDomain: "auth-29-07-2007.firebaseapp.com",
  projectId: "auth-29-07-2007",
  storageBucket: "auth-29-07-2007.firebasestorage.app",
  messagingSenderId: "264676613892",
  appId: "1:264676613892:web:3351208bd090a2e31bba51",
  measurementId: "G-XJ0Q54X17R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);






export default app;