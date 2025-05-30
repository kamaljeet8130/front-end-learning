const barButton = document.getElementById('bar-btn');
const mobileNav = document.getElementById('mobile-nav');
const navLinks = document.querySelectorAll('.nav-link');
const tile = document.querySelector('.tile');
const tile2 = document.querySelector('.tile2');
const companies = [
  {
    img: '../assets/asset 3.png',
    name: 'apple',
  },
  {
    img: '../assets/asset 4.png',
    name: 'LifeAt',
  },
  {
    img: '../assets/asset 5.png',
    name: 'MOrgen',
  },
  {
    img: '../assets/asset 6.png',
    name: 'Campsite',
  },
  {
    img: '../assets/asset 7.png',
    name: 'Rise',
  },
  {
    img: '../assets/asset 8.png',
    name: 'ClickUp',
  },
  {
    img: '../assets/asset 9.png',
    name: 'Notion',
  },
  {
    img: '../assets/asset 10.png',
    name: 'Sunsama',
  },
  {
    img: '../assets/asset 11.png',
    name: 'Beeper',
  },
  {
    img: '../assets/asset 12.png',
    name: 'Cal',
  },
  {
    img: '../assets/asset 13.png',
    name: 'WebHook',
  },
  {
    img: '../assets/asset 14.png',
    name: 'Unbounce1 ',
  },
  {
    img: '../assets/asset 15.png',
    name: 'Moises',
  },
];

let content = '';

companies.forEach((item) => {
  content += `
   <div class="flex flex-col items-center border rounded-2xl min-w-30 bg-gradient-to-bl bg-gray-200 transition-transform ease-linear"">
      <img src="${item.img}" alt="${item.name}" class="h-24 w-20 object-contain ">
      <p class="text-xl font-medium">${item.name}</p>
    </div>
  `;
});

const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;
function setupIntersectionObserver(element, isLTR, speed) {
  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener('scroll', scrollHandler);
    } else {
      document.removeEventListener('scroll', scrollHandler);
    }
  };
  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);
  function scrollHandler() {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}
setupIntersectionObserver(tile, true, 0.09);
setupIntersectionObserver(tile2, true, 0.15);
tile.innerHTML = content;
tile2.innerHTML = content;
