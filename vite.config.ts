import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
      port: 3000,           // 設定開發伺服器埠號
      open: true,           // 自動開啟瀏覽器
      host: true,           // 允許外部存取
    },
    build: {
      outDir: 'dist',       // 建構輸出目錄
      sourcemap: true,      // 生成 source map 方便除錯
    },
    resolve: {
      alias: {
        '@': '/src',        // 設定路徑別名，簡化 import
        '@components': '/src/components',
        '@pages': '/src/pages',
        '@utils': '/src/utils',
        '@assets': '/src/assets',
      },
    },
})
