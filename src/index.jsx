import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CountProvider } from './hooks/counter-context';
import './index.css';
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </CountProvider>
  </React.StrictMode>
);
