import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js'; /* needed? */

export class TagLabel extends LitElement
{
  static get styles()
  {
    return [
      resetCSS, /* button only??? */
      css`
        button {
          display: inline-flex;
          height: 2.4rem;
          align-items: center;
          font-size: 1.1rem;
          border-radius: 1.5rem;
          padding: 0 1rem;
          border-radius: 0.4rem;
          color: var(--color__teal);
          background-color: var(--color__teal--light);
          transition: var(--transition__out);
          cursor: pointer;
          border: none;
        }
        button:hover,
        button:focus-visible {
          background-color: var(--color__teal);
          color: var(--color__white);
          transition: var(--transition__in);
          outline-offset: 4px;
          outline-color: var(--color__teal);
        }
        span {
          font-weight: 700;
          color: inherit;
          margin-bottom: -2px;
        }
      `
    ];
  }

  render()
  {
    return html`
      <button>
        <span>
          <slot></slot>
        </span>
      </button>
    `;
  }
}

customElements.define('tag-label', TagLabel);