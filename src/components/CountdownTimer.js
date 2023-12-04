import { LitElement, html, css } from "lit";

class CountdownTimer extends LitElement {
  static get properties() {
    return {
      targetDate: { type: Number },
      timeRemaining: { type: Object }
    };
  }

  constructor() {
    super();
    const date = this.getAttribute("eventDate");
    this.targetDate = new Date(date).getTime();
    this.timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  static get styles() {
    return css`
      .countdown {
        font-size: 1.2em;
        text-align: center;
        color: #faca15;
      }

      .box-timer {
        display: inline;
        color: white;
        font-weight: 500;
        padding: 6px 8px;
        text-align: center;
        border-radius: 6px;
        background-color: #1e1e2a;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateTime();
    this.timerID = setInterval(() => this.updateTime(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.timerID);
  }

  updateTime() {
    const now = new Date().getTime();
    const distance = this.targetDate - now;

    if (distance < 0) {
      clearInterval(this.timerID);
      this.timeRemaining = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return;
    }

    this.timeRemaining = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  }

  render() {
    const { days, hours, minutes, seconds } = this.timeRemaining;
    return html`
      <div class="countdown">
        <div class="box-timer">${days}d</div>
        :
        <div class="box-timer">${hours}h</div>
        :
        <div class="box-timer">${minutes}m</div>
        :
        <div class="box-timer">${seconds}s</div>
      </div>
    `;
  }
}

customElements.define("countdown-timer", CountdownTimer);
