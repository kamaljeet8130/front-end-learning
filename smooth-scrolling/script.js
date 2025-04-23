// date setup
const date = document.querySelector('.date');
const dateObject = new Date();
date.textContent = dateObject.getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

//dynamic navToggling by using getBoundingClientRect();
navToggle.addEventListener('click', function () {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollHeight = this.window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
