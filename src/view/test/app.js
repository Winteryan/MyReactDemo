import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route, IndexRoute, Switch, Redirect,Link
} from 'react-router-dom';
import { DatePicker } from 'antd';

export default class App extends React.Component{
  componentDidMount(){
    console.log("hi");
  }
  render(){
      return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign 1</h1>
      <li><Link to="/app2">About</Link></li>
      <hr /><br />
      <DatePicker />
    </div>
  );
  }
  
}
