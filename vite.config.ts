import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
          if (id.includes('/src/i18n/locales/')) {
            if (id.includes('products-zh') || id.includes('products-ja')) {
              return 'i18n-east-asia';
            }
            if (id.includes('products-es') || id.includes('products-it') || id.includes('products-pt')) {
              return 'i18n-romance';
            }
            return 'i18n-emea';
          }
        },
      },
    },
  },
});
