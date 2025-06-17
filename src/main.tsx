import './index.css';
import App from './App.tsx';
import './styles/fonts.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-dark-teal/theme.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);