import { LitElement, html, css } from 'lit';
import resetCSS from '../js/reset-css.js';

export class JobListing extends LitElement
{
  static get properties()
  {
    return { img: { type: String } };
  }
  static get styles()
  {
    return [
      resetCSS,
      css`

        .layout {
          display: grid;
          grid-template-columns: 2.4rem 4.8rem 1fr 1.6rem 0.8rem ;
          grid-template-rows: 2.4rem 2.4rem max-content max-content;
        }

        .job__title {
          color: var(--color__black);
          margin-top: 0.8rem;
          margin-bottom: 0.8rem;
        }

        .logo {
          grid-column: 2;
          grid-row: 1/span 2;
        }
        .card {
          grid-column: 1 / -1;
          grid-row: 2 / -1;
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15), 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
          background-color: var(--color__white);
        }
        .card__inner {
          padding: 2.4rem;
          font-size: 1.3rem;
          height: 100%;
          border-left: 0.5rem solid var(--color__teal);
        }
        .job {
          line-height: 2.4rem;
          grid-column: 2 / span 2;
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

        .flex {
          display: flex;
        }
        .flex-col-reverse {
          flex-direction: column-reverse;
        }

        .bullet {
          margin-left: 0.8rem;
          margin-right: 0.8rem;
        }

        .pills {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          grid-column: 3/ span 2;
          grid-row: 1/ span 2;
          gap: 1.2rem;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem;
          grid-column: 2 /span 2;
          grid-row: 4;
          padding-top: 1.6rem;
          padding-bottom: 1.6rem;
        }

        .pill,
        .tag {
          display: inline-flex;
          height: 2.4rem;
          align-items: center;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 1.5rem;
          padding: 0 1rem;
        }

        .tag {
          border-radius: 0.4rem;
          background-color: var(--color__teal--light);
        }

        .tag > span {
          color: var(--color__teal);
          margin-bottom: -2px;
        }

        /* this is necessary to get center alignment on Chrome and FF */
        .pill > span {
          color: var(--color__white);
          margin-bottom: -2px;
        }

        .pill--light {
          background-color: var(--color__teal);
        }
        .pill--dark {
          background-color: var(--color__black);
        }
      `
    ];
  }

  constructor()
  {
    super();
  }

  render()
  {
    return html`
      <div class="layout">
        <div class="card">
          <div class="card__inner"></div>
        </div>
        <div class="job">
          <div class="flex flex-col-reverse">
            <h1 class="job__title">Senior Frontend Developer</h1>
            <h2 class="job__company">Photosnap</h2>
          </div>
          <div class="job__details">
            <span>1d ago</span>
            <span class="bullet">&#8226</span>
            <span>Full Time</span>
            <span class="bullet">&#8226</span>
            <span>USA only</span>
          </div>
        </div>
        <div class="tags">
          <div class="tag"><span>Frontend</span></div>
          <div class="tag"><span>Senior</span></div>
          <div class="tag"><span>HTML</span></div>
          <div class="tag"><span>CSS</span></div>
          <div class="tag"><span>JavaScript</span></div>
        </div>
        <div class="pills">
          <div class="pill pill--light"><span>NEW!</span></div>
          <div class="pill pill--dark"><span>FEATURED</span></div>
        </div>
        <img class="logo" src="./images/photosnap.svg" alt="" />
      </div>
    `;
  }
}

customElements.define('job-listing', JobListing);