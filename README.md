# Personal Website｜個人作品集網站

## 專案介紹

此作品為個人作品集與履歷網站，主要用於展示個人簡介、技能、專案經驗與聯絡資訊。

網站以卡片式版面為核心，透過卡片翻面、深淺色主題切換、滑鼠互動效果與響應式排版，呈現個人技術能力與視覺設計背景。

專案主要使用 HTML、SCSS 與 JavaScript 開發，並將不同互動功能拆分成獨立模組，提升程式碼的可讀性與維護性。

* **專案類型：** 個人作品集／履歷網站
* **開發方式：** 個人專案
* **核心技術：** HTML、SCSS、JavaScript

---

## 網站內容

網站主要包含以下內容：

* 個人基本資料
* 前端開發技能
* 視覺設計技能
* 個人自我介紹
* 工作經歷
* 專案作品展示
* 專案使用技術
* 專案功能說明
* Demo 與 GitHub 連結
* 聯絡方式
* 深色與淺色主題
* 返回頂端按鈕

---

## 使用技術

* HTML5
* SCSS
* JavaScript
* ES Modules
* CSS Grid
* Flexbox
* CSS 3D Transform
* CSS Animation
* Iconify
* SVG Sprite
* Fetch API
* Intersection Observer
* Media Query
* CSS Custom Properties

---

## 專案特色

### 個人履歷與作品整合

網站將個人履歷與作品集整合在同一頁面中，內容包含：

* 個人介紹
* 技術能力
* 設計能力
* 專案經驗
* 專案功能
* 使用技術
* 測試帳號
* Live Demo
* GitHub Repository

讓瀏覽者能在單一網站中快速了解個人背景與實作能力。

### 卡片式版面設計

網站主要使用卡片式布局呈現內容，不同卡片分別負責：

* 個人資料
* 自我介紹
* 工作經歷
* 專案作品

整體版面使用 CSS Grid 與 Flexbox 排列，並依照畫面寬度切換為不同欄數。

### 3D 卡片翻面效果

個人資料與其他部分區塊使用卡片翻面效果呈現正反兩面的內容。

JavaScript 監聽翻面按鈕：

```js
function initCardFlip() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const flipButtons = card.querySelectorAll(".flip-btn");

    flipButtons.forEach((button) => {
      button.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
      });
    });
  });
}
```

點擊按鈕後切換 `.is-flipped`，再搭配 CSS：

```css
.card-inner {
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
}

.card.is-flipped .card-inner {
  transform: rotateY(180deg);
}

.card-face {
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

讓卡片能以 3D 方式翻轉，並在正反面顯示不同內容。

### 深色與淺色主題

網站提供 Light Mode 與 Dark Mode 切換功能。

頁面載入時會先透過：

```js
window.matchMedia("(prefers-color-scheme: dark)")
```

取得使用者作業系統的主題設定，再將結果寫入：

```html
<html data-theme="dark">
```

或：

```html
<html data-theme="light">
```

SCSS 則透過 CSS 變數管理不同主題色彩：

```css
[data-theme="light"] {
  --background: #ffffff;
  --text-primary: #111111;
}

[data-theme="dark"] {
  --background: #111111;
  --text-primary: #ffffff;
}
```

由於主題會在 CSS 載入前先套用，因此能減少頁面載入時出現主題閃爍。

### 技能圖示展示

使用 Iconify 顯示開發與設計相關技能，例如：

* HTML
* CSS
* SCSS
* JavaScript
* TypeScript
* Vue
* Nuxt
* Pinia
* Figma
* Photoshop
* Illustrator

透過統一的 Icon 元件管理技能圖示，減少自行下載與維護圖片檔案的需求。

### 專案作品展示

作品區塊包含專案名稱、日期、使用技術、功能介紹與畫面截圖。

目前展示內容包含：

* Horizon 電商網站
* 品牌形象網站
* 前端切版與動畫練習作品

每個專案可以包含：

* 多張畫面截圖
* 技術標籤
* 專案說明
* 功能清單
* Demo 連結
* GitHub 連結
* 測試帳號

讓作品內容不只是畫面展示，也能說明實際完成的功能與技術。

### 專案圖片切換

每個專案左側可放入多張網站畫面，例如：

* 首頁
* 商品列表
* 商品詳細頁
* 後台管理頁

透過按鈕或標籤切換不同畫面，讓瀏覽者能快速了解專案的完整內容。

### 滑鼠追蹤按鈕效果

按鈕會根據滑鼠所在位置更新 CSS 自訂變數。

JavaScript 取得游標相對於按鈕的位置：

```js
const rect = button.getBoundingClientRect();
const x = event.clientX - rect.left;
const y = event.clientY - rect.top;

