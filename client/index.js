/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { render } from 'react-dom';
import {
    HashRouter,
    Route
} from 'react-router-dom';

import Data from './components/data/data.js';
import Main from './components/main/main.js';


render(
  <HashRouter>
    <div>
        <Route path="/" render={()=><Main items={Main}/>}/>
    </div>
  </HashRouter >
  , document.getElementById('root'));
