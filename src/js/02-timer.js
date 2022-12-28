import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

//getting refers for button "Start" and timeValue
const refs = {
  startBtn: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

let IntervalId = null;
refs.startBtn.disabled = true;

const options = flatpickr('#datetime-picker', {
  enableTime: true, //Enables or disables time selection
  time_24hr: true, //24 hour time selection
  defaultDate: new Date(), // Date Preload
  minuteIncrement: 1, //Increasing the minutes (value)
  onClose(selectedDates) {
    onDateSelection(selectedDates);
  },
});

function onDateSelection(selectedDates) {
  if (selectedDates[0].getTime() < Date.now()) {//selectedDates[0] - time set by the user
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  } else {
    refs.startBtn.disabled = false;
    refs.startBtn.style.cursor = 'pointer';
    Notiflix.Notify.success('Time period is correct');
    refs.startBtn.addEventListener('click', () => {
      refs.startBtn.disabled = true;
      refs.startBtn.style.cursor = 'default';
      //Starting the time counter with an interval of 1 second
      IntervalId = setInterval(() => {
        if (selectedDates[0].getTime() - Date.now() < 1000) {
          clearInterval(IntervalId);
          Notiflix.Notify.warning('The countdown is over!');
        }
        let currentTime = convertMs(selectedDates[0].getTime() - Date.now());
        refs.daysValue.textContent = addLeadingZero(currentTime.days);
        refs.hoursValue.textContent = addLeadingZero(currentTime.hours);
        refs.minutesValue.textContent = addLeadingZero(currentTime.minutes);
        refs.secondsValue.textContent = addLeadingZero(currentTime.seconds);
      }, 1000);
    });
  }
}
//adding an insignificant zero to the left
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
