import "./components/CountdownTimer.js";
import "./components/TicketGenerator.js";
import "./components/TicketForm.js";

const infoTicket = {
  name: "-",
  plate: "pollo al horno",
  code: "#001",
};

const ticketElement = document.createElement("ticket-generator");
const firstChild = document.querySelector("countdown-timer");
ticketElement.ticketData = infoTicket;
firstChild.after(ticketElement);
