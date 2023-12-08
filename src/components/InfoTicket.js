import { getTickets } from "../modules/firebase.js";
import { LitElement, css, html } from "lit";

export class InfoTicket extends LitElement {
  static get properties() {
    return {
      platosPorTipo: { type: Object },
      platosPorDirigente: { type: Object }
    };
  }

  static styles = css`
    :host {

    }

    .container {
      text-align: center;
    }

    section {
      color: white;
    }

    .summary-plates {
      display: flex;
      gap: 3.5rem;
      justify-content: center;
      align-items: center;
      margin-top: 2rem;
      font-weight: bold;

      & div {
        display: flex;
        gap: 1rem;
      }
    }

    .summary-dirigentes {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      margin: 1rem 0;

      & p {
        margin: 0.5rem 0;
      }

      & span {
        font-weight: bold;
      }
    }
  `;

  constructor() {
    super();
    this.platosPorTipo = { pollo: 0, lechon: 0 };
    this.platosPorDirigente = {};
    this.loadData();
  }

  async loadData() {
    const aggregatedData = await getTickets();
    const platosPorTipo = { pollo: 0, lechon: 0 };
    const platosPorDirigente = {};

    aggregatedData.forEach(doc => {
      const ticket = doc.data();
      // Sumar los platos por tipo
      if (ticket.plate === "Pollo al horno") {
        platosPorTipo.pollo++;
      } else if (ticket.plate === "Lechon al horno") {
        platosPorTipo.lechon++;
      }

      // Sumar los platos por dirigente
      if (!platosPorDirigente[ticket.dirigente]) {
        platosPorDirigente[ticket.dirigente] = { pollo: 0, lechon: 0 };
      }
      if (ticket.plate === "Pollo al horno") {
        platosPorDirigente[ticket.dirigente].pollo++;
      } else if (ticket.plate === "Lechon al horno") {
        platosPorDirigente[ticket.dirigente].lechon++;
      }
    });

    this.platosPorTipo = platosPorTipo;
    this.platosPorDirigente = platosPorDirigente;
  }

  render() {
    return html`
    <div class="containter">
      <section class="summary-plates">
        <div class="chicken">
          <img src="/images/icon-chicken.svg" alt="Icon Chicken">
          <p>${this.platosPorTipo.pollo}</p>
        </div>
        <div class="pig">
          <img src="/images/icon-pig.svg" alt="Icon Chicken">
          <p>${this.platosPorTipo.lechon}</p>
        </div>
      </section>
      <section class="summary-dirigentes">
        ${Object.entries(this.platosPorDirigente)
    .map(([dirigente, platos]) => {
      const ventas = platos.pollo + platos.lechon;
      return html`<p>${dirigente}: <span>${ventas}</span></p>`;
    })
}
      </section>
    </div>`;
  }
}

customElements.define("info-ticket", InfoTicket);
