import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
