import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Calculator from './calculator/Calculator';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <h1>Calculator</h1>
      <Calculator />
    </>
    
  </React.StrictMode>
);
