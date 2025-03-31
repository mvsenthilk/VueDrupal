import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  root: '.',
  build: {
    watch: true,
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: '',
    rollupOptions: {
      input: {
        main: "src/css/styles.css",
      },
      output: {
        assetFileNames: "styles.css",
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
      dirs: ['src', 'templates']
    },
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
})