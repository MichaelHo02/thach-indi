import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/thach-indi/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'apps/time-jar/index': path.resolve(__dirname, 'apps/time-jar/index.html'),
        'apps/time-jar/privacy': path.resolve(__dirname, 'apps/time-jar/privacy.html'),
        'apps/questions-game/index': path.resolve(__dirname, 'apps/questions-game/index.html'),
        'apps/questions-game/privacy': path.resolve(__dirname, 'apps/questions-game/privacy.html'),
      },
    },
  },
})