import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js'; /* needed? */

export class WrapperBorder extends LitElement
{
  static get styles()
  {
    return [
      resetCSS,
      css`
      div {
          width: 100%;
          height: 100%;
          border-left: 0.5rem solid var(--color__teal);
          background-color: var(--color__white);
        }
      `
    ];
  }

  render()
  {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('wrapper-border', WrapperBorder);