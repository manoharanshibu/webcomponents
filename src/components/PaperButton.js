import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/paper-button/paper-button.js';

class PaperButton extends PolymerElement {
  static get template() {
    return html`
      <paper-button class="pink">link</paper-button>
      <paper-button raised class="indigo">raised</paper-button>
      <paper-button toggles raised class="green">toggles</paper-button>
      <paper-button disabled class="disabled">disabled</paper-button>
    `;
  }
}
customElements.define('sample-element', PaperButton);