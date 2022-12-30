//connection of the library for displaying messages on the screen
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//getting a refer to a button
const form = document.querySelector('.form');

//setting a listener to a button
form.addEventListener('submit', handleSabmit);

//Creating a specified number of Promises on a mouse click
function handleSabmit(evt) {
  evt.preventDefault();
  const data = evt.currentTarget.elements;
  let delay = Number(data.delay.value);
  const step = Number(data.step.value);
  const amount = Number(data.amount.value);

//Processing the result of the execution (resolve) or non-execution (reject) of the current Promise
// with the display of the corresponding message on the screen
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

//Create a current promise with a user-specified delay
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
