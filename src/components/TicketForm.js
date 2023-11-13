import { LitElement, html, css } from "lit";
import diris from "../data/diris.json";

class TicketForm extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      plate: { type: String }
    };
  }

  static get styles() {
    return css`
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
        box-shadow: 1px 2px #a7a5a5;
        border: 1px solid #a7a5a5;
      }

      .plates {
        text-align: center;
      }
    `;
  }

  constructor() {
    super();
    this.name = "";
    this.plate = "";
    this.dirigente = "";
    this.location = "";
  }

  handleSubmit(e) {
    e.preventDefault();

    if (confirm("¿Estás seguro de que quieres generar el ticket?")) {
      this.dispatchEvent(new CustomEvent("form-submitted", {
        detail: { name: this.name, plate: this.plate, dirigente: this.dirigente },
        bubbles: true,
        composed: true
      }));
    }
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

  render() {
    return html`
      <form class="form" @submit=${this.handleSubmit}>
        <div class="input-label">
          <label class="label-title" for="dirigente">Dirigente</label>
          <input class="input" required type="text" list="diris" name="dirigente" .value=${this.dirigente} @input=${this.handleInputChange}>
          <datalist id="diris">
            ${this.getDiris("name")}
          </datalist>
        </div>

        <div class="input-label">
          <label class="label-title" for="name">Nombre</label>
          <input class="input" class="name" required id="name" name="name" type="text" .value=${this.name} @input=${this.handleInputChange} />
        </div>

        <div class="input-label">
          <p class="label-title">Seleccione su plato</p>
          <div class="plates">
            <input required id="chicken" name="plate" type="radio" value="Pollo al horno" @change=${this.handleInputChange} ?checked=${this.plate === "Pollo"} />
            <label for="chicken">Pollo</label>

            <input id="pork" name="plate" type="radio" value="Lechon al horno" @change=${this.handleInputChange} ?checked=${this.plate === "Lechon"} />
            <label for="pork">Lechón</label>
          </div>
        </div>

        <div class="input-label">
          <label class="label-title" for="location">Dirección de domicilio</label>
          <input class="input" required id="location" name="location" type="url" .value=${this.location} @input=${this.handleInputChange} />
        </div>

        <button type="submit">Generar Ticket</button>
      </form>
    `;
  }
}

customElements.define("ticket-form", TicketForm);
