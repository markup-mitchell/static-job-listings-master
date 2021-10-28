# Frontend Mentor - Job listings with filtering

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Design](#design)
  - [implementation](#implementation)
  - [Continued Development](#continued-development)

## Overview

I chose this challenge because I'm about to start building an internal dashboard tool at work using [Lit](https://lit.dev/) web components and this seemed like it might be good to limber up with.

It doesn't seem to be a particularly popular challenge on FEM, but it's perfect for my current purposes.

There's a very coherent progression over my last few FEM projects:

In [Order Summary](https://markup-mitchell.github.io/frontend-mentor---order-summary/) I practiced my analysis of a design in terms of components in a framework-agnostic way.

[Profile Card](https://markup-mitchell.github.io/fem-profile-card-component/) was my first use of the web components APIs, an exercise in visual acuity and consideration of accessibility and structure.

The [FAQ Component](https://markup-mitchell.github.io/fem-faq/) was an experiment in using CSS grid instead of a flexbox-based approach, and trying for the best UX/no-JS trade-off.

In the current challenge I'm building on the web component angle with Lit and aiming for real state-based UI components for the lowest price of admission.

### Links

- [Solution Repo](https://github.com/markup-mitchell/static-job-listings-master)
- [Live Site](https://festive-ride-8521cc.netlify.app/)

## My process

### Built with

- [Lit 2.0](https://lit.dev/)
- Parcel.js bundler
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### Design

I started out by tweaking the designs in figma because the visual balance was well-off to my eye. The "new" and "featured" pills became peripheral elements on the top right to offset the company logo on the left.

Moving things around in the design file, considering how the data was grouped and spaced, imagining how minimal, optimal and maximal content might need to be accommodated... this process gave me a really strong feel for the card component was going to be structured.

### Implementation

Once I was happy with the design I was aiming for I was pleasantly surprised at how fast I could move and how much I enjoyed the process. Making the card component repsonsive with grid was fun, and I LOVE how grid lets me position design elements like the card without it needing to be a structural element wrapping the actual content.

This is a composition of two discrete elements: an outer card with rounded corners and shadows, and an inner card with a colored border on the left:

```HTML
<div class="card">
  <wrapper-card>
    ${this.featured ? html`
    <wrapper-border />` : null}
  </wrapper-card>
</div>
```

These components can be used separately to contain arbitrary content **or** be composed together - conditional on a data point in this case - to indicate something specific to the context.

[NB - I had a bunch more notes on this challange that seem to have been lost somehow and I can't face recreating them - sorry!]

## Continued Development

There's a whole bunch of little things I could do to polish this thing up to a more "production-ready" level, but TBH I have other things to learn and tech debt I can be paid to fix, so I'm proabably not going to much more. I've learned what I wanted from this exercise and it's time to move on. 

- Deviations from the design are all conscious choices to improve (IMO) the UI visuals or UX
- Tested in chromium, firefox, edge, android clients - all observed issues (eg focus styles in firefox) are classified "won't fix" for the reasons stated above
- Codebase health started well but dropped off towards the end as I hacked around issues to get it over the line. If development was on-going I'd address these incidentally as I worked on features/bugs. 

END
