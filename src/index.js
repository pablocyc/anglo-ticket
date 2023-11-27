import { getTicketNumber, buyTicket } from "./modules/firebase.js";
import "./components/CountdownTimer.js";
import "./components/TicketGenerator.js";
import "./components/TicketForm.js";
import html2canvas from "html2canvas";

const ticketElement = document.createElement("ticket-generator");
const ticketForm = document.querySelector("ticket-form");
const header = document.querySelector("header");
header.after(ticketElement);

async function showTotalTickets() {
  try {
    const ticketNumber = await getTicketNumber();
    const textTotalTickets = document.querySelector(".total-tickets");
    textTotalTickets.innerHTML = `Total de Tickets Vendidos:  <span>${ticketNumber}</span>`;
  } catch (error) {
    console.error("Error al obtener el número total de tickets: ", error);
  }
}

showTotalTickets();

document.addEventListener("data-form", event => {
  const message = event.detail.message;
  ticketElement[Object.keys(message)] = Object.values(message)[0];
});

document.addEventListener("form-submitted", async event => {
  const msgForm = event.detail;
  try {
    const ticketNumber = await buyTicket(msgForm);

    ticketElement.barcodeGenerator(ticketNumber.toString(), msgForm.dirigente);
    // Esperar a que el componente ticket-generator se actualice con el nuevo ticket
    setTimeout(() => {
      // Utilizar html2canvas para tomar una "captura de pantalla" del componente
      html2canvas(ticketElement.shadowRoot.querySelector(".ticket")).then(canvas => {
        // Crear una imagen a partir del canvas y forzar la descarga
        const image = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = image;
        downloadLink.download = `Ticket-${ticketNumber}.png`;
        document.body.appendChild(downloadLink); // Necesario para Firefox
        downloadLink.click();
        document.body.removeChild(downloadLink); // Limpieza después de la descarga
      });
      ticketForm.isLoading = false;
    }, 2000); // Ajusta este tiempo según la renderización del ticket
  } catch (error) {
    console.error("Error al generar el ticket: ", error);
  }
});
