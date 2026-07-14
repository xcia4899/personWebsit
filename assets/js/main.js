import { initMenu } from "./utils/menu.js";
import { loadLayout } from "./layout.js";
import { scrollAnimation } from "./utils/scrollAnimation.js";
import { loadSvgSprite } from "./utils/svgSprite.js";
import { initHeader } from "./header.js";

import { btnHoverAni } from "./utils/btnHoverAni.js";

document.addEventListener("DOMContentLoaded", async () => {
    await loadSvgSprite();
    await loadLayout();
    initHeader();
    initMenu();
    scrollAnimation();
});