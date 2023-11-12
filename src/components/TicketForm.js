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
    `;
  }

  constructor() {
    super();
    this.name = "";
    this.plate = "";
    this.dirigente = "";
  }

  handleSubmit(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent("form-submitted", {
      detail: { name: this.name, plate: this.plate, dirigente: this.dirigente },
      bubbles: true,
      composed: true
    }));
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
          <label for="dirigente">Dirigente:</label>
          <input required type="text" list="diris" name="dirigente" .value=${this.dirigente} @input=${this.handleInputChange}>
          <datalist id="diris">
            ${this.getDiris("name")}
          </datalist>
        </div>

        <div class="input-label">
          <label for="name">Nombre:</label>
          <input required id="name" name="name" type="text" .value=${this.name} @input=${this.handleInputChange} />
        </div>

        <div class="input-label">
          <p>Seleccione su plato:</p>
          <div class="plates">
            <input required id="chicken" name="plate" type="radio" value="Pollo al horno" @change=${this.handleInputChange} ?checked=${this.plate === "Pollo"} />
            <label for="chicken">Pollo</label>

            <input id="pork" name="plate" type="radio" value="Lechon al horno" @change=${this.handleInputChange} ?checked=${this.plate === "Lechon"} />
            <label for="pork">Lechón</label>
          </div>
        </div>

        <button type="submit">Generar Ticket</button>
      </form>
    `;
  }
}

customElements.define("ticket-form", TicketForm);
