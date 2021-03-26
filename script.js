//variables

const minutesEl = document.querySelector('.stopwatch__mins')
const secondsEl = document.querySelector('.stopwatch__secs')
const milisecondsEl = document.querySelector('.stopwatch__ms')
const playBtn = document.querySelector('.stopwatch__playBtn')
const resetBtn = document.querySelector('.stopwatch__resetBtn')


let incrementMs = 0;
let incrementSec = 0;
let incrementMin = 0;


let interval = null;
let playing = 'false';

function checkMins() {

    if (incrementMin === 0) {
        minutesEl.style.display = 'none'
    } else {
        minutesEl.style.display = 'block'
    }
}

function playStopwatch() {
    incrementMs++
    if (incrementMs > 100) {
        incrementMs = 0
        incrementSec++
    }

    if (incrementSec >= 60) {
        incrementSec = 0
        incrementMin++
    }

    
    checkMins()
    
    milisecondsEl.textContent = incrementMs
    secondsEl.textContent = incrementSec
    minutesEl.textContent = incrementMin + ':'
    
    if(incrementSec < 10 && incrementMin > 0){
        secondsEl.textContent = '0' + incrementSec
    }
}

playBtn.addEventListener('click', toggleCounter)
resetBtn.addEventListener('click', resetStopwatch)


function resetStopwatch() {
    milisecondsEl.textContent = 0
    secondsEl.textContent = 0
    minutesEl.textContent = 0
    incrementMs = 0;
    incrementSec = 0;
    incrementMin = 0;
    window.clearInterval(interval)
    playing = 'false'
    checkMins()

}

function toggleCounter() {


    if (playing === 'true') {
        window.clearInterval(interval)
        playing = 'false'
        console.log(playing)
    } else {
        interval = window.setInterval(playStopwatch, 10)
        playing = 'true'
        console.log(playing)
    }

    playBtn.classList.toggle('stopped')
    resetBtn.classList.toggle('active')

}