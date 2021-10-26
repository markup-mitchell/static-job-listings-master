# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

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

Once I was happy with the deisgn I was aiming for I was pleasantly surprised at how fast I could move and how much I enjoyed the process. Making the card component repsonsive with grid was fun, and I LOVE how grid lets me position design elements like the card without it needing to be a structural element wrapping the actual content.

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

And

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
