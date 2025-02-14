import { cleanup, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

// cette fonction ajoute autours du composant rendu un provider et un browser router
// pour que le composant ai accès au store et au routeur
function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        {/* j'entoure mon composant à tester BrowserRouter */}
        {children}
      </BrowserRouter>
    ),
    ...options,
  });
}

export { screen } from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
