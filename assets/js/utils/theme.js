const SYSTEM_DARK_QUERY = "(prefers-color-scheme: dark)";

/**
 * 初始化網站深淺模式，每次載入都先跟隨系統設定。
 * @param {object} options
 * @param {string} [options.toggleSelector=".switch input"] Switch 選擇器
 * @param {HTMLElement} [options.root=document.documentElement] data-theme 掛載元素
 * @returns {{ followSystem: Function, destroy: Function }} 控制與清理方法
 */
export function initTheme({toggleSelector = ".switch input",root = document.documentElement,} = {}) {
    const themeToggle = document.querySelector(toggleSelector);
    const systemThemeQuery = window.matchMedia(SYSTEM_DARK_QUERY);
    let followsSystemTheme = true;

    // 取得作業系統目前的深淺模式。
    function getSystemTheme() {
        return systemThemeQuery.matches ? "dark" : "light";
    }

    // 將主題寫入 HTML，並同步 Switch 的勾選狀態。
    function applyTheme(theme) {
        root.dataset.theme = theme;

        if (themeToggle) {
            themeToggle.checked = theme === "dark";
        }
    }

    // 使用者操作後，本次瀏覽改用手動選擇。
    function handleToggleChange() {
        followsSystemTheme = false;
        applyTheme(themeToggle.checked ? "dark" : "light");
    }

    // 尚未手動選擇時，同步系統主題的即時變化。
    function handleSystemThemeChange() {
        if (followsSystemTheme) {
            applyTheme(getSystemTheme());
        }
    }

    // 恢復跟隨系統模式。
    function followSystem() {
        followsSystemTheme = true;
        applyTheme(getSystemTheme());
    }

    // 初始化主題並綁定事件。
    followSystem();
    themeToggle?.addEventListener("change", handleToggleChange);
    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    return {
        followSystem,
        // 元件移除或不再使用時，清除事件監聽。
        destroy() {
            themeToggle?.removeEventListener("change", handleToggleChange);
            systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
        },
    };
}
