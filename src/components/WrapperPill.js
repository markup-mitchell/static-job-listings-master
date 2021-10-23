import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js'; /* needed? */

export class WrapperPill extends LitElement
{
  static get properties()
  {
    return {
      color: { type: String } /* enum??? */
    };
  }
  static get styles()
  {
    return [
      resetCSS, /* surely not */
      css`
        div {
          display: inline-flex;
          height: 2.4rem;
          align-items: center;
          font-size: 1.1rem;
          border-radius: 1.5rem;
          padding: 0 1rem;
        }
        span {
          font-weight: 700;
          color: var(--color__white);
          margin-bottom: -2px;
          text-transform: uppercase;
        }
        .light {
          background-color: var(--color__teal);
        }
        .dark {
          background-color: var(--color__black);
        }
        .unassigned {
          background-color: red;
        }
      `
    ];
  }
  constructor()
  {
    super();
    this.color = "unassigned";
  }

  render()
  {
    return html`
      <div class="${ this.color }">
        <span>
          <slot></slot>
        </span>
      </div>
    `;
  }
}

customElements.define('wrapper-pill', WrapperPill);