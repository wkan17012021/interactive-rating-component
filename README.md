# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

It's been a while since I worked on these challenges due to work commitments. It was nice to practice my coding skills from recent work where I haven't been doing that much actual coding. But, it was not nice to see how rusty I have gotten xD

This is the first (or early) challenges requiring JS to present the active states. It certainly was good practice as I have been learning React lately, so there is some vanilla JS I have forgotten. This challenge served to refresh the pure JS skills.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

## My process

Start with the mobile design, add the styling incrementally and iterate as necessary for state changes. Then set variables for dom elements, target with functions and hookup with event listeners. Work back to the desktop design.

### Built with

- Semantic HTML5 markup
- CSS custom properties (for design colors)
- Tailwind CDN 💨
- Mobile-first workflow

### What I learned

- Slowly getting better with Tailwind classes. I used a TW UI comp from their library for the initial markup. This was accessible to me via a work account.
- Improve accuracy of implementing event listeners syntax and improve efficiency of DOM manipulation.

### Continued development

Still rusty with JS fundamentals like writing the syntax for event listeners and manipulating styling. This translated to non-productive time. Some time loss looking up the equivalent TW class for vanilla css styling and then realising some classes were not quite giving the styles compared to the jepg. There are a few non-conformance styling like multiple rating numbers can be selected and highlighted as the active state, that needs improvement as well.

Time:

- 18/04/2022 20:40 - 23:15 (review design, choose TW comp, setup /config / source control for proj, iterating through TW classes for mobile design, amending markup, getting event listeners working and testing)
- 20/04/22 1.5hrs in the evening (initial implementation of active states based on Wes Bos 30 days of JS- proj10 - Hold Shift and Check Checkboxes. Didn't quite work but the setup of the event listeners was appropriate. Proceeded to research different ways of implementing active states)
- 21/04/2022 2.5hrs in the evening (some formatting of styling, then try again to implement active state functionality via SO resources. Finally, copied code from Cordiance's solution)

### Useful resources

- Wes Bos (mentioned above) projects was where I first saw the implementation of multiple event listeners using foreach().
- @cordiance solution: https://www.frontendmentor.io/solutions/interactive-rating-component-B1z82aFXc

## Author

wkan17012021

## Acknowledgments

- cordiance solution was used for: updating the rating that was clicked on and rendering to the thank you page.
