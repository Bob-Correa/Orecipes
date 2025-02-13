import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';

// getElementById renvoie une valeur de type HTMLElement ou null , nous on met le ! qui dit c'est pas null donc c'est forcement un Element
// createRoot accepte en paramètre un container (Element ou DocumentFragment ou Document)

const rootElt = document.getElementById('root');
const queryClient = new QueryClient();

if (rootElt) {
  createRoot(rootElt).render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>,
  );
} else {
  console.log("erreur il n'y a pas de div root dans la page");
}
