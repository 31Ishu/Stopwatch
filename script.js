let timer;
let seconds = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsList = document.getElementById('laps-list');

function formatTime(sec) {
    const hrs = Math.floor(sec / 3600).toString().padStart(2, '0');
    const mins = Math.floor((sec % 3600) / 60).toString().padStart(2, '0');
    const secs = (sec % 60).toString().padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateDisplay();
    lapsList.innerHTML = ''; // Clear laps
}

function addLap() {
    const lapItem = document.createElement('li');
    lapItem.textContent = formatTime(seconds);
    lapItem.style.animation = "fadeIn 0.5s ease";
    lapsList.appendChild(lapItem);
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);
