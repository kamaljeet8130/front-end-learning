const allBtn = document.querySelector('.all');
const menuItem = document.querySelector('.menu');

function displayAllMenu() {
  for (let i = 0; i < menu.length; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const about = document.createElement('p');
    const price = document.createElement('span');
    img.src = menu[i].image;
    about.textContent = menu[i].description;
    price.textContent = menu[i].price;
    div.appendChild(img);
    div.appendChild(about);
    div.appendChild(price);
    menuItem.appendChild(div);
  }

  console.log(document.body);
}

allBtn.addEventListener('click', displayAllMenu);
