export function initHeader() {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  if (!menuBtn || !menu) return;

  menuBtn.addEventListener("click", () => {
    // menu.classList.toggle("is-open");
    console.log("點按鈕")
  });
}