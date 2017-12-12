import React, { Component } from 'react';
import {
  HashRouter,
  Route, IndexRoute, Switch, Redirect,Link
} from 'react-router-dom'
export default class Base extends Component {

  render() {
    const { children } = this.props;
    return (
      
        <div>
          <header>
            <div style={{"background":"red"}}>aaaaaaaaaaaaaaaaaaaa</div>
            <li><Link to="/app2">About</Link></li>
            <li><Link to="/app">About2</Link></li>
          </header>
          <aside>
            <div style={{"background":"blue"}}>bbbbbbbbbbbbbbbbbbbb</div>
          </aside>
          <main>
            <div>
              {children}
            </div>
          </main>
        </div>

    );
  }
}
