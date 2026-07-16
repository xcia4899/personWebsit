import { initMenu } from "./utils/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./utils/scrollAnimation.js";
import { loadSvgSprite } from "./utils/svgSprite.js";
import { initHeader } from "./header.js";

import { btnHoverAni } from "./utils/btnHoverAni.js";

const THEME_STORAGE_KEY = "person-website-theme";

function initTheme() {
    const themeToggle = document.querySelector(".switch input");
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.body.dataset.theme = initialTheme;

    if (themeToggle) {
        themeToggle.checked = initialTheme === "dark";

        themeToggle.addEventListener("change", () => {
            const nextTheme = themeToggle.checked ? "dark" : "light";

            document.body.dataset.theme = nextTheme;
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        });
    }
}

function initCardFlip() {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const flipButtons = card.querySelectorAll(".flip-btn");

        flipButtons.forEach((button) => {
            button.addEventListener("click", () => {
                card.classList.toggle("is-flipped");
            });
        });
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    initTheme();
    initCardFlip();
    await loadSvgSprite();
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
});
