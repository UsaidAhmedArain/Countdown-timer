const day = new Date;

const newDate = day.getDay();

const updatedDay = document.getElementById("days");

updatedDay.innerHTML = ` 0${newDate}`;

const newHours = day.getHours();

const updatedHours = document.getElementById("hours");

updatedHours.innerHTML = `${newHours}`;

const min = day.getMinutes();

const updatedMins = document.getElementById("minutes");

updatedMins.innerHTML =  `${min}`;

const sec = day.getSeconds();

const updatedSec = document.getElementById("seconds");

updatedSec.innerHTML = `${sec}`;