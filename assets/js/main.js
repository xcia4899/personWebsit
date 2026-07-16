import { initMenu } from "./utils/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./utils/scrollAnimation.js";
import { loadSvgSprite } from "./utils/svgSprite.js";
import { initHeader } from "./header.js";
import { initTheme } from "./utils/theme.js";

import { btnHoverAni } from "./utils/btnHoverAni.js";

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
    btnHoverAni();
    initCardFlip();
    await loadSvgSprite();
    await loadLayout();

    initHeader();
    initMenu();
    scrollAnimation();
});
