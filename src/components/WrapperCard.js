import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js'; /* needed? */

export class WrapperCard extends LitElement
{
  static get styles()
  {
    return [
      resetCSS,
      css`
      div {
          width: 100%;
          height: 100%;
          background-color: var(--color__white);
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15), 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
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

customElements.define('wrapper-card', WrapperCard);