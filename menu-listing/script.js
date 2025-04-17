const btns = document.querySelectorAll('.btn');
const menuItem = document.querySelector('.menu');

function renderMenuItems(items) {
  menuItem.innerHTML = '';
  items.forEach((item) => {
    const div = document.createElement('div');
    div.classList.add('menu-item');

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('item-img');

    const img = document.createElement('img');
    img.src = item.image;
    img.classList.add('img');

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const price = document.createElement('span');
    price.textContent = item.price;

    const about = document.createElement('p');
    about.textContent = item.description;

    imgDiv.appendChild(img);
    descriptionDiv.appendChild(price);
    descriptionDiv.appendChild(about);

    div.appendChild(imgDiv);
    div.appendChild(descriptionDiv);
    menuItem.appendChild(div);
  });
}

function handleFilter(category) {
  console.log(`${category} clicked`);
  if (category === 'all') {
    renderMenuItems(menu);
  } else {
    const filteredItems = menu.filter((item) => item.category === category);
    renderMenuItems(filteredItems);
  }
}

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const category = btn.classList[1];
    handleFilter(category);
  });
});
