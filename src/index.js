import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ProductsProvider } from './context/productsContext';

ReactDOM.render(
  <BrowserRouter>
    <ProductsProvider >
      <App />
    </ProductsProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
