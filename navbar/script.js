const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
let isNav = true;

function toggleFunctionality() {
  if (isNav) {
    links.classList.add('remove-links');
    links.classList.remove('show-links');
    isNav = false;
  } else {
    links.classList.remove('remove-links');
    links.classList.add('show-links');
    isNav = true;
  }
}

navToggle.addEventListener('click', toggleFunctionality);
