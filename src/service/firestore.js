import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD-FFcits99L6UD2WX1btnZysfS51Db9xM",
    authDomain: "bdsmarttalent.firebaseapp.com",
    projectId: "bdsmarttalent",
    storageBucket: "bdsmarttalent.appspot.com",
    messagingSenderId: "780555723303",
    appId: "1:780555723303:web:2324b380ed1d557d976402",
    measurementId: "G-VWV1BRJRHX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);