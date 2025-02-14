import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// dans la fonction expect on veut ajouter les matchers de testing library propres au DOM
// comme toBeInTheDocument
expect.extend(matchers);
