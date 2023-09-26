let timer;
let minutes = prompt("Enter the minutes"); 
let seconds = prompt("Enter the seconds"); 
function startTimer() {
    timer = setInterval(function() {
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert("Time's up!");
        } else {
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }

            updateTimerDisplay();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

let temp_m = minutes;
let temp_s = seconds;
function resetTimer() {
    clearInterval(timer);
    minutes = temp_m;
    seconds = temp_s; 
    updateTimerDisplay();
}

function updateTimerDisplay() {
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0') + ' m';
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0') + " s";
}

function restartTimer(){
    location.reload();
}
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("restart").addEventListener("click", restartTimer);

updateTimerDisplay();
