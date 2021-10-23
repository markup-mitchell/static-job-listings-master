import { LitElement, html, css } from 'lit';

import resetCSS from '../js/reset-css.js';
import data from '../data.json';

import './JobListing.js';

export class StackVertical extends LitElement
{
  static get styles()
  {
    return [
      resetCSS,
      css`
      .stack {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        padding: 0 2.4rem;
      }
      `];
  }
  render()
  {
    return html`
      <div class="stack">
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

