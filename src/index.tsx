import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);