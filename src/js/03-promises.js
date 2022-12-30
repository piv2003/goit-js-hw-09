import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSabmit);

function createPromise(position, delay) {
	const shouldResolve = Math.random() > 0.3;
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		if (shouldResolve) {
		  resolve({ position, delay });
		} else {
		  reject({ position, delay });
		}
	  }, delay);
	  return;
	});
  }

function handleSabmit(evt) {
  evt.preventDefault();
  const data = evt.currentTarget.elements;
  let delay = Number(data.delay.value);
  const step = Number(data.step.value);
  const amount = Number(data.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}


