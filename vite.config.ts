import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0', // Permite acesso de qualquer IP
    open: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  // optimizeDeps: {
  //   include: ['three'], // THREE.js removido - usando apenas PNG
  // },
});


