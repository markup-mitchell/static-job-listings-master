import { LitElement, html, css } from 'lit';
export class TagDismiss extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    };
  }
  static get styles() {
    return css`
      button {
        display: inline-flex;
        overflow: hidden;
        align-items: center;
        border-radius: 1.5rem;
        
        padding: 0;
        border-radius: 0.4rem;
        color: var(--color__teal);
        background-color: var(--color__teal--light);
        transition: var(--transition__out);
        border: none;
        font-size: 1.1rem;
        font-weight: 700;
        cursor: pointer;
      }

      span {
        pointer-events: none;
        line-height: 1;
        padding: 0 0.8rem; 
      }
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.2rem;
        height: 3.2rem;
        background: var(--color__teal);
        transition: var(--transition__in);
      }
      
      button:hover div,
      button:focus-visible div  {
        background-color: var(--color__black);
        transition: var(--transition__out);
        outline-color: var(--color__teal);
          outline-offset: 4px;
      }

      button:focus-visible {
        outline-color: var(--color__black);
        outline-offset: 4px;
      }

      svg {
        width: 1.4rem;
        height: 1.4rem;
      }

     path {
        fill: var(--color__white);
      }

      @media (min-width: 1024px) {
        div {
          font-size: 1.3rem;
        }
      }
    `;
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
      <button @click=${()=> this.emitFilter( this.text )}>
        <span>
          ${this.text}
        </span>
        <div> <svg xmlns="http://www.w3.org/2000/svg">
            <path class="dismiss-icon"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" />
          </svg>
        </div>
      </button>
    `;
  }
}


customElements.define( 'tag-dismiss', TagDismiss );