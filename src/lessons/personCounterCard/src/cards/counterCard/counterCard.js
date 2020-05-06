import {LitElement, html} from 'lit-element'
import {counterCardStyles} from './counterCardStyles'

class CounterCard extends LitElement {
  static get properties() {
    return {
      initial: {
        type: Number
      }
    }
  }

  static get styles() {
    return [counterCardStyles]
  }

  constructor() {
    super()
    this.initial = 0
  }

  decrement = () => {
    this.initial--
  }

  increment = () => {
    this.initial++
  }

  render() {
    return html`
      <div class="counter-card__wrapper">
        <div class="counter-card__decrement" @click=${this.decrement}>-</div>
        <div class="counter-card__result">${this.initial}</div>
        <div class="counter-card__increment" @click=${this.increment}>+</div>
      </div>
    `
  }
}

customElements.define('counter-card', CounterCard)