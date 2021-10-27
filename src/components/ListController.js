import { LitElement, html, css } from 'lit';

import './JobListing.js';
import data from '../data.json';
import './TagDismiss.js';
import './FilterTags';

data.forEach( job => {
  job.tags = [];
  job.tags.push( job.role, job.level );
  job.languages.forEach( language => job.tags.push( language ) );
  job.tools.forEach( tool => job.tags.push( tool ) );
} );


export class StackVertical extends LitElement {
  constructor() {
    super();
    this.filterTags = [];
  }

  static get styles() /* what does static do for me here? required? */ {
    return css`
      .stack {
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
    !this.filterTags.includes( filterNameEvent ) ? this.filterTags = [...this.filterTags, filterNameEvent] : this.filterTags = this.filterTags.filter( term => term !== filterNameEvent );
    this.requestUpdate();
  }

  render() {
    return html`
    <filter-tags
      @emit-filter=${( e ) => this.updateFilters( e )}
      .filterTags=${this.filterTags}>
    </filter-tags>

    <div class="stack" @emit-filter=${( e )=> this.updateFilters( e )}>
      ${this.filtered( data ).map( job => html`
      <job-listing company=${job.company} logo=${job.logo} ?new=${job.new} ?featured=${job.featured} position=${
       job.position} role=${job.role} level=${job.level} postedAt=${job.postedAt} contract=${job.contract}
        location=${job.location} .languages=${job.languages} .tools=${job.tools}>
      </job-listing>
      `)
      }
    </div>
    `;
  }
}

customElements.define( 'stack-vertical', StackVertical );

