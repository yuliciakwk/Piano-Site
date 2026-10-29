# Jasmine Wong Piano Studio

A responsive, accessible one-page website for my mom's private piano teaching studio, inspired by the look and feel of a classical concert programme.

**Live site:** https://yuliciakwk.github.io/Piano-Site/

## Features

- **Responsive design:** works on phone, tablet and desktop
- **Mobile navigation menu:** a hamburger menu toggle for small screens
- **FAQ accordion:** questions expand and collapse on click or keyboard
- **Scroll-triggered animations:** sections fade in as you scroll, using the Intersection Observer API
- **Reduced motion support:** animations are turned off for visitors who set `prefers-reduced-motion`
- **Accessible:** semantic HTML, a logical heading order, alt text, visible keyboard focus states and good colour contrast
- **Fast:** compressed images and no frameworks; scores 99–100 in all four Lighthouse categories
- **Multilingual contact options:** email, WhatsApp and WeChat for the studio's Chinese-speaking families

## Built with

- HTML
- CSS (Flexbox, Grid, media queries, CSS animations)
- Vanilla JavaScript
- Git and GitHub Pages

## Project structure

```
Piano-Site/
├── index.html   # page content and structure
├── style.css    # all styling and animations
├── script.js    # mobile menu, FAQ accordion, scroll animations
└── images/      # compressed WebP photos and the WeChat QR code
```

## Run it locally

1. Clone the repository:
   ```
   git clone https://github.com/yuliciakwk/Piano-Site.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**, or just open `index.html` in a browser.

## Updating the site

- **Text** (bio, lessons, pricing, FAQ, contact) lives in `index.html`, with each section marked by an `id` (`#about`, `#lessons`, `#faq`, `#contact`).
- **Colours and fonts** are set in `style.css`.
- **New photos:** compress them first (for example with [Squoosh](https://squoosh.app)), save them to `images/` as WebP, and always add alt text.
- **Publishing:** push to the `main` branch and GitHub Pages updates the live site automatically within a minute or two.

## About

Built by [Yulicia Kwok](https://github.com/yuliciakwk), a first-year Business and Computer Science student at UBC, for her mom, a classically trained pianist and piano teacher.
