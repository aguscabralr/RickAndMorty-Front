import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/rickandmorty'
axios.defaults.baseURL = 'https://rickandmorty-back-production-4986.up.railway.app/'


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
