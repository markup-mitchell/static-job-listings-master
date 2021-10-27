import { LitElement, html, css } from 'lit';

import './JobListing.js';
import data from '../data.json';
import './TagDismiss.js';

data.forEach(job =>
{
  job.tags = [];
  job.tags.push(job.role, job.level);
  job.languages.forEach(language => job.tags.push(language));
  job.tools.forEach(tool => job.tags.push(tool));
});


export class StackVertical extends LitElement
{
  constructor()
  {
    super();
    this.filterTags = [];
  }

  static get styles() /* what does static do for me here? required? */
  {
    return css`
      ul {
        list-style: none;
        display: flex;
        background-color: var(--color__white);
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
        gap: 1.5rem;
        flex-wrap: wrap;
      }
      .stack {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        /* opacity: 0; */
        /* animation: fadeIn 1s forwards; */
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
    ${ this.filterTags.length > 0 ?
        html`<ul @emit-filter=${ (e) => this.updateFilters(e) }>
      ${ this.filterTags.map(tag => html`
      <li>
        <tag-dismiss text=${ tag }></tag-dismiss>
      </li>
      ` ) }
    </ul>`
        : null
      }
    <div class="stack" @emit-filter=${ (e) => this.updateFilters(e) }>
      ${ this.filtered(data).map(job => html`
      <job-listing company=${ job.company } logo=${ job.logo } ?new=${ job.new } ?featured=${ job.featured } position=${ job.position } role=${ job.role } level=${ job.level } postedAt=${ job.postedAt } contract=${ job.contract }
        location=${ job.location } .languages=${ job.languages } .tools=${ job.tools }>
      </job-listing>
      `)
      }
    </div>
    `;
  }
}

customElements.define('stack-vertical', StackVertical);

