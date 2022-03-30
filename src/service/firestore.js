// Importando functions de firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyA3ZcmyubKIlbfr8x0wsI_SVp0AUSM3BJs",
  authDomain: "smart-talent-ef8ac.firebaseapp.com",
  projectId: "smart-talent-ef8ac",
  storageBucket: "smart-talent-ef8ac.appspot.com",
  messagingSenderId: "936190522484",
  appId: "1:936190522484:web:46ea033183e438c73d0d21",
  measurementId: "G-097NJSGKFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// database : base de datos
const db = getFirestore(app);

// Hacer la petición para poder traer datos del usuario administrador
export const getUsersAdmin = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionEmpresa = collection(db, "tblEmpresa");
  // paso 2: Traer los documentos
  const documentUsers = await getDocs(collectionEmpresa);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersAdmin = documentUsers.docs.map((doc) => doc.data());
  return usersAdmin;
};