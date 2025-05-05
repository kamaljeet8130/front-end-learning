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
const maxYear = 2025;

const randomDate = Math.floor(Math.random() * 31) + 1;
randomDateContainer.textContent = randomDate;

const randomMonth = Math.floor(Math.random() * 12);
randomMonthContainer.textContent = monthName[randomMonth];

const randomYear =
  Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
randomYearContainer.textContent = randomYear;

const futureDate = new Date(randomYear, randomMonth, randomDate);
const day = futureDate.getDay();
const randomDay = dayName[day];
randomDayContainer.textContent = randomDay;

const remainingDayContainer = document.querySelector('.remaining-day');
const remainingHourContainer = document.querySelector('.remaining-hours');
const remainingMinContainer = document.querySelector('.remaining-min');
const remainingSecContainer = document.querySelector('.remaining-sec');

function updateRemainingTime() {
  const currentDate = new Date();
  const diff = futureDate - currentDate;
  if (diff <= 0) {
    console.log('Time is up!!');
  }
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const days = Math.floor(totalSeconds / (3600 * 24));

  remainingDayContainer.textContent = days;
  remainingHourContainer.textContent = hours;
  remainingMinContainer.textContent = minutes;
  remainingSecContainer.textContent = seconds;
}

setInterval(updateRemainingTime, 1000);
