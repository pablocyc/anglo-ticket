import { loader } from "../modules/googleMaps.js";
import { LitElement, css, html } from "lit";

const originLocation = { lat: -17.3908202, lng: -66.157956 };
const locations = [
  { lat: -17.3900043, lng: -66.1584115 },
  { lat: -17.3823889, lng: -66.2665525 },
  { lat: -17.3665224, lng: -66.1680659 },
  { lat: -17.3982735, lng: -66.1692374 },
  { lat: -17.3869915, lng: -66.2598139 },
  { lat: -17.3932689, lng: -66.2417225 }
];

export class MyMap extends LitElement {
  static properties = {
  };

  static styles = css`
    :host {

    }

    .map {
      width: 100%;
      height: 400px;
    }
  `;

  firstUpdated() {
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

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);

    const request = {
      origin: originLocation, // Puede ser una coordenada o una dirección
      destination: locations[2],
      travelMode: google.maps.TravelMode.DRIVING // Puedes cambiar el modo (DRIVING, WALKING, BICYCLING, TRANSIT)
    };

    directionsService.route(request, (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        // Manejar errores o rutas no encontradas
      }
    });
    locations.forEach(location => {
      // eslint-disable-next-line no-undef
      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        icon: {
          url: "/images/icon-chicken.svg",
          // eslint-disable-next-line no-undef
          size: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 40)
        }
      });
    });
  }

  render() {
    return html`
    <div class="containter">
      <div class="map" id="map"></div>
    </div>`;
  }
}

customElements.define("my-map", MyMap);
