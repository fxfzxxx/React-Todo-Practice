import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the built `dist/` also works when the repo's
  // test server hosts it at /examples/typescript-react-practice/dist/.
  base: './',
});
