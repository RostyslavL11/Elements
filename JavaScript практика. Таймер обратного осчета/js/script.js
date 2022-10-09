'use strict';
let time = 3600;
const countDownE1 = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countDownE1.innerHTML = `${minutes}:${seconds}`;
    time--;
}