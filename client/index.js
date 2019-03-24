/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Data from './components/data/data.js';
import Main from './components/main/main.js';


render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Main} />
      <Route path="/data" component={Data} />
    </Route>
  </Router>
  , document.getElementById('root'));
