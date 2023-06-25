import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './App';
import store from './Redux/store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/rickandmorty';
axios.defaults.baseURL = 'https://rickandmorty-back-production-ebf9.up.railway.app/rickandmorty';

createRoot(document.getElementById('root'))
  .render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
);
