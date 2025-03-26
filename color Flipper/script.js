const min = 1048576;
const max = 16777215;
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

const btn = document.querySelector('.btn');
const spanText = document.getElementById('hex-text');
const logo = document.querySelector('.logo');
console.log(spanText);
btn.addEventListener('click', function changeBodyBackgroundColor() {
  const randomNumber = getRandomNumber(min, max);
  const hexDecimalNumber = hexDecimalGenerator(randomNumber);
  document.body.style.background = `#${hexDecimalNumber}`;
  spanText.textContent = `#${hexDecimalNumber}`;
  spanText.style.color = `#${hexDecimalNumber}`;
  logo.style.color = `#${hexDecimalNumber}`;
});
