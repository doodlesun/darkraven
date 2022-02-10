let darkModeStorage = localStorage.getItem('dark-mode');
if (darkModeStorage === 'false') {
    document.documentElement.style.setProperty('--main-color', '#000000');
    document.documentElement.style.setProperty('--background-color', '#FFFFFF');
} else {
    document.documentElement.style.setProperty('--main-color', '#FFFFFF');
    document.documentElement.style.setProperty('--background-color', '#000000');
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
        if (currentColor === '#000000') {
            setDarkMode();
            localStorage.setItem('dark-mode', true.toString());
        } else {
            setLightMode();
            localStorage.setItem('dark-mode', false.toString());
        }
    })
    function setDarkMode() {
        document.documentElement.style.setProperty('--main-color', '#FFFFFF');
        document.documentElement.style.setProperty('--background-color', '#000000');
        darkModeSwitch.textContent = 'Light Mode';
    }
    function setLightMode() {
        document.documentElement.style.setProperty('--main-color', '#000000');
        document.documentElement.style.setProperty('--background-color', '#FFFFFF');
        darkModeSwitch.textContent = 'Dark Mode';
    }
    document.getElementById('scroll-top').addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
}