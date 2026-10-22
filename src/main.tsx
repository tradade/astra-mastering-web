import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Theme, primitives, and mastering UI styles — owned by the shared package so
// this app and AstraStudio render from one source of truth.
import '@tradade/astra-mastering-ui/styles';
import '@tradade/astra-mastering-ui/styles/landing';
import './styles/app.scss';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
