import React from 'react';
import { HashRouter, Route, IndexRoute, Switch, Link, Redirect } from 'react-router-dom';
// import Base from './base.js';
import App from '../view/test/app.js';
import App2 from '../view/test/app2.js';
export default (
  <HashRouter basename="">
    <Switch>
      <Redirect from="/" to="/app" exact />
      <Route>
        {/* <Base> */}
          <Switch>
            
            {/* <Redirect from="*" to="/404" /> */}
             <Route path="/app" component={App} />
             <Route path="/app2" component={App2} />
          </Switch>
        {/* </Base> */}
      </Route>
    </Switch>
  </HashRouter>
);
