const TimerEle = document.querySelector('.timer');
const start = document.getElementById('start');
const stop = document.getElementById('pause');
const reset = document.getElementById('reset');
const input = document.getElementById('input');

let interval = null;
let timerLeft = parseInt(input.value) * 60 || 0;

function updateTimer() {
    let minutes = Math.floor(timerLeft / 60);
    let seconds = timerLeft % 60;
    const formatTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    TimerEle.innerHTML = formatTime;
}

function startTimer() {
    input.style.display = 'none';
    start.disabled = true; // Disable start button

    if (!interval) { // Only create a new interval if there isn't one
        interval = setInterval(() => {
            console.log(timerLeft);
            
            timerLeft--;
            updateTimer();

            if (timerLeft <= 0) {
                clearInterval(interval);
                interval = null;
                alert("Time's Up...");
                input.style.display = '';
                start.disabled = false; // Re-enable start button
            }
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null; // Reset interval
    start.disabled = false; // Re-enable start button
}

function resetTimer() {
    input.style.display = '';
    clearInterval(interval);
    interval = null; // Reset interval
    timerLeft = parseInt(input.value) * 60 || 0; // Reset timerLeft
    TimerEle.innerHTML = '00:00';
    updateTimer(); // Immediately update the displayed time
    start.disabled = false; // Re-enable start button
}

// Update timerLeft whenever the input value changes
input.addEventListener('change', () => {
    timerLeft = parseInt(input.value) * 60 || 0;
    updateTimer(); // Reflect the change in the display immediately
});

reset.addEventListener('click', resetTimer);
start.addEventListener('click', () => {
    if (!timerLeft) {
        timerLeft = parseInt(input.value) * 60 || 0; // Initialize timer if not already set
    }
    startTimer();
});
stop.addEventListener('click', stopTimer);
