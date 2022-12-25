//getting refers for buttons "Start"&"Stop" and area of "body"
refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    bodyArea: document.querySelector('body'),
};
//destructuring
const { startBtn, stopBtn, bodyArea } = refs;
//type of cursor on a button that can be clicked
startBtn.style.cursor = "pointer";
//button unavailable
stopBtn.disabled = true;

//random selection of "body" area color
const getRandomHexColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//pressing the "start" button
startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        bodyArea.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    stopBtn.style.cursor = "pointer";    
    startBtn.style.cursor = "default";
});
//pressing the "stop" button
stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    startBtn.style.cursor = "pointer";    
    stopBtn.style.cursor = "default";
});
