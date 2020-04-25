import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link } from "react-router";
import {BrowserRouter } from 'react-router-dom'
// import './index.css';
import App from '../src/Components/App/App';
// import {Resume} from '../src/Components/Resume/Resume';
// import {Bio} from '../src/Components/Bio/Bio';
// import {Projects} from '../src/Components/Projects/Projects';

import * as serviceWorker from './serviceWorker';
const routing = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

ReactDOM.render( routing, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
