export function scrollHeader() {
  const header = document.querySelector(".header-inner");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
