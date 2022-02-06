class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<div class="navbar">' +
            '                <div id="home" class="navbar__title"></div>' +
            '                <div class="navbar__right">' +
            '                   <div id="about" class="navbar__right__about"></div>' +
            '                   <div id="dark-mode-toggle" class="navbar__right__toggle">Light Mode</div>' +
            '                </div>' +
            '            </div>'
        const aIndex = document.createElement('a');
        aIndex.href = (this.getAttribute('rel-path') ?? '') + 'index.html';
        aIndex.textContent = 'Home';
        document.getElementById('home').appendChild(aIndex);
        const aAbout = document.createElement('a');
        aAbout.href = (this.getAttribute('rel-path') ?? '') + 'about.html';
        aAbout.textContent = 'About';
        document.getElementById('about').appendChild(aAbout);
    }
}
customElements.define('nav-bar', Navbar);