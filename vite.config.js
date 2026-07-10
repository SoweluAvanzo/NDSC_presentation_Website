import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // The `@` alias was previously provided by @base44/vite-plugin.
    alias: { '@': path.resolve(__dirname, './src') },
  },
  server: {
    // Dev only: forward the API to the local backend (compose maps it to 8200).
    proxy: {
      '/api': 'http://localhost:8200',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
    css: false,
  },
});
