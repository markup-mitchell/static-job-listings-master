import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js'; /* needed? */

export class TagLabel extends LitElement
{
  static get properties() {
    return {
      text: {type: String}
    }
  }
  static get styles()
  {
    return [
      resetCSS, /* button only??? */
      css`
        button {
          display: inline-flex;
          height: 2.4rem;
          align-items: center;
          border-radius: 1.5rem;
          padding: 0 1rem;
          border-radius: 0.4rem;
          color: var(--color__teal);
          background-color: var(--color__teal--light);
          transition: var(--transition__out);
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: -2px;
        }
        button:hover,
        button:focus-visible {
          background-color: var(--color__teal);
          color: var(--color__white);
          transition: var(--transition__in);
          outline-color: var(--color__teal);
          outline-offset: 4px;
        }
        @media (min-width: 1024px) {
          button {
            font-size: 1.3rem;
          }
        }
      `
    ];
  }

  render()
  {
    return html`
      <button>
          ${this.text}
      </button>
    `;
  }
}

customElements.define('tag-label', TagLabel);