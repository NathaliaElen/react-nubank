import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './layout/App.js';
import Login from './layout/Login';
import Register from './layout/Register';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/register' element={<Register /> } />
        <Route path='/login' element={<Login /> } />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

