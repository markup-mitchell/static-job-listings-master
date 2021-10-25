import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js'; /* needed? */

export class FilterButton extends LitElement {
  static get properties() {
    return {
      text: { type: String },
      filterType: { type: String }
    };
  }
  static get styles() {
    return [
      resetCSS, /* button only??? */
      css`
        button {
          border-radius: 1.5rem;
          padding: 0.9rem 1rem 0.75rem;
          border-radius: 0.4rem;
          color: var(--color__teal);
          background-color: var(--color__teal--light);
          transition: var(--transition__out);
          border: none;
          font-size: 1.1rem;
          font-weight: 700;
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
  emitFilter( text ) {
    this.dispatchEvent( new CustomEvent( 'emit-filter', {
      composed: true,
      bubbles: true,
      detail: {
        text: text
      }
    } ) );
  }

  render() {
    return html`
      <button @click=${() => this.emitFilter( this.text )}>
        ${this.text}
      </button>
    `;
  }
}


customElements.define( 'filter-button', FilterButton );