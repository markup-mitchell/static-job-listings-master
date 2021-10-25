import { LitElement, html, css } from 'lit';

import resetCSS from '../js/reset-css.js';
import data from '../data.json';


import './JobListing.js';

export class StackVertical extends LitElement
{
  constructor() {
    super();
    this.filterTerms = ["Frontend"];
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
  filtered(data){
    const jobProperties = [];
    jobProperties.push(job.role,job.level);
    job.languages.forEach(language => jobProperties.push(language));
    job.tools.forEach(tool => jobProperties.push(tool));
    console.log(jobProperties);
    
  }

  updateFilters(e) {
    const filterNameEvent = e.detail.text;
    !this.filterTerms.includes(filterNameEvent) ? this.filterTerms.push(filterNameEvent) : this.filterTerms = this.filterTerms.filter(term => term !== filterNameEvent);
  }

  render()
  {
    return html`  
    <!-- should be li in a ul, probably -->
      <div class="stack" @emit-filter=${(e)=>this.updateFilters(e)}>
        ${
          data.map((job) => html`
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

