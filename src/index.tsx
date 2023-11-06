import React, { StrictMode } from 'react';
import App from './App.tsx';
import { createRoot } from "react-dom/client";
import { BrowserRouter} from "react-router-dom"
import './style/style.scss'
import reportWebVitals from './reportWebVitals.ts';
import { Provider } from 'react-redux'
import { store } from './redux/store.ts';
import './fireBase.ts'

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

reportWebVitals(root);