button.style.setProperty("--btn-x", `${x}px`);
button.style.setProperty("--btn-y", `${y}px`);
```

SCSS 再利用 `--btn-x` 與 `--btn-y` 控制漸層光源位置，讓按鈕產生跟隨滑鼠移動的亮光效果。

### SVG Sprite 圖示管理

網站的 GitHub、外部連結、返回與箭頭圖示使用 SVG Sprite 統一管理。

頁面中透過 `<use>` 重複使用圖示：

```html
<svg class="iconlink">
  <use href="#githubIcon"></use>
</svg>
```

這種方式可以：

* 減少重複 SVG 程式碼
* 統一管理圖示
* 使用 CSS 調整圖示顏色
* 提升圖示重複使用性

### 共用版型載入

Header 或其他共用結構拆分為獨立 HTML 檔案，再透過 Fetch API 載入到主頁面。

這種方式能減少 HTML 重複內容，並讓不同區塊的程式碼更容易維護。

### 滾動進場動畫

使用 Intersection Observer 偵測指定區塊是否進入畫面。

當元素進入可視範圍時，加入動畫 Class，觸發：

* 淡入
* 位移
* 縮放
* 卡片進場

相較於持續監聽 `scroll` 事件，Intersection Observer 更適合處理元素進入畫面的動畫。

### 返回頂端功能

網站提供返回頁面頂端按鈕。

當使用者瀏覽到頁面下方時，可以快速回到網站開頭，提升長頁面作品集的操作便利性。

### JavaScript 模組化

不同功能拆分成獨立 JavaScript 模組，例如：

* `theme.js`
* `menu.js`
* `scrollAnimation.js`
* `svgSprite.js`
* `goToUp.js`
* `btnHoverAni.js`
* `header.js`
* `layout.js`

最後由 `main.js` 統一初始化：

```js
document.addEventListener("DOMContentLoaded", async () => {
  initTheme();
  initGoToUp();
  btnHoverAni();
  initCardFlip();

  await loadSvgSprite();
  await loadLayout();

  initHeader();
  initMenu();
  scrollAnimation();
});
```

透過模組化拆分，避免所有功能集中在同一支 JavaScript 檔案中。

---

## 專案結構

```text
personWebsit/
├── assets/
│   ├── css/
│   │   ├── back.css
│   │   └── style.css
│   ├── images/
│   ├── js/
│   │   ├── utils/
│   │   │   ├── btnHoverAni.js
│   │   │   ├── goToUp.js
│   │   │   ├── menu.js
│   │   │   ├── scrollAnimation.js
│   │   │   ├── svgSprite.js
│   │   │   └── theme.js
│   │   ├── header.js
│   │   ├── layout.js
│   │   └── main.js
│   └── scss/
├── components/
├── index.html
├── package.json
└── README.md
```

---

## 學習重點

透過此專案練習並加強以下能力：

* 規劃個人履歷與作品集網站
* 使用 Grid 建立卡片式複合版面
* 使用 Flexbox 處理區塊內部排列
* 使用 CSS 3D Transform 製作卡片翻面
* 使用 CSS 變數建立深淺色主題
* 讀取作業系統主題設定
* 使用 JavaScript 控制主題切換
* 使用 Iconify 管理技能圖示
* 使用 SVG Sprite 管理共用圖示
* 使用 JavaScript 模組拆分功能
* 使用 Intersection Observer 製作滾動動畫
* 使用 Fetch API 載入共用版型
* 製作滑鼠位置追蹤效果
* 建立 RWD 響應式作品展示
* 整理專案技術、功能與實作成果

---

## SCSS 編譯

專案使用 Sass 編譯 SCSS。

```bash
# 安裝套件
npm install

# 監聽 SCSS 並自動編譯
npm run sass
```

---

## 專案連結

* **GitHub：** [xcia4899/personWebsit](https://github.com/xcia4899/personWebsit)
* **Live Demo：** [Personal Website](https://xcia4899.github.io/personWebsit/)

---

## 備註

本專案為個人履歷與作品集網站，主要用於展示前端開發、響應式切版、互動動畫與視覺設計能力。
