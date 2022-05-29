import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { initializeContract } from './utils/near';
import JavascriptTimeAgo from 'javascript-time-ago';

// The desired locales.
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';

JavascriptTimeAgo.locale(en);
JavascriptTimeAgo.locale(ru);
window.nearInitPromise = initializeContract()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  })
  .catch(console.error);
