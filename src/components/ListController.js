import { LitElement, html, css } from 'lit';

import data from '../data.json';
import './FilterTags';
import './JobListing.js';

data.forEach( job => {
  job.tags = [];
  job.tags.push( job.role, job.level );
  job.languages.forEach( language => job.tags.push( language ) );
  job.tools.forEach( tool => job.tags.push( tool ) );
} );

export class ListController extends LitElement {
  constructor() {
    super();
    this.filterTags = [];
  }

  static get styles() /* what does static do for me here? required? */ {
    return css`
      main {
        width: 100%;
        min-height: 100vh;
        display: grid;
        grid-template-rows: 2rem 13.6rem 3.2rem 4rem 1fr;
      }
      filter-tags {
        width: 100%;
      }
      .tag-wrapper {
        display: flex;
        align-items: flex-end;
        grid-column: 1;
        grid-row: 2 / span 2;
      }
      .stack {
        grid-row: 5;
        grid-column: 1;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }

      @keyframes fadeIn {
        to {
          opacity: 1;
        }
      }
      @media (min-width: 800px) {
        ul {
          padding: 2rem 4rem;
        }
        .stack {
          gap: 0.8rem;
        }
      }`;
  }

  // The filtering should be done in a controller or something - the StackVertical component should be purely presentational.
  filtered( data ) {
    if ( this.filterTags.length > 0 ) {
      return data.filter( job => this.filterTags.every( tag => job.tags.includes( tag ) ) );
    }
    return data;
  }

  updateFilters( e ) {
    const filterNameEvent = e.detail.text;
    if ( filterNameEvent === "Clear" ) {
      this.filterTags = [];
    } else {

      !this.filterTags.includes( filterNameEvent ) ? this.filterTags = [...this.filterTags, filterNameEvent] : this.filterTags = this.filterTags.filter( term => term !== filterNameEvent );
    }
    this.requestUpdate();
  }

  render() {
    return html`
    <main>
      <div class="tag-wrapper">
        <filter-tags @emit-filter=${( e ) => this.updateFilters( e )}
          .filterTags=${this.filterTags}>
        </filter-tags>
      </div>
    
      <div class="stack" @emit-filter=${( e )=> this.updateFilters( e )}>
        ${this.filtered( data ).map( job => html`
        <job-listing company=${job.company} logo=${job.logo} ?new=${job.new} ?featured=${job.featured}
          position=${job.position} devRole=${job.role} level=${job.level} postedAt=${job.postedAt} contract=${job.contract}
          location=${job.location} .languages=${job.languages} .tools=${job.tools}>
        </job-listing>
        `)
    }
      </div>
    </main>
    `;
  }
}

customElements.define( 'list-controller', ListController );

