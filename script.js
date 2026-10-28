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
