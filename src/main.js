const menuButton = document.querySelector(".nav__menu-btn");
const menuWrapper = document.querySelector(".nav__list");

let isMenuOpened = () => menuButton.getAttribute("aria-expanded") === "true";

const showMenu = () => {
    menuButton.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
};

const hideMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = null;
};

menuButton.addEventListener("click", () => {
    isMenuOpened() ? hideMenu() : showMenu();
});

window.addEventListener("resize", () => {
    const mediaQuery = window.matchMedia("(min-width: 48em)");
    if (mediaQuery.matches && isMenuOpened()) hideMenu();
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpened()) hideMenu();
});
