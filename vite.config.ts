import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  base: "/ICarlota-portfolio",
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
