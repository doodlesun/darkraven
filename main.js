'use strict';
let darkModeStorage = localStorage.getItem('dark-mode');
let black = getComputedStyle(document.documentElement).getPropertyValue('--black');
let white = getComputedStyle(document.documentElement).getPropertyValue('--white');
console.log('black and white ', black, white);
if (darkModeStorage === 'true') {
    document.documentElement.style.setProperty('--main-color', black);
    document.documentElement.style.setProperty('--background-color', white);
} else {
    document.documentElement.style.setProperty('--main-color', white);
    document.documentElement.style.setProperty('--background-color', black);
}
window.onload = (event) => {
    let darkModeSwitch = document.getElementById('dark-mode-toggle');
    let darkModeStorage = localStorage.getItem('dark-mode');
    if (darkModeStorage === 'false') {
        setLightMode();
    } else {
        setDarkMode()
    }
    darkModeSwitch.addEventListener('click', () => {
        let currentColor = document.documentElement.style.getPropertyValue('--main-color');
        if (currentColor === white) {
            setDarkMode();
            localStorage.setItem('dark-mode', true.toString());
        } else {
            setLightMode();
            localStorage.setItem('dark-mode', false.toString());
        }
    })
    function setDarkMode() {
        document.documentElement.style.setProperty('--main-color', black);
        document.documentElement.style.setProperty('--background-color', white);
        darkModeSwitch.textContent = 'Dark Mode';
    }
    function setLightMode() {
        document.documentElement.style.setProperty('--main-color', white);
        document.documentElement.style.setProperty('--background-color', black);
        darkModeSwitch.textContent = 'Light Mode';
    }
    document.getElementById('scroll-top')?.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}