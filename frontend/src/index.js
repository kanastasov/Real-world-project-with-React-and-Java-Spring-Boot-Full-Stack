import React from 'react';
import ReactDOM ,{createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import './bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";
const history = createBrowserHistory();



const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);


root.render(
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
);