const randomDayContainer = document.querySelector('.random-day');
const randomDateContainer = document.querySelector('.random-date');
const randomMonthContainer = document.querySelector('.random-month');
const randomYearContainer = document.querySelector('.random-year');

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

const randomDate = Math.floor(Math.random() * 31) + 1;
randomDateContainer.textContent = randomDate;

const randomMonth = Math.floor(Math.random() * 12);
randomMonthContainer.textContent = monthName[randomMonth];

const randomYear =
  Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
randomYearContainer.textContent = randomYear;

const date = new Date(randomYear, randomMonth, randomDate);
const day = date.getDay();
const randomDay = dayName[day];
randomDayContainer.textContent = randomDay;
