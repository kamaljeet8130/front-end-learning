const dayContainer = document.querySelector('.day');
const dateContainer = document.querySelector('.date');
const monthContainer = document.querySelector('.month');
const yearContainer = document.querySelector('.year');

const dayName = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const monthName = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const minYear = 2025;
const maxYear = 2030;

const randomDate = Math.floor(Math.random() * 31);
dateContainer.textContent = randomDate;

const randomMonth = Math.floor(Math.random() * 12);
monthContainer.textContent = monthName[randomMonth];

const randomYear =
  Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
yearContainer.textContent = randomYear;

const date = new Date(randomYear, randomMonth, randomDate);
const day = date.getDay();
const randomDay = dayName[day];
dayContainer.textContent = randomDay;
