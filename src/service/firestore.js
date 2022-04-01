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
  apiKey: "AIzaSyBTneqxPefPTJkCqtHMuPq6AdV3VBuIIKg",
  authDomain: "bdsmarttalent-98552.firebaseapp.com",
  projectId: "bdsmarttalent-98552",
  storageBucket: "bdsmarttalent-98552.appspot.com",
  messagingSenderId: "638386799346",
  appId: "1:638386799346:web:2d472309df249faba0066b",
  measurementId: "G-QWX7YQH8X5"
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
    console.log("mira",tests)
    return tests;
  };