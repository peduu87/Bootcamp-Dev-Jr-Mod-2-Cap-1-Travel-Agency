function navLinkActive() {
    var pagePath = window.location.pathname;
    var pageName = pagePath.substring(1);
    let navItemNum = document.getElementsByClassName("nav-link");

    for (let navItem of navItemNum) {
        let itemHref = navItem.getAttribute("href");
        console.log(itemHref);
        if (itemHref == pageName) {
            navItem.classList.add("active");
        }
    }
}

$('#navLoad').load("nav.html");

navLinkActive();