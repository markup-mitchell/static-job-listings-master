import { LitElement, html, css } from 'lit';

import resetCSS from '../js/reset-css.js';
import data from '../data.json';

data.forEach(job =>
{
  job.tags = [];
  job.tags.push(job.role, job.level);
  job.languages.forEach(language => job.tags.push(language));
  job.tools.forEach(tool => job.tags.push(tool));
});

import './JobListing.js';

export class StackVertical extends LitElement
{
  constructor()
  {
    super();
    this.filterTags = [];
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
  filtered(data)
  {
    if (this.filterTags.length > 0) {
      return data.filter(job => this.filterTags.every(tag => job.tags.includes(tag)));
    }
    return data;
  }

  updateFilters(e)
  {
    const filterNameEvent = e.detail.text;
    !this.filterTags.includes(filterNameEvent) ? this.filterTags.push(filterNameEvent) : this.filterTags = this.filterTags.filter(term => term !== filterNameEvent);
    this.requestUpdate();
  }

  render()
  {
    return html`
    <!-- should be li in a ul, probably -->
      <ul>
        ${ this.filterTags.map(tag => html`<filter-button text=${ tag }>`) }
      </ul>
      <div class="stack" @emit-filter=${ (e) => this.updateFilters(e) }>
        ${ this.filtered(data).map(job => html`
          <job-listing
            company=${ job.company }
            logo=${ job.logo }
            ?new=${ job.new }
            ?featured=${ job.featured }
            position=${ job.position }
            role=${ job.role }
            level=${ job.level }
            postedAt=${ job.postedAt }
            contract=${ job.contract }
            location=${ job.location }
            .languages=${ job.languages }
            .tools=${ job.tools }>
          </job-listing>
          `)
      }
      </div>
    `;
  }
}

customElements.define('stack-vertical', StackVertical);

