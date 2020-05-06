import {LitElement, html} from 'lit-element'
import {personCardStyles} from './personCardStyles'
import avatar from '../../img/girl.jpg'

class PersonCard extends LitElement {
  static get properties() {
    return {
      name: {
        type: String
      },

      img: {
        type: String
      }
    }
  }

  constructor() {
    super()
    this.name = 'Lucy Clarc'
    this.img = avatar
  }

  static get styles() {
    return [personCardStyles]
  }

  render() {
    console.log(this.name)
    console.log(this.img)

    return html`
      <div class="person-card__wrapper">
        <div class="person-card__img">
          <img src="${this.img}" alt="">
        </div>
        <p class="person-card__name">${this.name}</p>
      </div>
    `
  }
}

customElements.define('person-card', PersonCard)