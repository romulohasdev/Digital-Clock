const hours = document.getElementById('hours');
const Minuts = document.getElementById('Minuts');
const Seconds = document.getElementById('Seconds');

const clock = setInterval(function time()) {
    let dateToday = new Date():
    let hr = dateToday.getHours();
    let min = dateToday.getMinuts();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) hr = '0' + hr;
    if (sec < 10) hr = '0' + hr;

    Hours.textContent = hr;
    Minuts.textContent = min;
    Seconds.textContent = Sec;
}