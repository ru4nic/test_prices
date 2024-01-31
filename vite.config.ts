import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [],
  css: {
    devSourcemap: true,
  },
  server: { port: 3000, host: '0.0.0.0' },
  base: '/test_prices/',
});
