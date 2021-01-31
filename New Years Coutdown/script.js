const year = document.getElementById('year');
const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const container = document.getElementById('container');


const currentYear = new Date().getFullYear();

year.innerText = currentYear + 1;

const newYearsDate = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCount() {
    const time = new Date();

    const timeUntil = newYearsDate - time;

    const days = Math.floor(timeUntil / 1000 / 60 / 60 / 24);
    const hours = Math.floor(timeUntil / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(timeUntil / 1000 / 60) % 60;
    const seconds = Math.floor(timeUntil / 1000) % 60;


    day.innerHTML = days;
    hour.innerHTML = hours;
    minute.innerHTML = minutes;
    second.innerHTML = seconds;
}

setInterval(updateCount, 1000);
