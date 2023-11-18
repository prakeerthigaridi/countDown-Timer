let timer;
let timeInSeconds = 300; 
let isTimerRunning = false;

function startTimer() {
    if (!isTimerRunning) {
        timer = setInterval(updateTimer, 1000);
        isTimerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 300; 
    updateTimerDisplay();
}

function updateTimer() {
    if (timeInSeconds > 0) {
        timeInSeconds--;
        updateTimerDisplay();
    } else {
        stopTimer();
        alert("Time's up!");
    }
}

function updateTimerDisplay() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Initial display
updateTimerDisplay();
