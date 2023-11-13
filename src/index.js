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

document.addEventListener("form-submitted", event => {
  const msgForm = event.detail;
  console.log(msgForm);
  ticketElement.barcodeGenerator("1", msgForm.dirigente);
});
