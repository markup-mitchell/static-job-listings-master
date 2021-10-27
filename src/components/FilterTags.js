import { LitElement, html, css } from 'lit';

import "./TagDismiss.js";
import "./WrapperCard";

export class FilterTags extends LitElement {
  static get properties() {
    return {
      filterTags: { type: Array }
    };
  }
  static get styles() {
    return css`
        wrapper-card {
          grid-column: 1 / -1;
          grid-row: 1 / span 3;
        }
        article {
          display: grid;
          grid-template-columns: 2.4rem 1fr min-content 2.4rem;
          grid-template-rows: 2.4rem 1fr 2.4rem;
        }
        h1 {
          /* sr-only */
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
        border-width: 0;
      }
      
      .tag-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style: none;
        background-color: var(--color__white);
        gap: 1.5rem;
        grid-column: 2;
        grid-row: 2;
      }

      li {
      display: inline-block;
    }

      button{
        grid-row: 2;
        grid-column: 3;
        white-space: nowrap;
      }

      @media (min-width: 600px){
        article {
        grid-template-columns: 4rem 1fr min-content 4rem;
      }
      }

    `;
  }

  attributeChangedCallback() {
    this.requestUpdate();
  }
  
  render() {
    return html`
    <article>
      <wrapper-card></wrapper-card>
      <ul class="tag-list">
        ${
          this.filterTags.map( tag => html`
          <li>
            <tag-dismiss text=${tag}></tag-dismiss>
          </li>
          `)
        }
      </ul>
      <button>Clear all</button>
  </article>
  `;
  }
}

customElements.define( 'filter-tags', FilterTags );