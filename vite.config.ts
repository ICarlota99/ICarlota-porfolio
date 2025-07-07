import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: '/ICarlota-portfolio',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Group dependencies into separate chunks
          react: ['react'],
          animations: ['framer-motion', '@react-three/drei', '@react-three/fiber'],
        },
      },
    },
  },
  plugins: [
    react(),
    svgr({ 
        svgrOptions: {
          icon: true, 
          svgo: true,
        },
      }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '~': '/public'
    }
  },
})
