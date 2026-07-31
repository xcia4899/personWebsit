async function copyText(text) {
    await navigator.clipboard.writeText(text);
}

export function initCopyAccount(selector = "[data-copy-text]") {
    document.querySelectorAll(selector).forEach((element) => {
        const defaultLabel = element.getAttribute("aria-label") || "複製";
        let resetTimer;

        element.addEventListener("click", async () => {
            try {
                await copyText(element.dataset.copyText || "");
                element.classList.add("is-copied");
                element.setAttribute("aria-label", "已複製");
                element.title = "已複製";

                window.clearTimeout(resetTimer);
                resetTimer = window.setTimeout(() => {
                    element.classList.remove("is-copied");
                    element.setAttribute("aria-label", defaultLabel);
                    element.title = defaultLabel;
                }, 1600);
            } catch (error) {
                element.setAttribute("aria-label", "複製失敗");
                element.title = "複製失敗";
                console.error(error);
            }
        });
    });
}
