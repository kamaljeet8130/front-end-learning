const btns = document.querySelectorAll('.btn');
const counterValue = document.querySelector('.counter-value');

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    let count = Number(counterValue.textContent);
    if (event.currentTarget.classList.contains('reset')) {
      count = 0;
      counterValue.classList.remove('decrease', 'increase');
      counterValue.textContent = count;
    } else if (event.currentTarget.classList.contains('decrease')) {
      count -= 1;
      counterValue.textContent = count;
      if (count < 0) {
        counterValue.classList.add('decrease');
      }
    } else if (event.currentTarget.classList.contains('increase')) {
      count += 1;
      counterValue.textContent = count;
      if (count > 0) {
        counterValue.classList.add('increase');
      }
    }
  });
});
