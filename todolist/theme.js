const btn = document.createElement('button');
const btnText = document.createTextNode(' Theme Changer');
btn.appendChild(btnText);
document.body.insertBefore(btn, container);
btn.classList.add('theme-btn');
// console.log(document.body);

const min = 1048576;
const max = 16777215;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + 1);
}

function hexDecimalGenerator(number) {
  let result = '';
  const hexChars = '0123456789ABCDEF';
  while (number !== 0) {
    let digit = number % 16;
    result = hexChars[digit] + result;
    number = Math.floor(number / 16);
  }
  return result;
}

btn.addEventListener('click', function changeBodyBackgroundColor() {
  const randomNumber = getRandomNumber(min, max);
  const hexDecimalNumber = hexDecimalGenerator(randomNumber);

  btn.style.color = 'aliceblue';
  if (hexDecimalNumber === 'ffffff') {
    btn.style.color = 'black';
    btn.style.color = 'black';
  }
  document.body.style.background = `#${hexDecimalNumber}`;
});
