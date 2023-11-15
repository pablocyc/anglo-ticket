import { LitElement, html, css } from "lit";
import JsBarcode from "jsbarcode";

class TicketGenerator extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      plate: { type: String },
      code: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        --width-image: 329px;
        --height-image: 136px;
        overflow: hidden;
      }

      .ticket {
        position: relative;
        width: var(--width-image);
        height: var(--height-image);
      }

      .image-ticket {
        width: var(--width-image);
        height: var(--height-image);
      }

      .name, .plate, .plate-vt, .code, .code-vt, .barcode {
        position: absolute;
        font-size: 0.6rem;
      }

      .name {
        width: 30%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .plate, .plate-vt {
        font-family: Vandal;
        font-size: 0.8rem;
        text-align: center;
      }

      .plate {
        width: 36%;
      }

      .plate-vt {
        width: 24%;
        transform: rotate(-90deg);
        font-size: 0.6rem;
        color: white;
      }

      .code, .code-vt {
        font-family: Cascadia;
      }

      .code-vt {
        color: white;
        transform: rotate(-90deg);
        font-size: 0.4rem;
      }
      
      .name { bottom: 6%; left: 3.5%; font-family: Satoshi }
      .plate { top: 50%; left: 25.5%; }
      .plate-vt { bottom: 46%; right: 2.2%; }
      .code { bottom: 6%; left: 35%; }
      .code-vt { bottom: 22%; right: 8.5%; }
      .barcode { top: 42%; right: -8.5%; }

      .ticket .barcode {
        width: 30%;
        transform: rotate(90deg) !important;
      }
    `;
  }

  formatString(str) {
    const [firstName, lastName] = str.split(" ");
    const name = firstName[0].toUpperCase() + firstName[1].toLowerCase();
    return `${name + lastName[0].toUpperCase()}-`;
  }

  barcodeGenerator(data, diri) {
    const ticketDiri = this.formatString(diri);
    const ticketNum = data.padStart(3, "0");
    const barCode = ticketDiri + ticketNum;

    JsBarcode(this.shadowRoot.getElementById("barcode"), barCode, {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 28,
      displayValue: false
    });
    this.code = `#${ticketNum}`;
  }

  render() {
    return html`
      <div class="ticket">
        <img src="images/ticket.svg" alt="ticket template" class="image-ticket">
        <div class="name">${this.name}</div>
        <div class="plate">${this.plate}</div>
        <div class="plate-vt">${this.plate}</div>
        <div class="code">${this.code}</div>
        <div class="code-vt">${this.code}</div>
        <img id="barcode" class="barcode">
      </div>
    `;
  }
}

customElements.define("ticket-generator", TicketGenerator);
