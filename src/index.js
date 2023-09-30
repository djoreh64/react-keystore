import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './style/style.scss'
import reportWebVitals from './reportWebVitals';

const app = createRoot(document.getElementById('app'));
app.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
