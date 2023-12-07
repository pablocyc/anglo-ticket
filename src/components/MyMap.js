import { loader } from "../modules/googleMaps.js";
import { LitElement, css, html } from "lit";

export class MyMap extends LitElement {
  static properties = {
    originLocation: { type: Object },
    tickets: { type: Array },
  };

  constructor() {
    super();
    this.tickets = [];
  }

  static styles = css`
    .map {
      width: 100%;
      height: 500px;
    }
  `;

  setData() {
    loader.load().then(() => {
      this.initMap();
    });
  }

  async initMap() {
    // eslint-disable-next-line no-undef
    this.map = await new google.maps.Map(this.shadowRoot.getElementById("map"), {
      center: { lat: -17.389362, lng: -66.1540359 },
      zoom: 15,
    });

    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    // eslint-disable-next-line no-undef
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    this.tickets.forEach(ticket => {
      let iconUrl;
      if (ticket.pollo > 0 && ticket.lechon > 0) {
        iconUrl = "./images/icon-both.svg";
      } else if (ticket.pollo > 0) {
        iconUrl = "./images/icon-chicken.svg";
      } else if (ticket.lechon > 0) {
        iconUrl = "./images/icon-pig.svg";
      }
      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        position: ticket.location,
        map: this.map,
        icon: {
          url: iconUrl,
          // eslint-disable-next-line no-undef
          size: new google.maps.Size(40, 40),
          // eslint-disable-next-line no-undef
          anchor: new google.maps.Point(20, 40)
        }
      });

      marker.addListener("click", () => {
        // eslint-disable-next-line no-undef
        const infoWindow = new google.maps.InfoWindow({
          content: this.infoContent(ticket.name, ticket.dirigente, ticket.pollo, ticket.lechon)
        });
        infoWindow.open(this.map, marker);

        const request = {
          origin: this.originLocation,
          destination: marker.getPosition(),
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING
        };

        directionsService.route(request, (response, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
          } else {
            // Manejar errores o rutas no encontradas
          }
        });
      });
    });
  }

  infoContent(name, dirigente, pollo, lechon) {
    return `
      <style>
        p {
          margin: 0;
        }
      </style>
      <div class="container">
        <p class="text"><strong>Comprador: </strong>${name}</p>
        <p class="text">Pollos: <strong>${pollo}</strong></p>
        <p class="text">Cerdos: <strong>${lechon}</strong></p>
        <p class="text"><strong>Dirigente: </strong>${dirigente}</p>
      </div>
    `;
  }

  render() {
    return html`
    <div class="containter">
      <div class="map" id="map"></div>
    </div>`;
  }
}

customElements.define("my-map", MyMap);
