import React from "react";
import ReactDOM from "react-dom/client";
import App from './components/app.jsx';
import './main.scss';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name='Jane'/>
  </React.StrictMode>
);