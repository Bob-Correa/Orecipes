/// <reference types="vitest" />
// ajout du plugin tailwind pour builder correctement nos classes tailwind
// doc ici : https://tailwindcss.com/docs/installation/using-vite
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // ... config à rajouter si besoin
  },
});
