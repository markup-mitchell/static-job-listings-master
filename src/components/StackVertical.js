import { LitElement, html, css } from 'lit';

import resetCSS from '../js/reset-css.js';
import data from '../data.json';


import './JobListing.js';

export class StackVertical extends LitElement
{
  constructor() {
    super();
    this.filters = {
      role: "",
      level: "",
      languages: [],
      tools: []
    };

  }

  static get styles() /* what does static do for me here? required? */
  {
    return [
      resetCSS,
      css`
      .stack {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
      }
      @media (min-width: 800px) {
        .stack {
          gap: 0.8rem;
        }
      }`
    ];
  }


  // The filtering should be done in a controller or something - the StackVertical component should be purely presentational.
  _filteredData(){
    // if any filter is applied only jobs matching that condition are returned
    // if multiple filters are applied only jobs matching all conditions are returned.

    const results =  data.filter(job => {
      return (this.filters.role.length === 0 || this.filters.role === job.role) && (this.filters.level.length === 0  || this.filters.level === job.level)
      && (this.filters.languages.length === 0 || this.filters.languages.every(language => job.languages.includes(language)))
      && (this.filters.tools.length === 0 || this.filters.tools.every(tool => job.tools.includes(tool)))
    });
    console.log(`${results.length} listings found`)
    return results;
  }

  updateFilters(e) {

    if (e.detail.filterType === "role") {
      this.filters = {...this.filters, role: e.detail.text
      }
    }
    if (e.detail.filterType === "level") {
      this.filters = {...this.filters, level: e.detail.text
      }
    }
    if (e.detail.filterType === "language") {
      this.filters.languages = [...this.filters.languages, e.detail.text]
    }
    this.requestUpdate(); /* do I need to so this??!!*/
    console.log(this.filters)
  }

  render()
  {
    return html`
    <!-- should be li in a ul, probably -->
      <ul>
        ${this.filters.tools.map(tool => html`<li>${tool}</li>`)}
      </ul>
      <div class="stack" @announce-filter=${(e)=>this.updateFilters(e)}>
        ${
          this._filteredData().map((job) => html`
          <job-listing
            company=${job.company}
            logo=${job.logo}
            ?new=${job.new}
            ?featured=${job.featured}
            position=${job.position}
            role=${job.role}
            level=${job.level}
            postedAt=${job.postedAt}
            contract=${job.contract}
            location=${job.location}
            .languages=${job.languages}
            .tools=${job.tools}>
          </job-listing>
          `)
        }
      </div>
    `;
  }
}

customElements.define('stack-vertical', StackVertical);

