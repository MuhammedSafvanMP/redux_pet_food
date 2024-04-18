import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './css/vendor.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  
import store from './app/store/Store.jsx';
import { GlobalProvider } from './context/GlobalContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <GlobalProvider>
        <App />
        </GlobalProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
