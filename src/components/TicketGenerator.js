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
      }

      .ticket {
        position: relative;
        background-image: url("../images/ticket.svg");
        background-repeat: no-repeat;
        background-origin: content-box;
        background-size: var(--width-image) var(--height-image);
        width: var(--width-image);
        height: var(--height-image);
      }
      .name, .plate, .plate-vt, .code, .code-vt, .barcode {
        position: absolute;
        font-size: 0.6rem;
      }

      .plate, .plate-vt {
        font-family: Vandal;
        font-size: 0.8rem;
      }

      .plate-vt {
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
      .plate { top: 50%; left: 27%; }
      .plate-vt { bottom: 47%; right: 2.8%; }
      .code { bottom: 6%; left: 33%; }
      .code-vt { bottom: 22%; right: 8.5%; }
      .barcode { top: 31%; right: -8.5%; }

      .ticket .barcode {
        width: 30%;
        transform: rotate(90deg) !important;
      }
    `;
  }

  barcodeGenerator(data) {
    JsBarcode(this.shadowRoot.getElementById("barcode"), data, {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 28,
      displayValue: false
    });
  }

  render() {
    return html`
      <div class="ticket">
        <div class="name">${this.name}</div>
        <div class="plate">${this.plate}</div>
        <div class="plate-vt">${this.plate}</div>
        <div class="code">${this.code}</div>
        <div class="code-vt">${this.code}</div>
        <svg id="barcode" class="barcode"></svg>
      </div>
    `;
  }
}

customElements.define("ticket-generator", TicketGenerator);
