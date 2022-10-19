// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SessionProvider } from './hooks/session-context';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SessionProvider>
    <App />
  </SessionProvider>
  // </React.StrictMode>
);