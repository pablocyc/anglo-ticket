import { LitElement, html, css } from "lit";

class TicketForm extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      plate: { type: String },
      code: { type: String }
    };
  }

  static get styles() {
    return css`
      /* Tus estilos aquí */
      input, select, button {
        /* Estilos básicos para los elementos del formulario */
      }
    `;
  }

  constructor() {
    super();
    this.name = "";
    this.plate = "";
    this.code = "";
  }

  // Función para manejar la presentación del formulario
  handleSubmit(e) {
    e.preventDefault();
    // Aquí podrías emitir un evento con los datos recogidos o procesarlos directamente
    // this.dispatchEvent(new CustomEvent('form-submitted', { detail: { name: this.name, plate: this.plate, code: this.code } }));
    // O puedes llamar directamente a un método para generar el ticket, por ejemplo
    // this.generateTicket();
  }

  // Función para manejar la actualización de los valores del formulario
  handleInputChange(e) {
    const { name, value } = e.target;
    this[name] = value;
  }

  render() {
    return html`
      <form @submit=${this.handleSubmit}>
        <label for="name">Nombre:</label>
        <input id="name" name="name" type="text" .value=${this.name} @input=${this.handleInputChange} />

        <label for="plate">Plato:</label>
        <input id="plate" name="plate" type="text" .value=${this.plate} @input=${this.handleInputChange} />

        <label for="code">Código:</label>
        <input id="code" name="code" type="text" .value=${this.code} @input=${this.handleInputChange} />

        <button type="submit">Generar Ticket</button>
      </form>
    `;
  }

  // Método para generar el ticket, puede llamar a otro componente o realizar una acción
  generateTicket() {
    // Logica para generar el ticket con los datos recogidos
  }
}

customElements.define("ticket-form", TicketForm);
