const barButton = document.getElementById('bar-btn');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.nav-link');
let menuOpen = false;

// Toggle function
barButton.addEventListener('click', () => {
  menuOpen = !menuOpen;

  // Toggle icon
  barButton.innerHTML = menuOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';

  // Toggle nav visibility
  if (menuOpen) {
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('flex');
  } else {
    mobileNav.classList.remove('flex');
    mobileNav.classList.add('hidden');
  }
});

// Auto-close nav on link click (mobile only)
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      mobileNav.classList.remove('flex');
      mobileNav.classList.add('hidden');
      barButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
      menuOpen = false;
    }
  });
});
