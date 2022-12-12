const burger = document.querySelector(".burger");
const cart = document.querySelector(".cart");
const account = document.querySelector(".account");
const language = document.querySelector(".language");
const logo = document.querySelector(".logo");

const cart_icon = cart.querySelector("span");
const account_icon = account.querySelector("span");
const language_icon = language.querySelector("span");
const burger_icon = burger.querySelector("span");

const mobile_menu = document.querySelector(".mobile-menu");
const account_menu = document.querySelector(".account-menu");

burger.addEventListener("click", () => {
    burger_icon.innerText = burger_icon.innerText === "menu" 
    ? "close" 
    : "menu";

    mobile_menu.classList.toggle("is-open");
}) /* If the span text is equal to menu, change it to close, otherwise change it to menu so the icon changes appropriately using google icons*/

account.addEventListener("click", () => {
    account_menu.classList.toggle("is-open");
})

logo.addEventListener("click", () => {
    window.location.href = "index.html";
})