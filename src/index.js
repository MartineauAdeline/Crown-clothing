//moteur qui execute l'appli
import React from 'react';
//react est orienté web
import ReactDOM from 'react-dom/client';
//router generique qui exploite l'url afin de garder une trace de l'historique de navigation de l'utilisateur
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import {UserProvider} from './context/user.context'
import reportWebVitals from './reportWebVitals';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
