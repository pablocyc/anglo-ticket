import { FIREBASE } from "../config.js";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

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

export const getAggregatedTickets = async () => {
  const ticketsCollectionRef = collection(db, "tickets");
  const q = query(ticketsCollectionRef);

  try {
    const querySnapshot = await getDocs(q);
    const aggregatedData = {};

    querySnapshot.forEach((doc) => {
      const ticket = doc.data();
      const key = ticket.location;

      if (!aggregatedData[key]) {
        aggregatedData[key] = {
          name: ticket.name,
          dirigente: ticket.dirigente,
          location: ticket.location,
          pollo: 0,
          lechon: 0
        };
      }

      if (ticket.plate === "Pollo al horno") {
        aggregatedData[key].pollo++;
      } else if (ticket.plate === "Lechon al horno") {
        aggregatedData[key].lechon++;
      }
    });

    return aggregatedData;
  } catch (error) {
    console.error("Error al obtener tickets: ", error);
    throw new Error("Error al obtener tickets");
  }
};
