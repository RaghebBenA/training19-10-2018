import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainpage from './Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'tachyons';


ReactDOM.render(
  <BrowserRouter><Mainpage /></BrowserRouter>,
   document.getElementById('root'));
serviceWorker.unregister();
