async function copyText(text) {
    await navigator.clipboard.writeText(text);
}

export function initCopyAccount(selector = ".copy-account-btn") {
    document.querySelectorAll(selector).forEach((button) => {
        const defaultLabel = button.getAttribute("aria-label") || "複製";
        let resetTimer;

        button.addEventListener("click", async () => {
            try {
                await copyText(button.dataset.copyText || "");
                button.classList.add("is-copied");
                button.setAttribute("aria-label", "已複製");
                button.title = "已複製";

                window.clearTimeout(resetTimer);
                resetTimer = window.setTimeout(() => {
                    button.classList.remove("is-copied");
                    button.setAttribute("aria-label", defaultLabel);
                    button.title = defaultLabel;
                }, 1600);
            } catch (error) {
                button.setAttribute("aria-label", "複製失敗");
                button.title = "複製失敗";
                console.error(error);
            }
        });
    });
}
