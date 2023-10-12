import React from 'react';
import App from './App';
import { debounce } from 'lodash';
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom"
import './style/style.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './redux/store';

const app = createRoot(document.getElementById('app'));
app.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);

reportWebVitals();
