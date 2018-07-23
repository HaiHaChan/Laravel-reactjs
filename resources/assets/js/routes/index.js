import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import App from '../page/App';
import Home from '../page/HomePage';
import About from '../page/About';

const Root = (props) => {
  return (
    <HashRouter>
        <App>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </App>
    </HashRouter>
  );
};

export default Root;
