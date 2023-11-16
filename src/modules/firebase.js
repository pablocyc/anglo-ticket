import { FIREBASE } from "../config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

// Initialize Firebase
const app = initializeApp(FIREBASE.firebaseConfig);

const db = getFirestore(app);

export const getTicketNumber = async () => {
  const ticketsCollectionRef = collection(db, "tickets");
  const q = query(ticketsCollectionRef, orderBy("timestamp", "desc"));

  try {
    const querySnapshot = await getDocs(q);

    return querySnapshot.size;
  } catch (error) {
    console.error("Error en la consulta ", error);
    throw new Error("Error en la consulta de ticket");
  }
};

export const buyTicket = async (data) => {
  const ticketsCollectionRef = collection(db, "tickets");

  try {
    // Obtener el número de documentos y sumar uno para el nuevo ticket
    const ticketNumber = await getTicketNumber() + 1;

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
