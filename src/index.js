import { buyTicket } from "./modules/firebase.js";
import "./components/CountdownTimer.js";
import "./components/TicketGenerator.js";
import "./components/TicketForm.js";

const ticketElement = document.createElement("ticket-generator");
const firstChild = document.querySelector("countdown-timer");
firstChild.after(ticketElement);

document.addEventListener("data-form", event => {
  const message = event.detail.message;
  ticketElement[Object.keys(message)] = Object.values(message)[0];
});

document.addEventListener("form-submitted", async event => {
  const msgForm = event.detail;
  try {
    const ticketNumber = await buyTicket(msgForm);

    ticketElement.barcodeGenerator(ticketNumber.toString(), msgForm.dirigente);
  } catch (error) {
    console.error("Error al generar el ticket: ", error);
  }
});
