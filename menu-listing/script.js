const btns = document.querySelectorAll('.btn');
const allBtn = document.querySelector('.all');
const lunchBtn = document.querySelector('.lunch');
const breakfastBtn = document.querySelector('.breakfast');
const shakesBtn = document.querySelector('.shakes');
const menuItem = document.querySelector('.menu');
function displayAllMenu() {
  menuItem.innerHTML = '';
  console.log('all btn clicked');
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
}
function displayLunchMenu() {
  menuItem.innerHTML = '';

  console.log('lunch clicked');

  const selectedCategory = 'lunch';
  const filteredItem = menu.filter(function (item) {
    return item.category === selectedCategory;
  });

  for (let i = 0; i < filteredItem.length; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const about = document.createElement('p');
    const price = document.createElement('span');
    img.src = filteredItem[i].image;
    about.textContent = filteredItem[i].description;
    price.textContent = filteredItem[i].price;
    div.appendChild(img);
    div.appendChild(about);
    div.appendChild(price);
    menuItem.appendChild(div);
  }
}
function displayBreakfasthMenu() {
  menuItem.innerHTML = '';

  console.log('breakfast clicked');

  const selectedCategory = 'breakfast';
  const filteredItem = menu.filter(function (item) {
    return item.category === selectedCategory;
  });

  for (let i = 0; i < filteredItem.length; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const about = document.createElement('p');
    const price = document.createElement('span');
    img.src = filteredItem[i].image;
    about.textContent = filteredItem[i].description;
    price.textContent = filteredItem[i].price;
    div.appendChild(img);
    div.appendChild(about);
    div.appendChild(price);
    menuItem.appendChild(div);
  }
}
function displayShakesMenu() {
  menuItem.innerHTML = '';

  console.log('shake clicked');
  const selectedCategory = 'shakes';
  const filteredItem = menu.filter(function (item) {
    return item.category === selectedCategory;
  });

  for (let i = 0; i < filteredItem.length; i++) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const about = document.createElement('p');
    const price = document.createElement('span');
    img.src = filteredItem[i].image;
    about.textContent = filteredItem[i].description;
    price.textContent = filteredItem[i].price;
    div.appendChild(img);
    div.appendChild(about);
    div.appendChild(price);
    menuItem.appendChild(div);
  }
}

btns.forEach((btn) => {
  if (btn.classList.contains('all')) {
    btn.addEventListener('click', displayAllMenu);
  } else if (btn.classList.contains('lunch')) {
    btn.addEventListener('click', displayLunchMenu);
  } else if (btn.classList.contains('breakfast')) {
    btn.addEventListener('click', displayBreakfasthMenu);
  } else if (btn.classList.contains('shakes')) {
    btn.addEventListener('click', displayShakesMenu);
  }
});
