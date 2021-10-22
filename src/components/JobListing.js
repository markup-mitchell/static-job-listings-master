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
        h1 {
          color: var(--color__black);
        }
        .card {
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15), 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
        }
        .card__inner {
          padding: 2.4rem;
          height: 100%;
          border-left: 0.5rem solid var(--color__teal);
        }

        .flex {
          display: flex;
        }
        .flex-col-reverse {
          flex-direction: column-reverse;
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
<div class="card">

  <div class="card__inner">
    <article class="listing">
      <img class="listing__logo" src="./images/photosnap.svg" alt="" />
      <div class="flex flex-col-reverse">
        <h1>Senior Frontend Developer</h1>
        <h2>Photosnap</h2>
      </div>
      <div class="listing__details">
        <span>1d ago</span>
        <span>&#8226</span>
        <span>Full Time</span>
        <span>&#8226</span>
        <span>USA only</span>
      </div>
    </article>
  </div>
</div>
    `;
  }
}

customElements.define('job-listing', JobListing);