import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import WeatherSearch from "./WeatherSearch";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
    </div>
    <p class="coded">Coded by Iryna Rybka
        <a class="link"  href="https://github.com/IrynaRybka/r-weather-w4" target="_blank" rel="noreferrer noopener">GitHub</a>
      </p>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
