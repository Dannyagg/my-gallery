import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductsProvider } from './context/productsContext';

ReactDOM.render(
  <Router>
    <ProductsProvider >
      <App />
    </ProductsProvider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
