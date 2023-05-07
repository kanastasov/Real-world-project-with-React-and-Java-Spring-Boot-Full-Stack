import React from 'react';
import ReactDOM ,{createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css'

import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();


const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);