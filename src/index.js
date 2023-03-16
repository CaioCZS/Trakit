import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import ResetStyle from './styles.js/ResetStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResetStyle />
    <App />
  </React.StrictMode>
);

