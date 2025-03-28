const btns = document.querySelectorAll('.btn');
const counterValue = document.querySelector('.counter-value');

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let count = Number(counterValue.textContent);

    if (event.currentTarget.classList.contains('reset')) {
      count = 0;
    } else if (event.currentTarget.classList.contains('decrease')) {
      count--;
    } else if (event.currentTarget.classList.contains('increase')) {
      count++;
    }
    counterValue.textContent = count;

    counterValue.classList.remove('decrease', 'increase', 'reset');

    if (count > 0) {
      counterValue.classList.add('increase');
    } else if (count < 0) {
      counterValue.classList.add('decrease');
    } else {
      counterValue.classList.add('reset');
    }
  });
});
