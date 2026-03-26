import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { imagetools } from 'vite-imagetools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr({
      include: '**/*.svg',
    }),
    react(),
    imagetools(),
    tailwindcss(),
  ],
  base: '/Brayan/',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@public': path.resolve(__dirname, 'public'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@locales': path.resolve(__dirname, 'src/locales'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@svg': path.resolve(__dirname, 'src/svg'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/primereact') || id.includes('node_modules/primeicons')) {
            return 'vendor-primereact';
          }
          if (id.includes('node_modules/exceljs') || id.includes('node_modules/jszip')) {
            return 'vendor-excel';
          }
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'vendor-icons';
          }
        },
      },
    },
  },
  server: {
    port: 3003,
  }
})