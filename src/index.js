import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));


serviceWorker.register();
