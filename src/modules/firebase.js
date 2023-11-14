import { FIREBASE } from "../config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(FIREBASE.firebaseConfig);

const db = getFirestore(app);

export const buyTicket = async (data) => {
  // Crear una referencia a la colección de tickets
  const ticketsCollectionRef = collection(db, "tickets");

  // Crear una consulta para obtener todos los tickets y ordenarlos por timestamp
  const q = query(ticketsCollectionRef, orderBy("timestamp", "desc"));

  try {
    // Ejecutar la consulta
    const querySnapshot = await getDocs(q);

    // Obtener el número de documentos y sumar uno para el nuevo ticket
    const ticketNumber = querySnapshot.size + 1;

    // Agregar el número de ticket y el timestamp al objeto de datos
    const ticketData = {
      ...data,
      ticketNumber,
      timestamp: new Date()
    };

    // Agregar el documento con el objeto de datos actualizado a Firestore
    await addDoc(ticketsCollectionRef, ticketData);

    // Devolver la referencia al documento creado
    return ticketNumber;
  } catch (error) {
    console.error("Error al comprar ticket: ", error);
    throw new Error("Error al comprar ticket");
  }
};
