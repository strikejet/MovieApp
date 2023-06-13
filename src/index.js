import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Controller from './screens'; // As the file is named index.js it is by default imported  you don't need to mention name.
debugger;
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("Inside Index JS");
root.render(
  
    <Controller/>
  
);
