import React from 'react';
import App from './App';
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom"
import './style/style.scss'
import reportWebVitals from './reportWebVitals';

const app = createRoot(document.getElementById('app'));
app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
