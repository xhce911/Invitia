import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
      <React.StrictMode>
        <Routes>
          <Route path='/' element={<App />} />
         
        </Routes>
    </React.StrictMode>
</HashRouter>
);
