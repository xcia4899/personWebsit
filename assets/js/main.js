import { initMenu } from "./utils/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./utils/scrollAnimation.js";
import { loadSvgSprite } from "./ulite/svgSprite.js";
import { initHeader } from "./header.js";

import { btnHoverAni } from "./ulite/btnHoverAni.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadSvgSprite();
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
});