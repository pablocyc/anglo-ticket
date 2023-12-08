import { getTicketNumber, buyTicket, getAggregatedTickets } from "./modules/firebase.js";
import "./components/CountdownTimer.js";
import "./components/TicketGenerator.js";
import "./components/TicketForm.js";
import "./components/MyMap.js";
import "./components/InfoTicket.js";
import html2canvas from "html2canvas";

const ticketElement = document.createElement("ticket-generator");
const ticketForm = document.querySelector("ticket-form");
const ticketSection = document.querySelector(".ticket-section");
ticketSection.prepend(ticketElement);
const mapSection = document.querySelector(".map-section");
const mapComponent = document.querySelector("my-map");
const btnMap = document.querySelector(".btn-map");

const originLocation = {
  lat: -17.389308130387093,
  lng: -66.15370809325312
};

async function showTotalTickets() {
  try {
    const ticketNumber = await getTicketNumber();
    const textTotalTickets = document.querySelector(".total-tickets");
    textTotalTickets.innerHTML =
      `Total de Tickets Vendidos:  <span>${ticketNumber}</span>
       - <img src="/images/icon-cash.svg" alt="icon cash">
       <span>${ticketNumber * 30}Bs.</span>`;
  } catch (error) {
    console.error("Error al obtener el número total de tickets: ", error);
  }
}

async function loadMapWithData() {
  const aggregatedData = await getAggregatedTickets();
  mapComponent.tickets = formatDataForMap(aggregatedData);
  mapComponent.originLocation = originLocation;
  mapComponent.setData();
}

showTotalTickets();
loadMapWithData();

function formatDataForMap(aggregatedData) {
  return Object.values(aggregatedData).map(data => {
    let lat, lng;
    if (data.location && data.location.includes(", ")) {
      [lat, lng] = data.location.split(", ").map(coord => parseFloat(coord));
      if (isNaN(lat) || isNaN(lng)) {
        lat = originLocation.lat;
        lng = originLocation.lng;
      }
    } else {
      lat = originLocation.lat;
      lng = originLocation.lng;
    }

    return {
      name: data.name,
      dirigente: data.dirigente,
      location: { lat, lng },
      pollo: data.pollo,
      lechon: data.lechon,
      phone: data.phone
    };
  });
}

document.addEventListener("data-form", event => {
  const message = event.detail.message;
  ticketElement[Object.keys(message)] = Object.values(message)[0];
});

document.addEventListener("form-submitted", async event => {
  const msgForm = event.detail;
  try {
    const ticketNumber = await buyTicket(msgForm);

    ticketElement.barcodeGenerator(ticketNumber.toString(), msgForm.dirigente);

    setTimeout(() => {
      html2canvas(ticketElement.shadowRoot.querySelector(".ticket")).then(canvas => {
        // Crear una imagen a partir del canvas y forzar la descarga
        const image = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = image;
        downloadLink.download = `Ticket-${ticketNumber}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
      ticketForm.isLoading = false;
    }, 2000); // Ajusta este tiempo según la renderización del ticket
  } catch (error) {
    console.error("Error al generar el ticket: ", error);
  }
});

btnMap.addEventListener("click", () => {
  const icon = btnMap.querySelector("img");

  if (icon.src.includes("icon-map.svg")) {
    icon.src = "./images/icon-ticket.svg";
    ticketSection.classList.add("hidden");
    mapSection.classList.add("fade-in");
    mapSection.classList.remove("hidden");
  } else {
    icon.src = "./images/icon-map.svg";
    ticketSection.classList.remove("hidden");
    mapSection.classList.remove("fade-in");
    mapSection.classList.add("hidden");
  }
});
