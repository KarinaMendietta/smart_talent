import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/global.scss';
import './styles/base/typography.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
