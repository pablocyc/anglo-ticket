import { LitElement, html, css } from "lit";
import diris from "../data/diris.json";
import Swal from "sweetalert2";
import { helix } from "ldrs";

helix.register();

class TicketForm extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      plate: { type: String },
      isLoading: { type: Boolean },
      showTooltip: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      p {
        margin: 0;
      }
      .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .input-label {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }

      label, p {
        color: white;
        font-size: 1.2rem;
      }

      .label-title {
        font-size: 0.8rem;
        font-weight: 700;
        margin-left: 0.6rem;
      }

      .input {
        border-radius: 1rem;
        height: 1.7rem;
        font-family: Satoshi;
        font-size: 1.1rem;
        text-align: center;
        box-shadow: 0 2px #a7a5a5;
        border: 1.5px solid #a7a5a5cc;
      }

      .plates {
        text-align: center;
      }

      .tooltip {
        background-color: #ffdd57;
        color: #333;
        text-align: center;
        text-wrap: nowrap;
        border-radius: 6px;
        padding: 8px;
        position: absolute;
        z-index: 1;
        bottom: -80%;
        left: 30%;
        margin-left: -60px; /* Cambiar según el tamaño del tooltip */
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);

        /* Animación */
        opacity: 0;
        transition: opacity 0.3s;
      }

      .input-dirigente {
        position: relative;
      }

      .tooltip:after {
        content: "";
        position: absolute;
        bottom: 25px;
        left: 15%;
        margin-left: -8px;
        width: 18px;
        height: 18px;
        background: #ffdd57;
        transform: rotate(45deg);
      }

      .tooltip.show {
        opacity: 1;
      }

      button {
        cursor: pointer;
        padding: 0.5rem 0;
        margin: 2rem 0;
        color: #fff;
        font-size: 1.2rem;
        border-radius: 2rem;
        border: none;
        position: relative;
        background: #100720;
        transition: 0.1s;
      }
      
      button::after {
        content: "";
        width: 100%;
        height: 100%;
        background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
        filter: blur(15px);
        z-index: -1;
        position: absolute;
        left: 0;
        top: 0;
      }
      
      button:hover {
        transform: scale(0.9) rotate(3deg);
        background: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
        transition: 0.5s;
      }

      .overlay {
        position: fixed;
        display: flex;
        flex-direction: column;
        font-weight: 700;
        gap: 1rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
    `;
  }

  constructor() {
    super();
    this.name = "";
    this.phone = "";
    this.plate = "";
    this.dirigente = "";
    this.location = "";
    this.isLoading = false;
    this.showTooltip = false;
  }

  handleSubmit(e) {
    e.preventDefault();

    // Verifica si el dirigente está en la lista
    const dirigenteValido = diris.some(diri => diri.name === this.dirigente);
    if (!dirigenteValido) {
      this.showTooltip = true;
      // Oculta el tooltip después de un tiempo
      setTimeout(() => { this.showTooltip = false; }, 3000);
      return;
    }

    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres generar el ticket?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, generar ticket"
    }).then((result) => {
      if (result.isConfirmed) {
        this.dispatchEvent(new CustomEvent("form-submitted", {
          detail: {
            name: this.name,
            phone: this.phone,
            plate: this.plate,
            dirigente: this.dirigente,
            location: this.location
          },
          bubbles: true,
          composed: true
        }));

        this.isLoading = true;
      }
    });
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    const formEvent = new CustomEvent("data-form", {
      detail: {
        from: "TicketForm",
        message: { [name]: value }
      },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(formEvent);
    this[name] = value;
  }

  getDiris(data) {
    return diris.map(diri => html`
        <option value=${diri[data]}></option>
      `
    );
  }

  generateOverlay() {
    if (this.isLoading) {
      return html`
        <div class="overlay">
          <l-helix color="#ffdc02" size="100"></l-helix>
          <p class="text-overlay">Generando Ticket...</p>
        </div>
      `;
    }
    return html``;
  }

  render() {
    return html`
      <form class="form" @submit=${this.handleSubmit}>
        <div class="input-label input-dirigente">
          <label class="label-title" for="dirigente">Dirigente</label>
          <input
            required
            type="text"
            class="input"
            id="dirigente"
            list="diris"
            name="dirigente"
            .value=${this.dirigente}
            @input=${this.handleInputChange}>
          <datalist id="diris">
            ${this.getDiris("name")}
          </datalist>
          ${this.showTooltip ? html`<div class="tooltip show">Seleccione un dirigente de la lista</div>` : null}
        </div>
        <div class="input-label">
          <label class="label-title" for="name">Nombre</label>
          <input
            required
            type="text"
            class="input name"
            id="name"
            name="name"
            .value=${this.name}
            @input=${this.handleInputChange}
            placeholder="Nombre"/>
        </div>
        <div class="input-label">
          <label class="label-title" for="phone">Teléfono</label>
          <input
            required
            type="tel"
            class="input phone"
            id="phone"
            name="phone"
            .value=${this.phone}
            @input=${this.handleInputChange}
            placeholder="Teléfono"/>
        </div>

        </div>

        <div class="input-label">
          <p class="label-title">Seleccione su plato</p>
          <div class="plates">
            <input
              required
              type="radio"
              id="chicken"
              name="plate"
              value="Pollo al horno"
              @change=${this.handleInputChange}
              ?checked=${this.plate === "Pollo"} />
            <label for="chicken">Pollo</label>

            <input
              type="radio"
              id="pork"
              name="plate"
              value="Lechon al horno"
              @change=${this.handleInputChange}
              ?checked=${this.plate === "Lechon"} />
            <label for="pork">Lechón</label>
          </div>
        </div>

        <div class="input-label">
          <label class="label-title" for="location">Dirección de domicilio</label>
          <input
            required
            class="input"
            id="location"
            name="location"
            type="text"
            .value=${this.location}
            @input=${this.handleInputChange}
            placeholder="Coordenadas"/>
        </div>

        <button class="button" type="submit">Comprar Ticket</button>
        ${this.generateOverlay()}
      </form>
    `;
  }
}

customElements.define("ticket-form", TicketForm);
