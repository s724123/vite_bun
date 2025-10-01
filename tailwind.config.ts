// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // 確保這裡包含了所有使用 Tailwind 類別的檔案路徑
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 這裡如果之前有客製化 'border' 顏色，請確認它有定義
      // 這是解決 'border-border' 錯誤的關鍵！
      colors: {
        // 如果您使用 Shadcn/ui 或客製化主題，這行是必需的
        // 它將 'border' 類別對應到您在 CSS 中定義的 --border 變數
        border: "hsl(var(--border))",
      },
    },
  },
  plugins: [
    // 【極度重要】確保您的 DaisyUI 插件被正確載入
    require('daisyui'),
  ],

  // 【極度重要】DaisyUI 的客製化配置
  daisyui: {
    // 您必須在此處聲明您要使用的所有主題
    themes: [
        "cupcake",
      "light",
      "dark",
      // 確保這裡有包含您正在使用的任何主題
      // 至少要有一個，例如 "light"
    ],
    // ... 其他 daisyui 設定
  },
}