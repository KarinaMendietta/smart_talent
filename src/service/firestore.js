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
  apiKey: "AIzaSyAtKjCX-cgfWOKpTjUxzbeLf48jHibYVGc",
  authDomain: "prysmarttalent.firebaseapp.com",
  projectId: "prysmarttalent",
  storageBucket: "prysmarttalent.appspot.com",
  messagingSenderId: "1036928853189",
  appId: "1:1036928853189:web:3e64b1b0dbc0dc465f3cac",
  measurementId: "G-06B162BMY2"
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

 