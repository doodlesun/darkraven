class Navbar extends HTMLElement {
    constructor() {
        super();
        this._currentPath = '';
    }
    connectedCallback() {
        console.log(window.location.origin);
        console.log(window.location.host);
        console.log(window.location.pathname);
        this.innerHTML = '<div class="navbar">' +
            '                <div id="home" class="navbar__title"></div>' +
            '                <div id="dark-mode-toggle" class="navbar__toggle">Light Mode</div>' +
            '            </div>'
        const origin = window.location.origin;
        const aTag = document.createElement('a');
        aTag.href = this.getAttribute('index-path');
        aTag.textContent = 'Home';
        document.getElementById('home').appendChild(aTag);
    }
    get currentPath() {
       return this._currentPath;
    }
    set currentPath(currentPath) {
        this._currentPath = currentPath;
    }
}
customElements.define('nav-bar', Navbar);