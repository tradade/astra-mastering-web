import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Only needed while the UI package is temporarily linked from a sibling
    // checkout; harmless when it comes from the registry.
    fs: { allow: ['..'] }
  },
  optimizeDeps: {
    // The UI package publishes its TS source, so it goes through Vite's
    // transform instead of being pre-bundled.
    exclude: ['@tradade/astra-mastering-ui'],
    // The engine is CJS-backed (fft.js) and reached through that package, so
    // the scanner alone will not pre-bundle it — ask for it explicitly.
    include: ['@tradade/astra-mastering', 'fft.js']
  },
  resolve: {
    // One React (and one engine) instance — the UI package must not resolve its
    // own copy.
    dedupe: ['react', 'react-dom', '@tradade/astra-mastering']
  }
});
