'use strict';

const iconMenu = document.querySelector('.menu__icon');
const menuLink = document.querySelectorAll('.menu__navigation');
const menuBody = document.querySelector('.menu__body');

menuLink.forEach((item) => {
    item.addEventListener('click', () => {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
});

//Burger

if (iconMenu) {

    iconMenu.addEventListener('click', (e) => {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}

//Timer

const deadLine = '2023-01-01';

function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60)) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endTime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadLine);