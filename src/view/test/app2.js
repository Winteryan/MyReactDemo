import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route, IndexRoute, Switch, Redirect,Link
} from 'react-router-dom';
import { DatePicker } from 'antd';

export default class App2 extends React.Component{
  componentDidMount(){
    console.log("hi2");
  }
  render(){
     return (
    <div style={{ margin: 100 }}>
      <h1>Router</h1>
    </div>
  );
  }
}
  