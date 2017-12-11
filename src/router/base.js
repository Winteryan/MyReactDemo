import React, { Component } from 'react';

import { sidebarMenu } from './models';

import SideMenu from '../view/component/sidemenu.js';
import Sider from '../view/component/sider.js';
import {getMenu} from './models.js';

import Head from '../view/component/head.js';

import store from '../redux-root/store';

import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';
// import ptBR from 'antd/lib/locale-provider/pt_BR';
// import zhTW from 'antd/lib/locale-provider/zh_TW';

// const la = [undefined, zhTW, ptBR, enUS];
const getLanguage = (lk)=>{
  if(lk === 1){
    return require('antd/lib/locale-provider/zh_TW.js');
  }else if(lk ===2){
    return require('antd/lib/locale-provider/pt_BR.js');
  }else if(lk ===3){
    return require('antd/lib/locale-provider/en_US.js');
  }
};
export default class Base extends Component {
  state = {
    menu: sidebarMenu,
    treeNode:null,
  }
  lk=store.getState().language;

  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>{
      const lk = store.getState().language;
      if( lk !== this.lk){
        this.lk = store.getState().language;
        this.forceUpdate();
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  getPadding=(treeNode)=>{
    this.setState({
      treeNode,
    });
  }
  render() {
    const { children } = this.props;
    const { menu,treeNode } = this.state;
    const lk = store.getState().language;

    let closeTime = new Date().getTime();
    let timeDifference=Math.abs(closeTime-parseInt(localStorage.cachetime));
    //1.8*10^6就是30分钟的毫秒数。30*60*1000  5*60*1000 8.64E7  
    if(timeDifference>1.8E6){//30分钟后需要重新登录
      localStorage.clear();
      sessionStorage.clear();
      location.hash = '#/login';
      return false;
    }else if(!localStorage.lastname&&!sessionStorage.lastname){
      location.hash = '#/login';
      return false;
    }else{
      localStorage.setItem('cachetime',new Date().getTime());
    }
    return (
      <LocaleProvider locale={getLanguage(lk)}>
        <div>
          <header>
            <Head />
          </header>
          <aside>
          </aside>
          <main>
            <div>
              {children}
            </div>
          </main>
        </div>
      </LocaleProvider>

    );
  }
}
