
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const REPO_NAME = 'https://spencerlimszesing.github.io/portfolio-site/';

export default defineConfig({
  plugins: [react()],
  // If building for production (GitHub), use the repo name. If local, use root.
  base: process.env.NODE_ENV === 'production' ? `/${REPO_NAME}/` : '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true
  }
});
