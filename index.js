import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.js';
import Page1 from './Page1';
import Page2 from './Page2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Page1/>
    <Page2/>
    
  </div>
    

  
);