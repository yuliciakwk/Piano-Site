/* =========================================================
   Jasmine Wong Piano Studio: scripts

   This file is loaded with "defer", so it runs after the HTML has
   been read and every element below already exists.
   ========================================================= */


/* ---------- 1. Mobile menu toggle ----------
   JavaScript only changes the button's aria-expanded attribute
   ("true" or "false"). The CSS reads that attribute to show or hide
   the menu, and screen readers read it to announce "expanded" or
   "collapsed". One attribute keeps the visuals and the accessibility
   in sync. */
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('#nav-list');

// Attributes are always strings, so check against 'true', not true
function isMenuOpen() {
  return navToggle.getAttribute('aria-expanded') === 'true';
}

function setMenuOpen(open) {
  navToggle.setAttribute('aria-expanded', String(open));
}

// Clicking the button flips the menu between open and closed
navToggle.addEventListener('click', () => {
  setMenuOpen(!isMenuOpen());
});

// Close the menu once a link is chosen, so it doesn't cover the section.
// One listener on the list handles all six links ("event delegation").
navList.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    setMenuOpen(false);
  }
});

// The Escape key closes the menu and puts keyboard focus back on the
// button, so keyboard users aren't left stranded inside a hidden menu
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isMenuOpen()) {
    setMenuOpen(false);
    navToggle.focus();
  }
});


/* ---------- 2. FAQ accordion ----------
   Same idea as the menu: each question button flips its own
   aria-expanded, and the CSS opens or closes the answer to match.
   Several answers can be open at once, so visitors can compare them. */
const faqQuestions = document.querySelectorAll('.faq-question');

// querySelectorAll returns a list; forEach runs the function once for
// each button (like "for button in faq_questions:" in Python)
faqQuestions.forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
  });
});


/* ---------- 3. Scroll-reveal animations ----------
   An IntersectionObserver tells us when an element enters the screen.
   That is much more efficient than checking every element's position
   on every scroll event. When one appears, we add .is-visible and the
   CSS plays the animation. */

// matchMedia checks a CSS media query from JavaScript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Only set this up if motion is welcome and the browser supports
// IntersectionObserver ("feature detection"). Otherwise nothing is hidden.
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  // Everything directly inside each section except the hero, which has
  // its own entrance. The lesson grid is swapped for its three cards,
  // so the cards can arrive one after another.
  const revealTargets = document.querySelectorAll(
    'main section:not(#hero) > :not(.lesson-grid), .lesson-card'
  );

  // The observer calls this function with a list of "entries": one for
  // each watched element that has crossed into or out of view
  const revealObserver = new IntersectionObserver((entries, observer) => {
    let staggerIndex = 0;

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;                  // not on screen yet: skip it (like "continue" in Python)
      }

      // Items arriving together each start 120ms after the one before.
      // `${...}` inserts a value into a string, like an f-string in Python.
      entry.target.style.setProperty('--reveal-delay', `${staggerIndex * 120}ms`);
      entry.target.classList.add('is-visible');

      // Each element only animates once, so stop watching it
      observer.unobserve(entry.target);
      staggerIndex += 1;
    });
  }, {
    // Shrink the "screen" by 10% at the bottom, so elements start
    // revealing once they are slightly into view, not right at the edge
    rootMargin: '0px 0px -10% 0px'
  });

  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
}
