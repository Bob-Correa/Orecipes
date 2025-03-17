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
    // on va gérer le DOM en js
    environment: 'jsdom',
    // le fichier de _setup_ qui sera exécuté avant de lancer les tests
    // fournira plus d'options à notre _expect_,
    // voire simulera un serveur pour nos requêtes HTTP…
    setupFiles: '/src/tests/setup.ts',
  },
  server: {
    host: '0.0.0.0', // Permet la connexion à partir de réseaux externes
    port: process.env.PORT || 5173 // Utilise la variable d'environnement PORT si disponible
  }
});
