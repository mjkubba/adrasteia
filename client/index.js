/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Tf from './components/data/data.js';
import Main from './components/main/main.js';

require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
        <IndexRoute component={Main} />
      <Route path="/data" component={Tf} />
    </Route>
  </Router>
  , document.getElementById('root'));
