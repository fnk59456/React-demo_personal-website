import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' 

// https://vite.dev/config/
export default defineConfig({
  base: '/React-demo_personal-website/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ← 加這行
    },
  },
})
