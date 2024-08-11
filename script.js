var pagePath = window.location.pathname;
var pageName = pagePath.substring(1);
let navItemNum = document.getElementsByClassName("nav-link");

for (let navItem of navItemNum) {
    let itemHref = navItem.getAttribute("href");
    if (itemHref == pageName) {
        navItem.classList.add("active");
    }
}