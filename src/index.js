import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import One from './one';
import Two from './two';
import Three from './three';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Four from './four';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="prior" element={<One />} />
        <Route path="development" element={<Two />} />
        <Route path="short-term" element={<Three />} />
        <Route path="legacy" element={<Four />} />
      </Routes>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
