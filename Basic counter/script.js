const counter = document.querySelector('.counter');
const addBtn = document.querySelector('.increase');
const minuBtn = document.querySelector('.decrease');

let value = Number(counter.textContent);
addBtn.addEventListener('click', function () {
  if (value == 100) {
    alert('Opps Can not Increase more Than 100');
  } else {
    value++;
    const increaseValue = document.createTextNode(value);
    counter.replaceChildren(increaseValue);
  }
});
minuBtn.addEventListener('click', function () {
  if (value == 0) {
    alert('Opps Can not decrease more Than 100');
  } else {
    value--;
    const increaseValue = document.createTextNode(value);
    counter.replaceChildren(increaseValue);
  }
});
