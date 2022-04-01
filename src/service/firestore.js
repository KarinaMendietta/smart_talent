import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

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
  //const analytics = getAnalytics(app);

  const db = getFirestore(app);


  // Hacer la peticion para poder traer las preguntas
  export const getTests= async () => {
    // paso 1: Traer la coleccion de datos
    const collectionTests = collection(db, "test");
    // paso 2: Traer los documentos
    const documentTests = await getDocs(collectionTests);
    // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
    const tests = documentTests.docs.map((doc) => doc.data());
    //console.log("mira",tests)
    return tests;
  };