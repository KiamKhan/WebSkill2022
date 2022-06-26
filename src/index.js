import React from 'react';
import ReactDOM from 'react-dom/client';
import CartContextProvider from './Context/CartContext';
import './index.css';
import RouteContainer from './RouteContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
        <RouteContainer/>
    </CartContextProvider>
  </React.StrictMode>
);