export function initGoToUp() {
    const button = document.querySelector(".goToUp");

    if (!button) return;

    button.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}
