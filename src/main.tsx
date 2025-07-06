import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import NotificationToast from './components/NotificationToast.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <NotificationToast />
  </StrictMode>
);