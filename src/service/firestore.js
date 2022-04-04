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

  export const getPostulantes= async () => {
    // paso 1: Traer la coleccion de datos
    const collectionPostulantes = collection(db, "postulante");
    // paso 2: Traer los documentos
    const documentPostulantes = await getDocs(collectionPostulantes);
    // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
    const postulantes = documentPostulantes.docs.map((doc) => doc.data());
    //console.log("postulantes",postulantes)
    //solo enviamos el numero de postulantes
    return postulantes.length;
  }

  export const registerPostulante = async (idPostulante,postulante) => {
    const id = uuidv4().replaceAll("-", "");
    postulante.id = id;
    postulante.id_Postulante = idPostulante;
    await setDoc(doc(db, "postulante", id), postulante);
  };

  export const registerLaboral = async (idPostulante,laboral) => {
    const id = uuidv4().replaceAll("-", "");
    laboral.id_laboral = id;
    laboral.id_postulante = idPostulante;
    await setDoc(doc(db, "laboral", id), laboral);
  };

  export const registerPsicologico = async (idPostulante,psicologico) => {
    const id = uuidv4().replaceAll("-", "");
    psicologico.id_psicologico = id;
    psicologico.id_postulante = idPostulante;
    await setDoc(doc(db, "psicologico", id), psicologico);
  };

  export const registerCalificacion = async (idPostulante,idConvocatoria,calificacion) => {
    const id = uuidv4().replaceAll("-", "");
    calificacion.id_calificacion = id;
    calificacion.id_postulante = idPostulante;
    calificacion.id_convocatoria = idConvocatoria
    await setDoc(doc(db, "calificacion", id), calificacion);
  };

 // actualizar un datos en firebase
 export const updateCalificacion = async (calificacion) => {
  const calificacionRef = doc(db, "calificacion", calificacion.id);
  await updateDoc(calificacionRef, calificacion);
};