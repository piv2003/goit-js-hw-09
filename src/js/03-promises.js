import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs={
  form:   document.querySelector(".form"),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
