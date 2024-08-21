let [hour, minute, second] = [0, 0, 0];
let timer = false;

var startButton = document.getElementById('start');
startButton.addEventListener('click', function() {
    timer = true;
    stopWatch();
});

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function() {
    timer = false
});

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function() {
    timer = false;
    [hour, minute, second] = [0, 0, 0];
    updateDisplay();
});

function stopWatch() {
    if (timer) {
        second++;
        if (second === 60) { 
            minute++; second = 0; 
        }
        if (minute === 60) { 
            hour++; minute = 0; 
        }

        updateDisplay();
        setTimeout(stopWatch, 800); 
    }
}

function updateDisplay() {
    const format = num => num.toString().padStart(2, '0');   //number to string ensuring it has 2 digits(3 as 03 or 11 as 11)
    document.getElementById('hour').innerHTML = format(hour);
    document.getElementById('minute').innerHTML = format(minute);
    document.getElementById('second').innerHTML = format(second);
}
