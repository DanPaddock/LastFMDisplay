import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FMData } from './Components/FMData';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    
  <FMData
    userName={'your-username'}
    apiKey={'your-api-key'}
  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
