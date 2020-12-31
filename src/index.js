import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import "./assets/styles/normalize.css";
import "./assets/styles/general.sass";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

