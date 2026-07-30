export function initGoToUp() {
    const goToUpButton = document.querySelector(".goToUp");
    const goToNextButton = document.querySelector(".goToNext");

    goToUpButton?.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    goToNextButton?.addEventListener("click", () => {
        const sectionTops = [
            ...new Set(
                [...document.querySelectorAll("#main > section")]
                    .map((section) => Math.round(section.getBoundingClientRect().top + window.scrollY))
            ),
        ].sort((a, b) => a - b);

        const nextTop = sectionTops.find((top) => top > window.scrollY + 24);

        if (nextTop === undefined) return;

        window.scrollTo({
            top: Math.max(0, nextTop - 24),
            behavior: "smooth",
        });
    });
}
