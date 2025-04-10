const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const subContainer = document.querySelector('.sub-container');

function addContainerToBody() {
  const container1 = document.createElement('div');
  container1.innerHTML = `
  <button class ="close btn">
  <i class="fa fa-window-close" aria-hidden="true"></i>
  </button>
  `;
  container1.classList.add('container1');
  subContainer.appendChild(container1);
  const closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', (event) => {
    console.log(event.target);
  });
}

function doSomething() {
  addContainerToBody();
}

btn.addEventListener('click', doSomething);
