import { LitElement, html, css } from 'lit';

import './WrapperCard.js';
import './WrapperBorder.js';
import './WrapperPill.js';
import './TagToggle';

export class JobListing extends LitElement
{
  static get properties()
  {
    return {
      company: { type: String },
      logo: { type: String },
      new: { type: Boolean },
      featured: { type: Boolean },
      position: { type: String },
      role: { type: String },
      level: { type: String },
      postedAt: { type: String },
      contract: { type: String },
      location: { type: String },
      languages: { type: Array },
      tools: { type: Array }
    };
  }
  static get styles()
  {
    return css`
        * {
          border: 0;
          margin: 0;
        }
        .layout {
          display: grid;
          grid-template-columns: 2.4rem max-content 3.2rem max-content 1fr 1.6rem 0.8rem;
          grid-template-rows: 2.4rem 2.4rem max-content max-content 2.4rem;
          opacity: 0;
          }

        .job__title {
          color: var(--color__black);
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
        }

        .logo {
          grid-column: 2;
          grid-row: 1 / span 2;
          min-width: 48px;
          max-width: 48px;
        }

        .card {
          grid-column: 1 / -1;
          grid-row: 2 / -1;
        }

        .job {
          line-height: 2.4rem;
          grid-column: 2 / span 3 ;
          grid-row: 3;
          padding-top: 0.8rem;
          padding-bottom: 1.6rem;
          border-bottom: 1px solid var(--color__grey--light);
        }
        .job__company {
          color: var(--color__teal);
          font-weight: 700;
          font-size: 1.3rem;
        }

        .job__title {
          color: var(--color__black);
          font-weight: 700;
          font-size: 1.5rem;
        }

        .job__details {
          color: var(--color__grey);
          font-weight: 500;
          font-size: 1.3rem;
        }

        .job__details p {
          display: inline-block;
        }

        .flex-col-reverse {
          display: flex;
          flex-direction: column-reverse;
        }

        .bullet {
          margin-left: 0.8rem;
          margin-right: 0.8rem;
        }

        .listing-status {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          grid-column: 4/ span 3;
          grid-row: 1/ span 2;
          gap: 1.2rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem;
          grid-column: 2 / -3;
          grid-row: 4;
          padding-top: 1.6rem;
        }

        @media (min-width: 600px) {
          .tags {
            grid-column: 5 / -3;
            grid-row: 3 / 3;
            justify-content: flex-end;
            align-self: center;
          }
          .job {
            padding-bottom: 0;
            border: 0;
          }
        }

        @media (min-width: 800px) {
          .layout {
            grid-template-columns: 4rem max-content 2.4rem max-content 1fr 1.6rem 2.4rem;
          }
          .logo {
            grid-column: 2;
            grid-row: 3;
            max-width: 88px;
          }
          .card {
            grid-column: 1 / -1;
            grid-row: 2 / -1;
          }

          .listing-status {
            grid-area: 1/5/span 2/span 2;
          }

          .job {
            grid-column: 4 / span 1;
            grid-row: 3 / span 1;
            padding: 0;
            border: 0;
          }
          .job__company {
            font-size: 1.4rem;
          }
          .job__title {
            font-size: 1.8rem;
          }
          .job__details {
            font-size: 1.5rem;
          }
        }

        .fade-in {
          animation: fade 1s forwards;
        }

        .fade-out {
          animation: fade 1s backwards;
        }
        @keyframes fade {
          to {
            opacity: 1;
          }
        }
      `;
  }

  firstUpdated()
  {
    const el = this.shadowRoot.querySelector(".layout");
    el.classList.add("fade-in");
  }

  disconnectedCallback()
  {
    const el = this.shadowRoot.querySelector(".layout");
    el.classList.remove("fade-in");
    el.classList.add("fade-out");
  }

  render()
  {
    return html`
      <article class="layout">
        <div class="card">
          <wrapper-card>
            <!-- this self-closing tag shouldn't work - but it does! -->
            ${ this.featured ? html`
            <wrapper-border />` : null }
          </wrapper-card>
        </div>

        <section class="job">
          <div class="flex-col-reverse">
            <h1 class="job__title">${ this.position }</h1>
            <p class="job__company">${ this.company }</p>
          </div>
          <div class="job__details">
            <p>${ this.postedAt }</p>
            <span class="bullet">&#8226</span>
            <p>${ this.contract }</p>
            <span class="bullet">&#8226</span>
            <p>${ this.location }</p>
          </div>
        </section>
        <div class="tags">
          <tag-toggle text=${ this.role } filterType="role"></tag-toggle>
          <tag-toggle text=${ this.level } filterType="level"></tag-toggle>
          ${ this.languages.map(lang => html`
          <tag-toggle text=${ lang } filterType="language"></tag-toggle>
          `) }
          ${ this.tools.map(tool => html`
          <tag-toggle text=${ tool } filterType="tool"></tag-toggle>
          `) }
        </div>
        <!--Only include aside if listing is featured | new -->
        ${ (this.featured || this.new) ? html`
        <aside class="listing-status">
          ${ this.new ? html`
          <wrapper-pill color="light">
            <p>New!</p>
          </wrapper-pill>` : null
        }
          ${ this.featured ? html`
          <wrapper-pill color="dark">
            <p>Featured</p>
          </wrapper-pill>
          ` : null }
        </aside>
        ` : null
      }
        <img class="logo" src=${ this.logo } alt="" />
      </article>
  `;
  }
}

customElements.define('job-listing', JobListing);