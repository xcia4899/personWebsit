// scrollAnimation
export　function scrollAnimation(options = {}) {
    const selector = options.selector || ".fade-in";
    const activeClass = options.activeClass || "is-animated";

    requestAnimationFrame(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(activeClass);

                        // 只觸發一次，觸發後停止監聽
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: options.rootMargin || "0px 0px -10% 0px",
                threshold: options.threshold || 0.15,
            }
        );

        document.querySelectorAll(selector).forEach((el) => {
            observer.observe(el);
        });
    });
}

/*
使用方式
<script src="./scrollReveal.js"></script>
或
import { loadLayout } from "./layout.js";

<script>
  document.addEventListener("DOMContentLoaded", () => {
    scrollAnimation();
  });
</script>
*/