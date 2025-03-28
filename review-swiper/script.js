const swiper = document.querySelector('.swiper');
const img = document.querySelector('.img');
const name = document.querySelector('.name');
const role = document.querySelector('.role');
const about = document.querySelector('.about');

let i = 0;
const updatePerson = () => {
  img.style.backgroundImage = `url(${persons[i].img})`;
  name.textContent = persons[i].name;
  role.textContent = persons[i].role;
  about.textContent = persons[i].content;
};

swiper.addEventListener('click', (event) => {
  if (event.target.classList.contains('swipe-right')) {
    i = (i + 1) % persons.length;
  }

  if (event.target.classList.contains('swipe-left')) {
    i = (i - 1 + persons.length) % persons.length;
  }

  updatePerson();
});
