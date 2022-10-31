import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CountProvider } from './hooks/counter-context';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountProvider>
  </React.StrictMode>
);
