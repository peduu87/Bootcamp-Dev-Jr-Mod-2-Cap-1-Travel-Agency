function navLinkActive() {
    var pagePath = window.location.pathname;
    var pageName = pagePath.substring(1);
    let navItemNum = document.getElementsByClassName("nav-link");

    for (let navItem of navItemNum) {
        let itemHref = navItem.getAttribute("href");
        if (itemHref == pageName) {
            navItem.classList.add("active");
        }
    }
}

function waitForElement(selector, callback) {
    if (document.querySelector(selector)) {
        callback();
    } else {
        setTimeout(() => waitForElement(selector, callback), 500);
    }
}

waitForElement("#navBar", navLinkActive);