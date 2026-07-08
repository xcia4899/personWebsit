export function initLoading(options = {}) {
  const {
    loadingSelector = ".loading",
    outerWrapSelector = ".outer-wrap",
    finishTime = 5000,
    removeWrapTime = 2800,
  } = options;

  const loading = document.querySelector(loadingSelector);
  const outerWrap = document.querySelector(outerWrapSelector);

  setTimeout(() => {
    loading?.classList.add("animated");
    document.body.classList.remove("is-loading");
  }, finishTime);

  setTimeout(() => {
    outerWrap?.classList.remove("is-loading");
  }, removeWrapTime);
}

// import { initLoading } from "./loading.js";
// initLoading();

// 使用
// initLoading({
//   finishTime: 4000,
//   removeWrapTime: 2000,
// });