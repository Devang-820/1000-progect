let indicator = document.querySelector(".scroll-indicator .progress");

window.addEventListener("scroll", scroll);

function scroll() {

    let scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrollTop = document.documentElement.scrollTop;

    let scrolled = (scrollTop / scrollHeight) * 100;

    indicator.style.width = `${scrolled}%`;
}