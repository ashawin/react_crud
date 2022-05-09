import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import store from "./store";
import { BrowserRouter } from "react-router-dom";
axios.interceptors.request.use(
  (req) => {
    const user = localStorage.getItem('user');
    // Add configurations here
    

    if (user && user.token) {
      req.common.header.Authorization = 'Bearer ${user.token}';
    }
    console.log('req',JSON.stringify(user))
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
