import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n'
import { LanguageProvider } from './hooks/useLanguage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>
);
