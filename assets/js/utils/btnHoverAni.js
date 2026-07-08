// btnHoverAni
// 滑鼠從哪裡進入按鈕，hover 底色就從哪裡擴散；
// 滑鼠從哪裡離開按鈕，hover 底色就從哪裡收回。
//
// 搬到其他專案時需要搭配 CSS：
// 1. 按鈕本身要有 position: relative、overflow: hidden、isolation: isolate。
// 2. 使用 ::before 當 hover 色塊，位置讀取 --btn-x / --btn-y。
// 3. hover 時放大 ::before，離開時讓它縮回 0。
export function btnHoverAni(selector = ".inOutAniBtn") {
    const updatePointerPosition = (button, event) => {
        // 取得按鈕在視窗中的位置，換算滑鼠在按鈕內部的座標。
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // 寫進 CSS 變數，讓 ::before 可以從這個座標開始動畫。
        button.style.setProperty("--btn-x", `${x}px`);
        button.style.setProperty("--btn-y", `${y}px`);
    };

    document.querySelectorAll(selector).forEach((button) => {
        // pointerenter：決定 hover 色塊從哪裡開始擴散。
        button.addEventListener("pointerenter", (event) => {
            updatePointerPosition(button, event);
        });

        // pointermove：滑鼠停在按鈕上移動時，持續更新目前位置。
        button.addEventListener("pointermove", (event) => {
            updatePointerPosition(button, event);
        });

        // pointerleave：決定 hover 色塊從哪裡收回。
        button.addEventListener("pointerleave", (event) => {
            updatePointerPosition(button, event);
        });
    });
}
