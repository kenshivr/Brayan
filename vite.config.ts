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
      '@types': path.resolve(__dirname, 'src/types'),
      '@svg': path.resolve(__dirname, 'src/svg'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    }
  },
  server: {
    port: 3003,
  }
})