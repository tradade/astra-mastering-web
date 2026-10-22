import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // The shared UI package is linked from the sibling studio checkout, so the
    // dev server must be allowed to read outside this project root.
    fs: { allow: ['..'] }
  },
  optimizeDeps: {
    // Linked workspace package: ship its TS source through Vite's transform
    // instead of pre-bundling it.
    exclude: ['@tradade/astra-mastering-ui'],
    // The engine is CJS-backed (fft.js) and reached through the linked package,
    // so the scanner alone will not pre-bundle it — ask for it explicitly.
    include: ['@tradade/astra-mastering', 'fft.js']
  },
  resolve: {
    // One React (and one engine) instance — the linked package must not resolve
    // its own copy from the studio checkout.
    dedupe: ['react', 'react-dom', '@tradade/astra-mastering']
  }
});
