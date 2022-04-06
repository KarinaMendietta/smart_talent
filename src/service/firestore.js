// Importando functions de firebase
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
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

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

// database : base de datos
const db = getFirestore(app);

// Hacer la petición para poder traer datos de tblEmpresa
export const getUsersAdmin = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionEmpresa = collection(db, "empresa");
  // paso 2: Traer los documentos
  const documentUsers = await getDocs(collectionEmpresa);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersAdmin = documentUsers.docs.map((doc) => doc.data());
  return usersAdmin;
};

// Hacer la petición para poder traer datos de tblPostulantes
export const getApplicants = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionApplicants = collection(db, "postulante");
  // paso 2: Traer los documentos
  const documentApplicants = await getDocs(collectionApplicants);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersApplicants = documentApplicants.docs.map((doc) => doc.data());
  return usersApplicants;
};

// Hacer la petición para poder traer datos de tblConvocatoria
export const getAnnouncements = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionAnnouncement = collection(db, "convocatoria");
  // paso 2: Traer los documentos
  const documentAnnouncement = await getDocs(collectionAnnouncement);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersAnnouncement = documentAnnouncement.docs.map((doc) => doc.data());
  return usersAnnouncement;
};

// Hacer la petición para poder traer datos de tblCalificacion
export const getQualifications = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionQualification = collection(db, "calificacion");
  // paso 2: Traer los documentos
  const documentQualification = await getDocs(collectionQualification);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const usersQualification = documentQualification.docs.map((doc) => doc.data());
  return usersQualification;
};




// const firebaseConfig = {
//   apiKey: "AIzaSyA3ZcmyubKIlbfr8x0wsI_SVp0AUSM3BJs",
//   authDomain: "smart-talent-ef8ac.firebaseapp.com",
//   projectId: "smart-talent-ef8ac",
//   storageBucket: "smart-talent-ef8ac.appspot.com",
//   messagingSenderId: "936190522484",
//   appId: "1:936190522484:web:46ea033183e438c73d0d21",
//   measurementId: "G-097NJSGKFR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // database : base de datos
// const db = getFirestore(app);

// // Hacer la petición para poder traer datos de tblEmpresa
// export const getUsersAdmin = async () => {
//   // paso 1: Traer la coleccion de datos
//   const collectionEmpresa = collection(db, "tblEmpresa");
//   // paso 2: Traer los documentos
//   const documentUsers = await getDocs(collectionEmpresa);
//   // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
//   const usersAdmin = documentUsers.docs.map((doc) => doc.data());
//   return usersAdmin;
// };

// // Hacer la petición para poder traer datos de tblPostulantes
// export const getApplicants = async () => {
//   // paso 1: Traer la coleccion de datos
//   const collectionApplicants = collection(db, "tblPostulante");
//   // paso 2: Traer los documentos
//   const documentApplicants = await getDocs(collectionApplicants);
//   // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
//   const usersApplicants = documentApplicants.docs.map((doc) => doc.data());
//   return usersApplicants;
// };

// // Hacer la petición para poder traer datos de tblConvocatoria
// export const getAnnouncements = async () => {
//   // paso 1: Traer la coleccion de datos
//   const collectionAnnouncement = collection(db, "tblConvocatoria");
//   // paso 2: Traer los documentos
//   const documentAnnouncement = await getDocs(collectionAnnouncement);
//   // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
//   const usersAnnouncement = documentAnnouncement.docs.map((doc) => doc.data());
//   return usersAnnouncement;
// };

// // Hacer la petición para poder traer datos de tblCalificacion
// export const getQualifications = async () => {
//   // paso 1: Traer la coleccion de datos
//   const collectionQualification = collection(db, "tblCalificacion");
//   // paso 2: Traer los documentos
//   const documentQualification = await getDocs(collectionQualification);
//   // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
//   const usersQualification = documentQualification.docs.map((doc) => doc.data());
//   return usersQualification;
// };