import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';

// getElementById renvoie une valeur de type HTMLElement ou null , nous on met le ! qui dit c'est pas null donc c'est forcement un Element
// createRoot accepte en paramètre un container (Element ou DocumentFragment ou Document)

const rootElt = document.getElementById('root');

if (rootElt) {
  createRoot(rootElt).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
